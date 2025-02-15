"use client";
import React, { useContext, useState } from 'react';
import { MovieContext } from '../Context/Context';  // تأكد من استيراد السياق
import Link from 'next/link';
import { HeartIcon } from '@heroicons/react/24/solid'; // تأكد من استيراد الأيقونة

const MovieList = () => {
  const { movies, likedMovies, addToLikedMovies, removeFromLikedMovies } = useContext(MovieContext); // إضافة loading و error هنا
  const [searchQuery, setSearchQuery] = useState('');

  // دالة لتصفية الأفلام بناءً على الاسم فقط
  const filteredMovies = movies.filter((movie) => 
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleLike = (movie) => {
    if (likedMovies.some((likedMovie) => likedMovie.id === movie.id)) {
      removeFromLikedMovies(movie.id); // إزالة من المفضلة
    } else {
      addToLikedMovies(movie); // إضافة إلى المفضلة
    }
  };

  return (
    <div className="p-4">
      {/* حقل البحث مع زر صغير ومتنسيق جميل */}
      <div className="flex justify-center mb-6">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            placeholder="Search by name..."
            className="p-2 w-64 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
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

      {/* عرض الأفلام بعد التصفية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all hover:scale-105 p-4 relative">
            <Link href={`/movie/${movie.id}`}>
              <img
                className="w-full h-96 object-contain rounded-t-lg"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 truncate">{movie.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{movie.release_date}</p>
              </div>
            </Link>
            {/* زر الإعجاب */}
            <button
              onClick={() => handleLike(movie)}
              className={`absolute top-4 right-4 text-2xl ${likedMovies.some((likedMovie) => likedMovie.id === movie.id) ? 'text-red-500' : 'text-gray-400'}`}
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
