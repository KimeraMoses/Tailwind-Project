import React, { useCallback, useState } from "react";
import { MeetingTypeOptions } from "@constants";
import * as models from "@interface/models";
import { CreateModal } from "../Modal";
import { HttpApi } from "@api";
import { ConnectGoogleCalendar } from "@utils";
import { Button, showNotification } from "@components";
import { OnlineMeetingTypes } from "@interface/enum";

export const SelectAppointmentMeeting: React.FunctionComponent<
  SelectAppointmentMeetingProps
> = ({ onSelect, onCancel }) => {
  const [onlineMeeting, setOnlineMeeting] = useState(
    {} as models.OnlineMeeting
  );

  const onSubmit: React.FormEventHandler = useCallback(
    async (event) => {
      event.preventDefault();
      if (onlineMeeting.type === "phone") {
        return onSelect(onlineMeeting);
      } else if (onlineMeeting.type === "googleCalendar") {
        const { success } = await HttpApi.refreshGoogleCalendarAccess();
        if (success === true) return onSelect(onlineMeeting);

        const connected = await ConnectGoogleCalendar();
        if (connected === true) return onSelect(onlineMeeting);
        showNotification(
          "Couldnt connect to your calendar, please try again",
          "warn"
        );
      }
      return undefined;
    },
    [onlineMeeting, onSelect]
  );

  const onMeetingTypeChange = useCallback((event: React.SyntheticEvent) => {
    const target = event.target as HTMLSelectElement;
    const type = target.value as OnlineMeetingTypes;
    setOnlineMeeting((details) => ({ ...details, type }));
  }, []);

  return (
    <div className="p-4">
      <h3 className="my-6 text-3xl font-medium">
        Where will the appointment happen?
      </h3>
      <form onSubmit={onSubmit} className="w-full">
        <select
          className="shadow
				        w-full
				        h-11
				        p-2
				        mb-5 border border-gray rounded text-black bg-white"
          name="type"
          required
          onChange={onMeetingTypeChange}
        >
          <option value="">choose a meeting option</option>
          {MeetingTypeOptions.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </select>

        <div className="flex items-center">
          {onlineMeeting.type === 'googleCalendar' &&
            <button type="submit" className="googleBtn">
              <img src="/google-icon.svg"/>
              <div className="text">Sign In with Google</div>
            </button>
          }
          {
            onlineMeeting.type !== 'googleCalendar' && 
            <Button className="mr-2 px-4 py-2" type="submit" style={{height:46}}>
              Select option
            </Button>
          }
          <Button className="ml-2 px-4 py-2" type="reset" style={{height:46}} onClick={onCancel}>
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export const SelectAppointmentMeetingModal = () => {
  return new Promise<models.OnlineMeeting | null>((res, rej) => {
    const modalArgs = { args: { dismiss: () => {} } };

    const args = CreateModal<SelectAppointmentMeetingProps>(
      SelectAppointmentMeeting,
      {
        onSelect: (onlineMeeting) => {
          res(onlineMeeting);
          modalArgs.args.dismiss();
        },
        onCancel: () => modalArgs.args.dismiss(),
      }
    );

    modalArgs.args = args;
    args.dismissPromise.then(() => res(null));
  });
};

type SelectAppointmentMeetingProps = {
  onSelect: (onlineMeeting: models.OnlineMeeting) => void;
  onCancel: () => void;
};
