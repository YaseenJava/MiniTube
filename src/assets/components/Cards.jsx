// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Shorts from "./Shorts"
// import VideoSkeleton from "./VideoSkeleton";

// const Cards=({ video }) => {
//    const {thumbnail,title,id}=video;
//    var duration=video.duration;
//    var imgUrl=video.thumbnail_480_url;
//    var time=(video.duration/60);
//   // console.log(video)
//   var [loading,setLoading]=useState(false);
//    if(!imgUrl || !duration)
//    {
//       duration=0;
//       console.log(duration)
//       imgUrl=video.thumbnail_url;
//    }
   
//    setTimeout(()=>{
//     setLoading(false)
//  },3000)
 
//    if (loading) {
//        return (
//          <div className=" w-[70%] mt-[5%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//            {Array.from({ length: 12}).map((_, index) => (
//              <VideoSkeleton key={index} />
//            ))}
//          </div>
//        );
       
//       }
//       //setLoading(false);
//    if(duration>100 || duration==0){
//   return (
//     <div className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg border-gray-400 hover:scale-[1.2] transition-transform duration-300">
//       <Link  to={`/video/${encodeURIComponent(video.id)}`} key={video.id}>
       
      
      
//        <img
//        src={imgUrl}
//        alt={imgUrl}
//        className="w-full transition-transform duration-300 transform group-hover:scale-80"
//      /> 
//      {/* <span className="hidden bg-gray-900 bg-opacity-10 backdrop-blur-sm lg:relative relative top-[-21px] left-[220px]">{time}min</span> */}
   

     
     
//      <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-0 transition-opacity p-4">
     
    
       
       
//        <h3 className="text-lg font-bold text-center">{video.title}</h3>
//        <p className="text-sm">{video.channel}</p>
      
//      </div>
//     <h6 className="text-clip text-[20px] text-gray-700 font-semibold font-sans absolute top-[20px] hidden">{video.title.length>30 ? video.title.substring(0,30)+ "..." : video.title}</h6>
//     <p className="text-sm font-serif">{}</p>
    
//      </Link>
//     </div>
//   );
// }
// else if(duration<50){

//   <Shorts videos={video}></Shorts>
// }
 
// }

// export default Cards;
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Shorts from "./Shorts";
import VideoSkeleton from "./VideoSkeleton";

const Cards = ({ video }) => {
  const [loading, setLoading] = useState(true);

  const {
    id,
    title,
    thumbnail_url,
    thumbnail_480_url,
    duration = 0,
    channel,
  } = video;

  const imgUrl = thumbnail_480_url || thumbnail_url;
  const timeInMin = Math.round(duration / 60);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  // if (loading) {
  //   return (
  //     <div className="w-[200px] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 px-4">
  //       {Array.from({ length: 8 }).map((_, i) => (
  //         <VideoSkeleton key={i} />
  //       ))}
  //     </div>
  //   );
  // }

  // if (duration < 50) {
  //   return <Shorts videos={video} />;
  // }

  return (
    <div className="relative group overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300">
      <Link to={`/video/${encodeURIComponent(id)}`}>
        <img
          src={imgUrl}
          alt={title}
          className="w-full h-48 object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
        />

        <div className="p-3 bg-gray-900  rounded-b-xl ">
          <h3 className="text-md text-white line-clamp-2">
            {title}
          </h3>
          <div className="text-sm text-white mt-1 flex justify-between items-center">
            <span>{channel}</span>
            <span>{timeInMin > 0 ? `${timeInMin} min` : "Live"}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Cards;
