import React from "react";
import { Link } from "react-router-dom";



const Cards=({ video }) => {
   const {thumbnail,title,id,duration}=video;
   var imgUrl=video.thumbnail_480_url;
   console.log(video.duration)
   if(!imgUrl)
   {
      imgUrl=video.thumbnail_url;
   }
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-amber-600">
      <Link  to={`/video/${encodeURIComponent(video.id)}`} key={video.id}>
       <img
        src={imgUrl}
        alt={video.thumbnail_url}
        className="w-full transition-transform duration-300 transform group-hover:scale-80"
      /> 
      <span className="mt-[] items-end z-[999]">{video.duration}</span>
    

      
      
      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-0 transition-opacity p-4">
      
     
        
        
        <h3 className="text-lg font-bold text-center">{video.title}</h3>
        <p className="text-sm">{video.channel}</p>
       
      </div>
     <h6 className="text-clip font-serif">{video.title.length>20 ? video.title.substring(0,20)+ "..." : video.title}</h6>
     <p className="text-sm font-serif">{}</p>
     </Link>
    </div>
  );
};

export default Cards;
