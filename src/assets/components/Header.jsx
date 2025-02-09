import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";


function Header(){
  
    const [search, setSearch]=useState("")
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-3 shadow-md bg-gray-900 z-[9999]">

      {/* Logo */}
      <div className="flex items-center gap-2 ">
        <img  src="https://t3.ftcdn.net/jpg/04/42/73/48/360_F_442734884_HeQkk5BGbayZVFB98qippHJlR60CfpdW.jpg" alt="Logo" className="h-10 w-12" />
      </div>
      
      {/* Search Bar */}
      <div className="flex items-center border bg-black border-gray-300 rounded-full px-4 py-2 w-1/2">
        <input 
          type="text" 
          placeholder="Search" 
          value={search}
          onChange={(e)=> setSearch(e.target.value)}
          className="w-full outline-none hover:text-white" 
        />
        <Link to={`/search/"${search}`}>
        <FaSearch className="text-white cursor-pointer" />
        </Link>
      </div>
      
       <Link to="/login">
      <button className="bg-gray-100 text-black font-bold px-4 py-2 rounded-full">Login</button>
      </Link> 




     {/* <button onClick={() => navigate("/login")} className="bg-gray-100 text-black font-bold px-4 py-2 rounded-full">
      Login
    </button> */}

    </nav>
  );
};

export default Header;
