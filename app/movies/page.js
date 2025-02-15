"use client"
import React, { useContext } from 'react';
import { MovieContext } from '../Context/Context';  
import { TrashIcon } from '@heroicons/react/24/solid';  

const LikedMovies = () => {
  const { likedMovies, removeFromLikedMovies } = useContext(MovieContext);  // إضافة removeFromLikedMovies من السياق

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Liked Movies</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {likedMovies.length > 0 ? (
          likedMovies.map((movie) => (
            <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden p-4 relative">
              <img
                className="w-full h-96 object-contain rounded-t-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{movie.release_date}</p>
              </div>
              {/* زر الحذف */}
              <button
                onClick={() => removeFromLikedMovies(movie.id)}
                className="absolute top-4 right-4 text-2xl text-red-500"
              >
                <TrashIcon className="w-6 h-6" />
              </button>
            </div>
          ))
        ) : (
          <p>No liked movies yet.</p>
        )}
      </div>
    </div>
  );
};

export default LikedMovies;
