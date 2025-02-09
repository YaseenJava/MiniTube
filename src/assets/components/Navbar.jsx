import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="fixed top-0 left-0  text-cyan-50 py-4 z-10 bg-transparent">
      <div className="container mx-auto flex justify-between items-center px-4">
        
        <div className="flex items-center space-x-4"> 
          <Link to="/">
            <img
              className="h-10 w-auto"
              src="https://t3.ftcdn.net/jpg/04/42/73/48/240_F_442734831_g2ipwRH3K4n8GCRZ0fOk4C5tU9dvK7no.jpg"
              alt="IMDb Logo"
            />
          </Link>
        </div>

        <div className="flex space-x-8 text-[15px] font-serif flex-grow justify-center">
          <Link
            to="/movies/popular"
            className="hover:underline hover:text-gray-500 transition duration-300"
          >
            Popular
          </Link>
          <Link
            to="/movies/top_rated"
            className="hover:underline hover:text-gray-500 transition duration-300"
          >
            Top Rated
          </Link>
          <Link
            to="/movies/upcoming"
            className="hover:underline hover:text-gray-500 transition duration-300"
          >
            Upcoming
          </Link>
        </div>

        <div>
          <button className="border-1 border-white text-gray-800 px-10 py-2 hover:text-white transition duration-300">
            LogIn
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar
