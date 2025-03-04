import React from "react";
import {  FaYoutube, FaChartBar } from "react-icons/fa";
import { CgFilm } from "react-icons/cg";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-[90%] w-60 mt-[66px]  bg-gray-900 text-white p-4 fixed left-0 top-0 max-w-min ">
     
     
      <h2 className="text-xl font-bold mb-6">Account</h2>
      <ul className="space-y-4">
        

      <Link to="/channels">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
        <FaYoutube/><span>Channel</span>
        </li>
         </Link>

        <Link to="/upload">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
        <CgFilm/><span>Upload</span>
        </li>
         </Link>
         

         <Link to="/chart">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
        <FaChartBar/><span>Progess</span>
        </li>
     </Link>
     <Link to="/login">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
        <FaChartBar/><span>Login</span>
        </li>
     </Link>
     <Link to="/registe">
        <li className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-700 rounded-lg">
        <FaChartBar/><span>Register</span>
        </li>
     </Link>
         
 
      </ul>
    </div>
  );
};

export default Sidebar;
