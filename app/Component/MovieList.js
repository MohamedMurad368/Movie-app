"use client";
import React, { useContext, useState } from 'react';
import { MovieContext } from '../Context/Context';  
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid'; 

const MovieList = () => {
  const { movies, likedMovies, addToLikedMovies, removeFromLikedMovies } = useContext(MovieContext); 
  const [searchQuery, setSearchQuery] = useState('');

  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLike = (movie) => {
    if (likedMovies.some((likedMovie) => likedMovie.id === movie.id)) {
      removeFromLikedMovies(movie.id); 
    } else {
      addToLikedMovies(movie); 
    }
  };

  return (
    <div className="p-4">
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button
            onClick={() => {}}
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 p-4 relative"
          >
            <Link href={`/movie/${movie.id}`}>
              <img
                className="w-full h-80 sm:h-72 md:h-80 object-contain rounded-t-lg transition duration-300 ease-in-out"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">
                  {movie.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{movie.release_date}</p>
              </div>
            </Link>

            <button
              onClick={() => handleLike(movie)}
              className={`absolute top-4 right-4 text-2xl transition-transform duration-300 ${
                likedMovies.some((likedMovie) => likedMovie.id === movie.id)
                  ? 'text-red-500 scale-125'
                  : 'text-gray-400 hover:text-red-500'
              }`}
            >
              <HeartIcon className="w-6 h-6" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MovieList;
