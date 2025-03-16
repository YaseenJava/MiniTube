import { Link } from "react-router-dom";
function Shorts({videos}){

   const {thumbnail,title,id,duration}=videos;
   var imgUrl=videos.thumbnail_480_url;
   var time=(videos.duration/60);
   if(!imgUrl)
   {
      imgUrl=videos.thumbnail_url;
   }
   console.log(imgUrl)
   

  return (
    <div className="flex-col h-[500px] w-full bg-amber-100 absolute top-[200px]">
      <Link  to={`/video/${encodeURIComponent(id)}`} key={id}>
       
       <img
       src={imgUrl}
       alt={videos.thumbnail_url}
       className="w-full transition-transform duration-300 transform group-hover:scale-80"
     /> 
     <span className=" bg-gray-900 lg:relative relative top-[-21px] left-[220px]">{time}min</span>
   

     
     <div className="absolute inset-0 bg-black bg-opacity-75 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-0 transition-opacity p-4">
     
    
       
       
       <h3 className="text-lg font-bold text-center">{videos.title}</h3>
       <p className="text-sm">{videos.channel}</p>
      
     </div>
    <h6 className="text-clip font-serif">{videos.title.length>30 ? videos.title.substring(0,30)+ "..." : videos.title}</h6>
    <p className="text-sm font-serif">{}</p>
    
     </Link>
    </div>
  );
}
 


export default Shorts;
