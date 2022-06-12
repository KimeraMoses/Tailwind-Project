import React, { useState } from "react";
import { Fade, Paper, Popper } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import { SignOutButton } from "@components";
import { useCurrentUser } from "@hooks";
import { AiOutlineDashboard } from "react-icons/ai";

const AuthenticatedUser: React.FunctionComponent = () => {
  const user = useCurrentUser();
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();

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
      <Link
        to="/dashboard/user"
        className="flex"
        onClick={handleClick("bottom-end")}
        onMouseEnter={handleClick("bottom-end")}
      >
        <Avatar
          src={user?.profilePicture?.link}
          alt={user?.firstName + " " + user?.lastName}
        />
      </Link>
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
              <Paper elevation={3} className="font-body">
                <div className="px-2">
                  <Link
                    to="/dashboard/user"
                    className="flex items-center justify-start cursor-pointer px-5 py-2 font-semibold rounded-lg capitalize text-primary hover:text-accent"
                  >
                    <AiOutlineDashboard className="text-lg mr-2" />
                    Dashboard
                  </Link>
                  <SignOutButton />
                </div>
              </Paper>
            </Fade>
          )}
        </Popper>
      )}
    </div>
  );
};

export default AuthenticatedUser;
