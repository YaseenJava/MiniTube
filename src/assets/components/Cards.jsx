import React from "react";
import { Link } from "react-router-dom";
import Shorts from "./Shorts"


const Cards=({ video }) => {
   const {thumbnail,title,id,duration}=video;
   var imgUrl=video.thumbnail_480_url;
   var time=(video.duration/60);
   if(!imgUrl)
   {
      imgUrl=video.thumbnail_url;
   }
   
   
   if(duration>100){
  return (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-gray-400">
      <Link  to={`/video/${encodeURIComponent(video.id)}`} key={video.id}>
       
      
      
       <img
       src={imgUrl}
       alt={video.thumbnail_url}
       className="w-full transition-transform duration-300 transform group-hover:scale-80"
     /> 
     <span className=" bg-gray-900 lg:relative relative top-[-21px] left-[220px]">{time}min</span>
   

     
     
     <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-0 transition-opacity p-4">
     
    
       
       
       <h3 className="text-lg font-bold text-center">{video.title}</h3>
       <p className="text-sm">{video.channel}</p>
      
     </div>
    <h6 className="text-clip font-serif">{video.title.length>30 ? video.title.substring(0,30)+ "..." : video.title}</h6>
    <p className="text-sm font-serif">{}</p>
    
     </Link>
    </div>
  );
}
else if(duration<50){

  <Shorts videos={video}></Shorts>
}
 
}

export default Cards;
