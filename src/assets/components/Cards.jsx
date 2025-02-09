import React from "react";
import { Link } from "react-router-dom";
const Cards=({ video }) => {
    const {thumbnail,title,channel ,id}=video;
   console.log(video)



  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-amber-600">
      <Link  to={`/video/${encodeURIComponent(video.id)}`} key={video.id}>
       <img
        src={video.thumbnail_480_url}
        alt={video.thumbnail_url}
        className="w-full transition-transform duration-300 transform group-hover:scale-80"
      /> 

    

      
      
      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-0 transition-opacity p-4">
      
     
        
        
        <h3 className="text-lg font-bold text-center">{video.title}</h3>
        <p className="text-sm">{video.channel}</p>
       
      </div>
     <h6 className="text-clip font-serif">{video.title.length>20 ? video.title.substring(0,20)+ "..." : video.title}</h6>
     <p className="text-sm font-serif">{video.channel}</p>
     </Link>
    </div>
  );
};

export default Cards;
