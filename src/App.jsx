import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";

import Header from './assets/components/Header';
import Sidebar from './assets/components/Sidebar';
import Home from './assets/components/Home';
import VideoCard from './assets/components/VideoCard'
import Login from './assets/components/Login';
import VideoUpload from './assets/components/VideoUpload';
import PrivateRoute from './assets/components/PrivateRoute';
import Register from './assets/components/Register';
import Account from './assets/components/Account';



function App() {

  const CLIENT_ID = "609452000266-1g3qmkd7oi3970kpsr3s4t71slr0ir6b.apps.googleusercontent.com";

  return (
    <div className="App">
       <GoogleOAuthProvider clientId={CLIENT_ID}>

        <Router>
          <Header/>
           <Sidebar/>
           <Home/>
            <Routes>
            
              <Route path="/home" element={<h2>b</h2>}></Route>
              <Route path="/login" element={<Login />} />
               {/* <Route element={<PrivateRoute />}>  */}
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/setting" element={<h3>c</h3>} />
              <Route path="/info" element={<h1>Error Page</h1>} />
              <Route path="/menu" element={<h1>Error Page</h1>} />
              <Route path="/video/*" element={<VideoCard />} />
              <Route path="/search/*" element={<Home />} />
              <Route path="/upload" element={<VideoUpload />} />
               <Route path="/register" element={<Register/>} />
               <Route path="/account" element={<Account/>} />
              {/* </Route> */}















{/* 
                <Route path="/setting" element={<h3>c</h3>}></Route>
                <Route path="/info" element={<h1>Error Page</h1>}></Route>
                <Route path="/menu" element={<h1>Error Page</h1>}></Route>
                <Route path="/video/*" element={<VideoCard/>}></Route>
              
               <Route path="/search/*" element={<Home/>}></Route>
               <Route path="/upload" element={<VideoUpload/>}></Route>
               <Route path="/login" element={<Login />} />
               <Route element={<PrivateRoute />}>
               <Route path="/dashboard" element={<Dashboard />} />
               </Route> */}

            </Routes>
        </Router>
        </GoogleOAuthProvider>

    </div>
  );
}

export default App;
  function Dashboard(){
  return <h1>hello</h1>
 }