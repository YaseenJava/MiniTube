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

  const handleGoogleLogin = () => {
    fetch("http:localhost:8080/...auth2/")
    console.log("Logging in with Google...");
  };

  return (
    <div className="absolute left-[35%] top-[30%] flex justify-center items-center h-[40%] border-green-50  ">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
        <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <div className="mt-4 text-center">
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
          >
            Log in with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
