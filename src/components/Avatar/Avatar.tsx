import { useMemo } from "react";
import { Link } from "react-router-dom";
import DoctorAvatar from "@assets/doctor.png";
import PatientAvatar from "@assets/patient.png";
import { useCurrentUser } from "@hooks";
import * as enums from "@interface/enum";

export const Avatar = () => {
  const user = useCurrentUser();
  const avatar = useMemo(
    () =>
      user?.accountType === enums.AccountTypes.DOCTOR
        ? DoctorAvatar
        : PatientAvatar,
    [user?.accountType]
  );

  return (
    <Link to="/account">
      <div
        className="
      w-12 h-12 
      rounded-full
      border-4 
      border-accent
      overflow-hidden 
      transition 
      cursor-pointer
      bg-white
      hover:border-primary"
      >
        <img
          src={user?.profilePicture?.link || avatar}
          className="w-full rounded-full"
        />
      </div>
    </Link>
  );
};
