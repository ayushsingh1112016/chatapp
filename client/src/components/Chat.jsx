import React from "react";
import { useAuth } from "../contexts/AuthContext";

import { GrSend } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import Chatbox from "./Chat/Chatbox";

const Chat = ({ selected, setContacts, setSelected }) => {
  const { authUser } = useAuth();
  return (
    <div className="h-full w-full ml-3">
      {!selected && <Welcome authUser={authUser} />}
      {selected && (
        <Chatbox
          selected={selected}
          setContacts={setContacts}
          setSelected={setSelected}
        />
      )}
    </div>
  );
};

export default Chat;

const Welcome = ({ authUser }) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center gap-y-2 bg-[#EDEDED]">
      <div className="flex items-center justify-center gap-x-1">
        <h3 className="text-3xl max-w-[680px] truncate text-[#075E54]">
          Welcome,{" "}
          <span className="text-[#25D366] font-semibold text-4xl">
            {authUser.fullName}
          </span>
        </h3>
        <img src="/logo.gif" className="h-16" />
      </div>
      <p className="text-[#128C7E] text-sm">
        Click on any contact to start chatting
      </p>
      <div className="mt-4 flex gap-x-5 items-center justify-center">
        <button className="flex items-center justify-center gap-x-1 bg-[#25D366] hover:bg-[#20B358] transition-all text-white font-semibold px-4 py-2 rounded-full">
          <span>Invite</span> <GrSend className="text-xl" />
        </button>
        <a href="https://github.com/ayushsingh1112016/chatapp" target="_blank">
          <button className="flex items-center justify-center gap-x-1 bg-[#075E54] hover:bg-[#064C44] transition-all text-white font-semibold px-4 py-2 rounded-full">
            <span>Github</span> <FaGithub className="text-xl" />
          </button>
        </a>
      </div>
    </div>
  );
};
