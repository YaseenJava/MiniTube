import React, { useState, useEffect,useContext } from "react";

function MovieSlider() {

  const [movies,setMovies]=useState([]);
  const nextMovie = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % movies.length);
  };


  useEffect(() => {
    const interval = setInterval(nextMovie, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentMovie = movies[currentIndex]; // Get the current movie based on the index

  return (
    <div className="w-full h-screen bg-black overflow-hidden relative">
      <div
        className="w-full h-full absolute inset-0 transition-all duration-1000 ease-in-out transform"
        style={{
          backgroundImage: `url(${currentMovie.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="absolute top-1/2 left-10 transform -translate-y-1/2 text-white">
        <button
          className="bg-black bg-opacity-50 p-4 rounded-full text-3xl"
          onClick={nextMovie} 
        >
          &#10094;
        </button>
      </div>

      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 text-white">
        <button
          className="bg-black bg-opacity-50 p-4 rounded-full text-3xl"
          onClick={nextMovie} 
        >
          &#10095;
        </button>
      </div>

      <div className="absolute bottom-20 left-10 text-white">
        <h1 className="text-6xl font-bold">{currentMovie.name}</h1>
        <div className="text-xl mt-2">{currentMovie.description}</div>
        <div className="text-lg mt-2">Rating: {currentMovie.rating}</div>

        <div className="mt-6 space-x-4">
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black">
            Watch Now
          </button>
          <button className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-yellow-400 hover:text-black">
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
}

export default MovieSlider
