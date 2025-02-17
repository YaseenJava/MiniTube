
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
      <div className="fixed left-[29%] top-[12%] flex flex-col items-center p-3 bg-black shadow-lg rounded-2xl w-[340px] h-[210px] lg:w-[600px] lg:h-[340px] lg:left-[11%] lg:top-[10%] ">
        {/* Header with drag handle and close button */}
        <div className="drag-handle w-full flex justify-between items-center p-2 bg-black rounded-t-2xl cursor-move"> 
          <button onClick={() => setVisible(false)} className="text-red-500 hover:text-red-700 ">
            <FaArrowLeft/>
          </button>
        </div>

        {/* Video Player */}
        <iframe
          width=""
          height=""
          className="rounded-lg shadow-lg w-[340px] h-[210px] lg:w-[600px] lg:h-[340px]"
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
