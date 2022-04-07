import React, { useCallback, useMemo, useState, SyntheticEvent } from "react";
import { HttpApi } from "@api";
import { useCurrentUser } from "@hooks";
import * as enums from "@interface/enum";
import { ImageCropperModal } from "@components";
import DoctorAvatar from "@assets/doctor.png";
import PatientAvatar from "@assets/patient.png";

export const AvatarEditor: React.FunctionComponent = () => {
  const user = useCurrentUser();
  const defaultAvatar = useMemo(
    () =>
      user?.accountType === enums.AccountTypes.DOCTOR
        ? DoctorAvatar
        : PatientAvatar,
    [user?.accountType]
  );

  const [profilePictureUrl, setProfilePicUrl] = useState(
    user?.profilePicture?.link
  );

  const onFileChange = useCallback(async (event: SyntheticEvent) => {
    const fileElm = event.target as HTMLInputElement;
    const file = fileElm.files && fileElm.files[0];
    if (file) {
      const croppedFile = await ImageCropperModal({ file, aspectRatio: 1 });
      if (croppedFile) {
        const formData = new FormData();
        formData.append("files", croppedFile);
        const profile = await HttpApi.uploadProfilePicture(formData as any);
        setProfilePicUrl(profile.profilePicture?.link);
      }
    }
  }, []);

  return (
    <div className="flex flex-col justify-center gap-3">
      <h3 className="font-medium text-xl">Profile Picture</h3>
      <div className=" flex  flex-col gap-3    ">
        <div className="my-1">
          <div className="">
            <label
              className="px-4 py-2 cursor-pointer rounded transition text-white bg-primary hover:bg-accent"
              htmlFor="profilePictureInput"
            >
              Upload picture
            </label>
            <input
              style={{
                height: 1,
                width: 1,
                outline: "none",
                border: "none",
                opacity: 0,
                pointerEvents: "none",
              }}
              id="profilePictureInput"
              name="profilePicture"
              required={
                user?.accountType === enums.AccountTypes.DOCTOR &&
                !profilePictureUrl
              }
              type="file"
              accept="image/*"
              onChange={onFileChange}
            />
          </div>
        </div>
        <div className="my-1 mb-3" style={{ minWidth: 100, maxWidth: 300 }}>
          <img
            className=" h-auto object-cover rounded-full"
            style={{ maxWidth: 200, border: "1px solid lightgray" }}
            src={profilePictureUrl || defaultAvatar}
          />
        </div>
      </div>
    </div>
  );
};
