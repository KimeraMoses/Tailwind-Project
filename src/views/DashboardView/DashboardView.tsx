import React, { useCallback, useMemo } from "react";
import { Popover } from "@headlessui/react";
import { Link, useNavigate } from "react-router-dom";
import { Avatar } from "@components";
import * as types from "@interface/models";
import * as enums from "@interface/enum";
import { useSignOutReducer, useCurrentUser } from "@hooks";
import { SignOutButton } from "@components";
const allRoutes = [
  { id: "account", name: "Account", path: "/account" },
  {
    id: "schedule",
    name: "Schedule",
    path: "/schedule",
    roles: [enums.AccountTypes.DOCTOR],
  },
  { id: "doctors", name: "Doctors", path: "/doctors" },
  { id: "appointments", name: "Appointments", path: "/appointments" },
];

export const DashboardView: React.FunctionComponent = ({ children }) => {
  return (
    <div className="relative ">
      <div className="flex ">
        <DashBoardSideBar />
        <div className="py-6 px-6 flex-grow overflow-hidden ">{children}</div>
      </div>
    </div>
  );
};

export const DashBoardSideBar: React.FunctionComponent = () => {
  const user = useCurrentUser();
  const routes = useMemo(
    () =>
      allRoutes.filter(
        (route) =>
          user?.accountType &&
          (!route.roles || route.roles.includes(user.accountType))
      ),
    [user?.accountType]
  );

  const accountTypeName = useMemo(
    () => (user?.accountType as any)?.capitalize(),
    [user?.accountType]
  );

  return (
    <div className="hidden max-w-sideBar xl:min-w-sideBar sticky pb-4 md:flex flex-col  justify-between top-navbarsOffset bg-backgroundSidebar text-white  h-sideBarHeight  shadow">
      <div className="flex flex-col  divide-y divide-background ">
        <div className="m-auto p-4 ">
          <div>
            <Avatar />
          </div>
        </div>
        <div className="flex flex-col">
          {routes.map((route) => (
            <Link
              key={route.name}
              to={route.path}
              className=" transition-all hover:text-accent p-3 "
            >
              {route.id === "account" ? `${accountTypeName} ` : ``}
              {route.name}
            </Link>
          ))}
        </div>
      </div>

      <SignOutButton />
    </div>
  );
};
