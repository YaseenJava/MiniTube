import React, { Children, createContext, useEffect, useState } from "react";
import Cards from "./Cards";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useLocation } from "react-router-dom";
import VideoSkeleton from "./VideoSkeleton";
function Home() {
  
  const [videos, setVideos] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const location=useLocation()



  const search = decodeURIComponent(location.pathname.split("/search/")[1] || "");
  // const searched =search.replace(" ","%")
  console.log(search)
 // console.log(`https://api.dailymotion.com/videos?search=${search}&fields=id,title,thumbnail_url&limit=20`)

  useEffect(() => {
    const fetchVideos = async () => {
      try {
          const response = await fetch(
          "https://api.dailymotion.com/videos?limit=40&fields=id,title,thumbnail_480_url,owner.username,duration");
           console.log("home")
      
        if (!response.ok) {
          throw new Error("Failed to load videos");
        }

        const data = await response.json(); 
        setVideos(data.list); 

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);


  

  if (loading) {
    return (
      <div className=" w-[70%] mt-[5%] grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {Array.from({ length: 12}).map((_, index) => (
          <VideoSkeleton key={index} />
        ))}
      </div>
    );
}

  if(search){
  
    search.replace(" ","%");
    console.log(search)

    const fetchingsearch = async () => {
      try {
          const response = await fetch
          (`https://api.dailymotion.com/videos?search=${search}&fields=id,title,thumbnail_url&limit=20`);
           
      
        if (!response.ok) {
          throw new Error("Failed to load videos");
        }

        const data = await response.json(); 
        setVideos(data.list);
        

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
  fetchingsearch();

 // console.log(videos);
  return (
    <div className="lg:mt-6 lg:ml-32 lg:w-3xl h-full pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {videos.length > 0 ? (
        videos.map((video) => <Cards key={video.id} video={video} loading={loading} />)
      ) : (
      <p className="text-center text-gray-500">No videos found.</p>

      )}
    </div>
  );  

  }

  if (error) {
   // return <h2 className="text-red-500 text-center font-bold text-7xl align-middle mt-10">Error: {error}</h2>;
    return <div className="h-20 ml-[50px] bg-black w-screen justify-center mt-20 ">
      <img className="ml-[105px] lg:ml-[40%]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwtIJk3Elzx2VOUYIZliWdxtC939G9ztfSuA&s" alt="oops "/>
      <h1 className="text-white text-center font-bold text-3xl align-middle mt-">Oops:{error}</h1>
    </div>
  }

  return (
    <div className="lg:mt-6 lg:ml-32 lg:w-3xl h-full pt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 ">
      {videos.length > 0 ? (
        videos.map((video) => <Cards key={video.id} video={video} loading={loading} />)
      ) : (
        <p className="text-center text-gray-500">No videos found.</p>
      )}
    </div>
  );
}

export default Home;
