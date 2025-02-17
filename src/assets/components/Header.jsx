import React, { useState } from "react";
import { FaMicrophone, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
//import { useNavigate } from "react-router-dom";


function Header() {

  const [search, setSearch] = useState()
  const [isListening, setIsListening] = useState(false);

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.continous = false
  recognition.interimResult = false
  recognition.lan = 'eng-US'


  recognition.onresult = (e) => {
    const transcript = e.results[0][0].transcript
    console.log("voice record", transcript)
    setSearch(transcript)
  }

  recognition.onerror = (e) => {
    console.log("sorry cant hear ", e.error)
  }

  const startListening = () => {
    setIsListening(true);
    recognition.start();

    return <div>

    </div>
  };

  const stopListening = () => {
    setIsListening(false);
    recognition.stop();
  };

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-3 shadow-md bg-gray-900 z-[9999]">


      <div className="flex items-center gap-2 ">
        <img src="https://static.vecteezy.com/system/resources/previews/002/768/246/non_2x/vn-logo-letter-initial-logo-designs-template-free-vector.jpg" alt="Logo" className="h-10 w-12" />
      </div>


      <div className="flex items-center border bg-black border-gray-300 rounded-full px-4 py-2 w-1/2">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full outline-none hover:text-white"
        />
        <div className="flex items-center gap-2">
          <Link to={`/search/${search}`}>
            <FaSearch className="text-white cursor-pointer" />
          </Link>
          <FaMicrophone className="cursor-pointer" onClick={isListening ? stopListening : startListening} />
        </div>

      </div>
      <div>
        <Link to="/login">
          <button className="bg-green-500 m-0.5 text-black font-bold px-4 py-2 rounded-full">Sign In</button>
        </Link>
        <Link to="/register">
          <button className="bg-red-600 text-black font-bold px-4 py-2 rounded-full">Sign Up</button>
        </Link>
      </div>





      {/* <button onClick={() => navigate("/login")} className="bg-gray-100 text-black font-bold px-4 py-2 rounded-full">
      Login
    </button> */}

    </nav>
  );
};

export default Header;
