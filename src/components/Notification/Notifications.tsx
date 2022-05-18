import React, { useState } from "react";
import { MdNotifications, MdKeyboardArrowDown } from "react-icons/md";
import { Avatar, Fade, IconButton, Paper, Popper } from "@mui/material";
import { NotificationIcon } from "./../../assets/icons/icons";

const NotificationsArray = [
  {
    id: "001",
    title:
      "Doctor James Kakoma the physiotherapist has accepted your 20/03/22 appointment.",
    status: "read",
  },
  {
    id: "002",
    title: "25 more specialists have signed up this month on our plateform...",
    status: "unread",
  },
  {
    id: "003",
    title: "25 more specialists have signed up this month on our plateform...",
    status: "unread",
  },
  {
    id: "004",
    title: "25 more specialists have signed up this month on our plateform...",
    status: "unread",
  },
  {
    id: "005",
    title: "25 more specialists have signed up this month on our plateform...",
    status: "read",
  },
];
const readMessages = NotificationsArray.filter((msg) => msg.status === "read");

const Notifications: React.FunctionComponent = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [read, setRead] = useState(false);

  const handleClick = (newPlacement: any) => (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setPlacement(newPlacement);
  };
  const userProfilePopperCloseHandler = () => {
    setOpen(false);
  };

  return (
    <div className="relative mr-1 mt-2">
      <IconButton aria-label="menu" onClick={handleClick("bottom-end")}>
        <MdNotifications className="text-2xl text-primary" />
      </IconButton>
      {open && (
        <Popper
          open={open}
          onMouseLeave={userProfilePopperCloseHandler}
          // onClick={userProfilePopperCloseHandler}
          anchorEl={anchorEl}
          placement={placement}
          transition
          className="z-10 top-10"
        >
          {({ TransitionProps }) => (
            <Fade {...TransitionProps} timeout={350}>
              <Paper elevation={3} className="w-96 p-3 font-body">
                <h3 className="text-black text-2xl font-bold">Notifications</h3>
                <div className="w-full flex items-center my-2">
                  <div
                    onClick={() => setRead(false)}
                    className="rounded-md px-4 py-2 mr-2 bg-primary text-white select-none text-base cursor-pointer"
                  >
                    All
                  </div>
                  <div
                    onClick={() => setRead(true)}
                    className="rounded-md px-4 py-2 m-1 bg-accent text-white select-none text-base cursor-pointer"
                  >
                    Read
                  </div>
                </div>
                <ul>
                  {(read ? readMessages : NotificationsArray).map((msg) => {
                    return (
                      <li className="flex items-center mb-1" key={msg.id}>
                        <NotificationIcon
                          iconColor={read ? "#F26E50" : "#225987"}
                          className="text-2xl"
                        />
                        <h6 className="text-sm ml-2 border-b border-primary text-black mb-2 pb-2 font-semibold">
                          {msg.title}
                        </h6>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-3 flex flex-col justify-center items-center">
                  <h6 className="text-sm text-black font-medium">Show More</h6>
                  <MdKeyboardArrowDown className="text-3xl text-primary font-bold -mt-2" />
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
};

export default Notifications;
