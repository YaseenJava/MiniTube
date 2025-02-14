import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", username, password);
    // fetch("http:localhost:8080/login",{
    //   method:POST,
    //   headers:{
    //     contentType:application.json
    //   },
    //   body:{
    //     username:username,
    //     password:password
    //   }
    //})
  };

  const handleGoogleLogin = async() => {
    alert("Logging in with Google...");
    window.location.href = "http://localhost:8080/loginOauth";

  };

  return (
    <div className="fixed left-[35%] top-[30%] flex justify-center items-center h-[40%] border-green-50 ">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg bg-black"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg  bg-black"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-bold"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          {/* <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Log in with Google
          </button> */}

        <button className="w-full h-[50px] bg-white text-black rounded-lg hover:text-gray-700 text-white-900 font-bold -py-[20px] " onClick={handleGoogleLogin}>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWg7X0YYzUCU5m8BA_sH_ti92q4X0lCz5h_w&s" 
                 alt="Google Icon" className="w-[60px] h-full  rounded-[4px]"/>
            <span className="relative top-[-38px]"> Sign in with Google</span>
        </button>
    </div> 
        </div>
      </div>
    
  );
}

export default Login;
