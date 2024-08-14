import React from "react";
import { IoSparklesOutline } from "react-icons/io5";
import AddContact from "./AddContact";
import { Logout } from "./Logout";

const Header = ({ setSelected, setContacts }) => {
  return (
    <div className="rounded-xl flex p-4 items-center justify-between bg-[#128C7E] text-white mb-2">
      <div className="flex items-center gap-x-1">
        <IoSparklesOutline className="text-white text-xl" />
        <h1 className="text-2xl font-bold text-white">
          MERN Chat
        </h1>
      </div>

      <div className="flex items-center justify-center gap-x-6 text-xl">
        <Logout />
        <AddContact setContacts={setContacts} setSelected={setSelected} />
      </div>
    </div>
  );
};

export default Header;
