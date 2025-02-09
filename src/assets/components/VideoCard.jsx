// import React from "react";
// import { useParams } from "react-router-dom";
// import { useLocation } from "react-router-dom";
// import { Fa } from "react-icons/fa";


// function VideoCard() {
// // const { videoId } = useParams();

//  const location = useLocation();
//  const videoId = location.pathname.split("/video/")[1];


//   // console.log("videoiD:",videoId);
//   // console.log("url-",'https://www.dailymotion.com/video/${videoId}')
//   // console.log(`Final URL: https://www.dailymotion.com/embed/video/${videoId}`);
//   // console.log(`https://geo.dailymotion.com/player.html?video=${videoId}`)


//   return (
//     <div className="absolute left-[10%] top-[10%] flex justify-center items-center h-[360px] w-[640px] border-amber-50 bg-gray-100 rounded-2xl">
      
     
      

    
      
//       <iframe
//         width="640"
//         height="360"
//         className="rounded-2xl shadow-lg "
//         //src={`https://www.dailymotion.com/embed/video/${videoId}`}
//         src={`https://geo.dailymotion.com/player.html?video=${videoId}`}
//         title="DailyMotion Video"
//         allowFullScreen
        
//       ></iframe>

//     </div>
//   );
// }

import { useLocation, useNavigate } from "react-router-dom";
//import Draggable from "react-draggable";
import { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";



function VideoCard() {
  const location = useLocation();
  const navigate = useNavigate();
  const [visible, setVisible] = useState(true);

  // Extract video ID from URL
  const videoId = location.pathname.split("/video/")[1];
  const videoUrl = `https://geo.dailymotion.com/player.html?video=${videoId}`;

  console.log("videoID:", videoId);
  console.log("Final URL:", videoUrl);

  // Hide component when closed
  if (!visible) return null;

  return (
   // <Draggable bounds="parent" handle=".drag-handle">
      <div className="fixed left-[10%] top-[10%] flex flex-col items-center p-3 bg-black shadow-lg rounded-2xl w-[640px] h-[400px]">
        {/* Header with drag handle and close button */}
        <div className="drag-handle w-full flex justify-between items-center p-2 bg-black rounded-t-2xl cursor-move"> 
          <button onClick={() => setVisible(false)} className="text-red-500 hover:text-red-700 ">
            <FaArrowLeft/>
          </button>
        </div>

        {/* Video Player */}
        <iframe
          width="600"
          height="340"
          className="rounded-lg shadow-lg"
          src={videoUrl}
          title="DailyMotion Video"
          allowFullScreen
        ></iframe>

        {/* Back Button */}
        {/* <button onClick={() => navigate(-1)} className="flex items-center mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
  <FaArrowLeft className="mr-2" /> Back
  </button> */}

      </div>
//    </Draggable>
  );
}

export default VideoCard;
