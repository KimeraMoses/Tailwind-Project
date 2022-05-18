import React, { useState, useEffect, useRef } from "react";
import { BiSearch } from "react-icons/bi";
import { InputField } from "./../../../components/InputField/InputField";
import userImage from "../../../assets/team/margret.png";
import userImage2 from "../../../assets/team/clive.png";
import ChatCard from "./ChatCard";
import { Avatar, Fade, IconButton, Paper, Popper } from "@mui/material";
import UserAvatar from "./UserAvatar";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiFillCamera } from "react-icons/ai";
import { IoMic } from "react-icons/io5";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { GrFormAttachment } from "react-icons/gr";
// import EmojiPicker from "./Emojis";

const UserMessages = [
  {
    message: "Message here",
    time: "date",
  },
];

const chats = [
  {
    image: userImage,
    name: "Dr. Margret Mutumba",
    message: "Meeting today?",
    date: "today",
    time: "10:02am",
  },
  {
    image: userImage2,
    name: "Missaga Zeus",
    message: "What plans today?",
    date: "Yesterday",
    time: "2:32pm",
  },
  {
    image: userImage,
    name: "Mubiru Isaac",
    message: "Can we reschedule the appointment?",
    date: "Yesterday",
    time: "10:01am",
  },
  {
    image: "",
    name: "Kimera Moxhus",
    message: "I can't make it at that time dr?",
    date: "Yesterday",
    time: "10:59pm",
  },
];

const Messages = (props: any) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const handleClick = (newPlacement: any) => (event: any) => {
    setAnchorEl(event.currentTarget);
    setOpen((prev) => !prev);
    setPlacement(newPlacement);
  };
  const userProfilePopperCloseHandler = () => {
    setOpen(false);
  };

  const onSearchHandler = (e: any) => {
    const { value } = e.target;
    setSearchTerm(value);

    if (searchTerm !== "") {
      const Results = chats.filter((Result: any) => {
        return Object.values(Result)
          .join(" ")
          .replace(/-/g, " ")
          .toLowerCase()
          .includes(searchTerm.toLowerCase());
      });
      setSearchResults(Results);
    }
  };
  useEffect(() => {
    setSearchResults([]);
  }, [searchTerm.length < 1]);

  return (
    <div className="p-3 rounded">
      <div className="flex items-start">
        <div className="w-1/2 px-2 pr-16">
          <div className="flex items-center bg-white text-primary font-medium rounded-xl px-2 w-full my-4">
            <BiSearch className="text-xl text-grayPrimary" />
            <InputField
              placeholder="Search month or Date"
              value={searchTerm}
              name="search"
              type="search"
              onChange={onSearchHandler}
              customClasses="border-none bg-white rounded-none text-primary"
            />
          </div>
          <div className="bg-white rounded-2xl shadow-md px-5 py-1 mt-8">
            <h3 className="font-semibold text-xl text-black mb-3">Chats</h3>
            {(searchResults.length > 0 ? searchResults : chats).map((chat) => {
              return (
                <ChatCard
                  key={chat.time}
                  image={chat.image}
                  name={chat.name}
                  message={chat.message}
                  date={chat.date}
                  time={chat.time}
                />
              );
            })}
          </div>
        </div>
        <div className="w-136 px-2 fixed bottom-5 right-0 h-[500px]">
          <div className="relative bg-white w-full shadow-md rounded-2xl px-8 py-1 h-full">
            <div className="border-b border-chatBlue py-3">
              <div className="flex select-none justify-between items-center">
                <div className="flex item-start">
                  <UserAvatar image={userImage2} name="Missaga Clive" />
                  <div className="flex flex-col ml-3">
                    <h5 className="text-base font-semibold text-black">
                      Missage Clive
                    </h5>
                    <p className="text-sm font-normal text-chatBlue">Online</p>
                  </div>
                </div>
                <div>
                  <IconButton
                    aria-label="menu"
                    onClick={handleClick("bottom-end")}
                  >
                    <BsThreeDotsVertical className="text-chatBlue text-2xl" />
                  </IconButton>
                  {open && (
                    <Popper
                      open={open}
                      onMouseLeave={userProfilePopperCloseHandler}
                      onClick={userProfilePopperCloseHandler}
                      anchorEl={anchorEl}
                      placement={placement}
                      transition
                      className="z-10 top-10"
                    >
                      {({ TransitionProps }) => (
                        <Fade {...TransitionProps} timeout={350}>
                          <Paper elevation={3} className="px-5 py-2">
                            <ul>
                              <li>Delete Chat</li>
                              <li>Block User</li>
                            </ul>
                          </Paper>
                        </Fade>
                      )}
                    </Popper>
                  )}
                </div>
              </div>
            </div>
            <div className="py-5 overflow-auto h-80">
              <div className="flex justify-start w-full mb-3 text-white">
                <div className="bg-[#979797] shadow pl-3 pr-1 py-1 rounded-tr-2xl rounded-bl-2xl max-w-[65%]">
                  <div className="m-0 text-sm select-text">
                    Mesage here Mesage here Mesage here Mesage here Mesage here
                  </div>
                  <div className="text-right text-sm pl-7">9:00am</div>
                </div>
              </div>
              <div className="flex justify-end w-full text-white mb-3">
                <div className="bg-[#1A66FF]  shadow pl-3 pr-1 py-1 rounded-tl-2xl rounded-br-2xl max-w-[65%]">
                  <div className="m-0 text-sm">
                    I will be available in the afternoon doctor
                  </div>
                  <div className="text-right text-sm pl-7">9:01am</div>
                </div>
              </div>
              <div className="flex justify-end w-full text-white mb-3">
                <div className="bg-[#1A66FF]  shadow pl-3 pr-1 py-1 rounded-tl-2xl rounded-br-2xl max-w-[65%]">
                  <div className="m-0 text-sm">
                    I will be available in the afternoon doctor
                  </div>
                  <div className="text-right text-sm pl-7">9:01am</div>
                </div>
              </div>
              <div className="flex justify-end w-full text-white mb-3">
                <div className="bg-[#1A66FF]  shadow pl-3 pr-1 py-1 rounded-tl-2xl rounded-br-2xl max-w-[65%]">
                  <div className="m-0 text-sm">
                    I will be available in the afternoon doctor
                  </div>
                  <div className="text-right text-sm pl-7">9:01am</div>
                </div>
              </div>
              <div className="flex justify-start w-full mb-3 text-white">
                <div className="bg-[#979797] shadow pl-3 pr-1 py-1 rounded-tr-2xl rounded-bl-2xl max-w-[65%]">
                  <div className="m-0 text-sm select-text">Alright then</div>
                  <div className="text-right text-sm pl-7">9:05am</div>
                </div>
              </div>
              <div className="flex justify-end w-full text-white mb-3">
                <div className="bg-[#1A66FF]  shadow pl-3 pr-1 py-1 rounded-tl-2xl rounded-br-2xl max-w-[65%]">
                  <div className="m-0 text-sm">
                    I will be available in the afternoon doctor
                  </div>
                  <div className="text-right text-sm pl-7">9:01am</div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 left-0 px-8 py-5 ">
              <div className="border-t border-chatBlue bg-white">
                <div className="flex items-center ">
                  <div className="flex-grow max-h-36">
                    <div className="flex items-center bg-[#B0B7C3] text-primary font-medium rounded-xl px-2 w-full my-4">
                      <IconButton size="small">
                        <GrFormAttachment className="text-xl text-grayPrimary" />
                      </IconButton>
                      {/* <InputField
                        placeholder=""
                        // value=""
                        name="search"
                        type="search"
                        // onChange={onSearchHandler}
                        customClasses="border-none bg-[#B0B7C3] rounded-none text-white"
                      /> */}
                      <textarea
                        rows={1}
                        className="textarea textarea-primary border-none bg-[#B0B7C3] box-border w-full rounded-lg select-none text-gray-700 leading-tight py-2 px-3 focus:outline-none focus:border-primary mr-2 font-Poppins"
                        placeholder="Type here"
                      ></textarea>
                      {/* <EmojiPicker showPreview={false} show={false} /> */}
                      <IconButton size="small">
                        <MdOutlineEmojiEmotions className="text-xl text-grayPrimary" />
                      </IconButton>
                      <IconButton size="small">
                        <AiFillCamera className="text-xl text-grayPrimary" />
                      </IconButton>
                    </div>
                  </div>
                  <div className="w-8 h-8 ml-3 cursor-pointer rounded-2xl bg-chatBlue text-white flex items-center justify-center">
                    <IoMic />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
