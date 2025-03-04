import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email,SetEmail]=useState("");
  const [phone ,SetPhone]=useState("");

  const form =new FormData()
    form.append("username" ,username)
    form.append("password" ,password)
    form.append("email" ,email)
    form.append("phone" ,phone)
    

  const handleLogin = async(e) => {
    e.preventDefault();
    console.log("Logging in:", username, password);
    
    
    // try{
    //   const response=await fetch("http://localhost:8080//minitube/register",{
    //     method:"POST",
    //     body:form
    //   })
    //   if(!response.ok){
    //     throw new Error("something went wrong!")
    //   }
    // }
    //   catch(err){
    //  console.log("error",err.message)
    //   }


try {
  const response = await axios.post("http://localhost:8080/auth/minitube/register", form);


} catch (err) {
  console.log("error", err.message);
}

    
  }
  

  

  return (
    <div className=" w-[300px] lg:w-[450px] fixed left-[35%] top-[30%] flex justify-center items-center h-[40%] border-green-50">
      <div className="bg-gray-900 p-6 rounded-lg shadow-lg w-96 text-white">
        <h3 className="text-2xl font-bold text-center">Register</h3>
        <h6 className="text-center mb-4">Creat your Account <span>in Minitube</span></h6>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-2 border rounded-lg bg-black"
            required
          />

          <input type="text"
          placeholder="email"
          value={email}
          onChange={(e)=>SetEmail(e.target.value)}
          className="w-full p-2 border rounded-lg bg-black"
          required
          ></input>
          
          <input type="text"
          placeholder="phone No"
          value={phone}
          onChange={(e)=>SetPhone(e.target.value)}
          className="w-full p-2 border rounded-lg bg-black"
          required
          ></input>
          

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
            className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-900 font-bold" onClick={handleLogin}
          >
            Register
          </button>
        </form>
        
        </div>
      </div>
    
  );
};

export default Login;
