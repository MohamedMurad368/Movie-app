"use client";
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create context
export const MovieContext = createContext();

const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [likedMovies, setLikedMovies] = useState([]);  // إضافة حالة الأفلام المعجبة
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://api.themoviedb.org/3/trending/movie/day?language=en-US&api_key=f4fdd09f7a1758a031ed68e7123cdab4')
      .then(response => {
        setMovies(response.data.results);  // Store the movie data
        setLoading(false);
      })
      .catch(err => {
        setError(err);  // Handle error
        setLoading(false);
      });

    // استرجاع البيانات من localStorage عند تحميل الصفحة
    const storedLikedMovies = JSON.parse(localStorage.getItem('likedMovies')) || [];
    setLikedMovies(storedLikedMovies);
  }, []);  // Empty array means this will run once when the component mounts

  // دالة لإضافة الفيلم إلى المفضلة
  const addToLikedMovies = (movie) => {
    const updatedLikedMovies = [...likedMovies, movie];
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));  // حفظ البيانات في localStorage
  };

  // دالة لحذف الفيلم من المفضلة
  const removeFromLikedMovies = (movieId) => {
    const updatedLikedMovies = likedMovies.filter((movie) => movie.id !== movieId);
    setLikedMovies(updatedLikedMovies);
    localStorage.setItem('likedMovies', JSON.stringify(updatedLikedMovies));  // حفظ البيانات في localStorage
  };

  return (
    <MovieContext.Provider value={{ movies, likedMovies, loading, error, addToLikedMovies, removeFromLikedMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
