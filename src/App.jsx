import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
//import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from './assets/components/Header';
import Sidebar from './assets/components/Sidebar';
import Home from './assets/components/Home';
import VideoCard from './assets/components/VideoCard'
import Login from './assets/components/Login';

function App() {
  return (
    <div className="App">
        <Router>
          <Header/>
           <Sidebar/>
           <Home/>
            <Routes>
                <Route index element={<h1>a</h1>}></Route>
                <Route path="/home" element={<h2>b</h2>}></Route>
                <Route path="/setting" element={<h3>c</h3>}></Route>
                <Route path="/info" element={<h1>Error Page</h1>}></Route>
                <Route path="/menu" element={<h1>Error Page</h1>}></Route>
                <Route path="/video/*" element={<VideoCard/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/login" element={<h1 className='align-middle'>helloo</h1>}></Route>


            </Routes>
        </Router>
    </div>
  );
}

export default App;