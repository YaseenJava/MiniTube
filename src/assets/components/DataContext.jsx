// import React, { createContext, useState, useEffect } from 'react';

// const Context = createContext();

// function DataContext({ children }) {
//   const [movies, setMovies] = useState([]);
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);



//  const movie= [
//     {
//       "name": "The Shawshank Redemption",
//       "year": 1994,
//       "rating": 9.3,
//       "image": "https://example.com/images/shawshank.jpg",
//       "desc": "Two imprisoned men form a deep bond over the years, finding solace and eventual redemption through acts of common decency."
//     },
//     {
//       "name": "The Dark Knight",
//       "year": 2008,
//       "rating": 9.0,
//       "image": "https://example.com/images/dark_knight.jpg",
//       "desc": "When the menace known as The Joker emerges from "
//     }
// ] ; 
// setMovies(movie);

// //   useEffect(() => {
// //     const fetchMovies = async () => {
// //       try {
// //        const response = await fetch('https://api.themoviedb.org/3/movie/550?api_key=6f7f73d6b30948c28cc21b72aca92c76'); 
// //        if (!response.ok) {
// //        throw new Error('Failed to fetch movies');
// //         }
// //         const data = await response.json();
// //         setMovies(data.results); // Assuming the movies are inside 'results'
// //         console.log(data.results);
// //       } catch (err) {
// //         setError(err.message);
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchMovies();
// //   }, []);

// //   if (loading) {
// //     return <h2 className="text-white text-center">Loading...</h2>;
// //   }

// //   if (error) {
// //     return <h2 className="text-red-500 text-center">Error: {error}</h2>;
// //   }

//   return (
//     <Context.Provider value={{ movies, currentIndex, setCurrentIndex }}>
//       {children}
//     </Context.Provider>
//   );
// }

// export default DataContext;
