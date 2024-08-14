import React from "react";

const Searchbox = () => {
  return (
    <div className="h-[8%] p-1 mb-2">
      <input
        className="w-full h-full bg-[#ffffff] ring-1 ring-gray-300 focus:ring-[#25D366] rounded-xl py-2 text-gray-800 px-3 outline-none"
        placeholder="Search contacts"
      />
    </div>
  );
};

export default Searchbox;
