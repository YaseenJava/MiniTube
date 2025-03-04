import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("Logging in:", username, password);
    const form =new FormData()
    form.append("username" ,username)
    form.append("password" ,password)
  //   try{
  //     const response=await fetch("http://localhost:8080//minitube/formlogin",{
  //       method:"POST",
  //       body:form
  //     })
  //     if(!response.ok){
  //       throw new Error("something went wrong!")
        
  //     }
  //     const token=response.json
  //   }
  //     catch(err){
  //    console.log("error",err.message)
  //     }


try {
  const response = await axios.post("http://localhost:8080/auth/minitube/formlogin", form
  );

  const token=response.data.toke;
  console.log(token);

} catch (err) {
  console.log("error", err.message);
}

    
   }
  

  const handleGoogleLogin = async() => {
    alert("Logging in with Google...");
    window.location.href = "http://localhost:8080/auth/loginOauth";


  //    try{
  //   const res=await axios.post("http://localhost:8080/loginOauth", { token: response.credential })
  //   if(!respone.ok){
  //     throw new Error("user is not Authentic")
  //   }
  //   localStorage.setItem("token", res.data.token);
  //   setUsername(res.data.user);
    
  // }
  // catch(err){
  //   console.log(" something went wrong ",err.message);
  // }

  }
  

  return (
    <div className=" w-[250px] lg:w-[450px] fixed left-[20px] lg:left-[35%] top-[30%] flex justify-center items-center h-[40%] border-green-50">
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
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 font-bold" onClick={handleLogin}
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
};

export default Login;
