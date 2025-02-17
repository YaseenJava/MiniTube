import React from "react";
import { FaHome, FaList, FaInfoCircle, FaCog } from "react-icons/fa";
import { CgFilm } from "react-icons/cg";

import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[90%] w-60 mt-[66px]  bg-gray-900 text-white p-4 fixed left-0 top-0 max-w-min ">
     
     
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <Link to="/home">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
          <FaHome /> <span>Home</span>
        </li>
        </Link >
        <Link to="/menu">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
          <FaList /> <span>Menu</span>
        </li>
        </Link>
        <Link to="/info">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
          <FaInfoCircle /> <span>Info</span>
        </li>
        </Link>
        <Link to="/setting">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
          <FaCog /> <span>Settings</span>
        </li>
        </Link>
        <Link to="/upload">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
        <CgFilm /><span>Upload</span>
        </li>
         </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
