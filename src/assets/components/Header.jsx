import React, { useState } from "react";
import { FaMicrophone, FaSearch, FaList, FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Header() {
  const [search, setSearch] = useState("");
  const [isListening, setIsListening] = useState(false);

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continuous = false;
  recognition.interimResults = false;
  recognition.lang = "en-US";

  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript;
    console.log("voice record", transcript);
    setSearch(transcript);
  };

  recognition.onerror = (e) => {
    console.log("sorry cant hear ", e.error);
  };

  const startListening = () => {
    setIsListening(true);
    recognition.start();
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between px-4 py-2 shadow-md bg-gray-900 z-[9999] h-[60px] lg:h-[80px]">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src="https://static.vecteezy.com/system/resources/previews/002/768/246/non_2x/vn-logo-letter-initial-logo-designs-template-free-vector.jpg"
          alt="Logo"
          className="h-8 w-8 lg:h-10 lg:w-12 rounded-full"
        />
      </div>

      {/* Search Bar - hidden on mobile */}
      <div className="flex items-center border bg-black border-gray-300 rounded-2xl m-2 px-3 py-1 w-[70%] h-9 lg:w-1/2">
  <input
    type="text"
    placeholder="Search"
    value={search}
    onChange={(e) => setSearch(e.target.value)}
    className="w-full text-white bg-black outline-none"
  />
  <Link to={`search/${search}`}>
    <FaSearch className="text-white ml-2 cursor-pointer" />
  </Link>
  <FaMicrophone
    className="text-white ml-2 cursor-pointer"
    onClick={isListening ? stopListening : startListening}
  />
</div>


      {/* Mobile Icons */}
      <div className="flex lg:hidden gap-4">
        <Link to="/menu">
          <FaList className="text-white text-xl" />
        </Link>
        <Link to="/account">
          <FaUserCircle className="text-white text-xl" />
        </Link>
      </div>

      {/* Buttons - only on desktop */}
      <div className="hidden lg:flex items-center gap-2">
        <Link to="/login">
          <button className="bg-green-500 text-black font-bold px-4 py-2 rounded-2xl">
            Sign In
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-red-600 text-black font-bold px-4 py-2 rounded-2xl">
            Sign Up
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
