import React, {
  useState,
  useCallback,
  useMemo,
  FunctionComponent,
} from "react";
import moment from "moment-timezone";
import { TimeSelector } from "./TimeSelector";
import * as models from "@interface/models";
import { GenerateLocalId } from "@utils";
import { CreateModal } from "../Modal";
import { HttpApi } from "@api";

export const EditAvailability: FunctionComponent<EditAvailabilityPropType> = ({
  title,
  calendarDate,
  timeZone,
  duration,
  onSave,
  availabilities: initialAvailabilities,
}) => {
  const [availabilities, setAvailabilities] = useState(
    JSON.parse(JSON.stringify(initialAvailabilities)) as models.Availability[]
  );

  const onChange = useCallback(
    (availability: models.Availability) =>
      ({ startDateTime, endDateTime }: onTimeChangeProps) => {
        setAvailabilities((availabilities) => {
          availability.startDateTime = startDateTime as any;
          availability.endDateTime = endDateTime as any;
          return [...availabilities];
        });
      },
    [timeZone, calendarDate]
  );

  const onAddSlot = useCallback(() => {
    setAvailabilities((availabilities) => [
      ...availabilities,
      {
        _id: GenerateLocalId(),
        timeZone,
        duration,
        startDateTime: null,
        endDateTime: null,
      } as any as models.Availability,
    ]);
  }, [timeZone, duration]);

  const onDelete = useCallback(
    (availability: models.Availability) => () => {
      setAvailabilities((availabilities) =>
        availabilities.filter((a) => a !== availability)
      );
    },
    []
  );

  const onSaveAvailabilities = useCallback(async () => {
    const cleanAvailabilities = availabilities
      .filter((a) => a.startDateTime && a.endDateTime && !a.locked)
      .map((a) => ({ ...a, _id: undefined }));
    await HttpApi.setAvailabilities(cleanAvailabilities);
    onSave();
  }, [onSave, availabilities]);

  return (
    <div className="z-20 h-128 w-full bg-white rounded ">
      <h1 className="border-gray border p-2 text-2xl">
        {title} - {calendarDate}
      </h1>

      <div className="p-5 flex flex-col gap-5 items-start">
        <div className=" mb-4 md:mb-0">
          <h1>Appointment Duration</h1>
          <div className="w-48 border rounded p-2 bg-gray ">
            {duration} minutes
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4 items-start w-full h-full">
          <div className="flex flex-col gap-2  h-56 overflow-scroll  overscroll-auto  w-full ">
            {availabilities.map((availability) => {
              return (
                <TimeSelector
                  key={availability._id}
                  availability={availability}
                  onChange={onChange(availability)}
                  timeZone={timeZone}
                  duration={duration}
                  calendarDate={calendarDate}
                  onDelete={onDelete(availability)}
                  availabilities={availabilities}
                />
              );
            })}
          </div>

          <div className="flex justify-between items-center w-full">
            <div
              className="flex gap-2 cursor-pointer items-center"
              onClick={onAddSlot}
            >
              <button className=" border-2 w-8 h-8 rounded-full  text-primary">
                +
              </button>
              <p className="">Add</p>
            </div>
            <button
              onClick={onSaveAvailabilities}
              className="p-1 w-24 border  rounded bg-primary text-white transition hover:bg-accent"
            >
              SAVE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const EditAvailabilityModal = (props: EditAvailabilityModalPropType) => {
  return new Promise<boolean>((res, rej) => {
    const modalArgs = { args: { dismiss: () => {} } };

    const args = CreateModal<EditAvailabilityPropType>(EditAvailability, {
      ...props,
      onSave: () => {
        res(true);
        modalArgs.args.dismiss();
      },
    });

    modalArgs.args = args;
    args.dismissPromise.then(() => res(false));
  });
};

type EditAvailabilityModalPropType = {
  title: string;
  calendarDate: string;
  timeZone: string;
  duration: number;
  availabilities: models.Availability[];
};

type EditAvailabilityPropType = EditAvailabilityModalPropType & {
  onSave: () => void;
};

type onTimeChangeProps = {
  startDateTime: string | null;
  endDateTime: string | null;
};
