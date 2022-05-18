import React from "react";
import { Avatar } from "@mui/material";

interface ChatProps {
  image: any;
  name: string;
  message: string;
  date: string;
  time: string;
}

const ChatCard: React.FC<ChatProps> = ({
  image,
  name,
  message,
  date,
  time,
}) => {
  return (
    <div className="flex justify-between items-start mb-5 cursor-pointer">
      <div className="flex">
        <Avatar src={image} alt={name} sx={{ width: 56, height: 56 }} />
        <div className="flex flex-col ml-2">
          <h5 className="text-base font-semibold text-black">{name}</h5>
          <p className="text-sm font-medium">{message}</p>
        </div>
      </div>
      <div className="relative">
        <h6 className="text-sm font-normal text-primary">
          {date}, {time}
        </h6>
      </div>
    </div>
  );
};

export default ChatCard;
