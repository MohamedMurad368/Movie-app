"use client"
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'next/navigation'; // استخدم useParams

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams(); // الحصول على معرّف الفيلم من المسار

  useEffect(() => {
    if (id) {
      const fetchMovieDetails = async () => {
        try {
          const response = await axios.get(
            `https://api.themoviedb.org/3/movie/${id}?api_key=f4fdd09f7a1758a031ed68e7123cdab4&language=en-US`
          );
          setMovie(response.data);
          setLoading(false);
        } catch (err) {
          setError(err);
          setLoading(false);
        }
      };

      fetchMovieDetails();
    }
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // استخراج معرف الفيديو من YouTube من الرابط (ستحتاج إلى معرف الفيديو فقط بعد "watch?v=")
  const videoId = "Bj3j0fF7l7E"; // يمكنك استبدال هذا ID بـ movie.trailer_video_id إذا كان موجودًا في بيانات الفيلم

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="w-full md:w-1/3 h-auto object-cover rounded-lg shadow-lg"
        />
        <div className="md:ml-8 mt-4 md:mt-0 flex flex-col justify-between w-full md:w-2/3">
          <h1 className="text-3xl font-bold">{movie.title}</h1>
          <p className="mt-4 text-lg">{movie.overview}</p>
          <p className="mt-4 text-xl text-gray-700">Release Date: {movie.release_date}</p>
          <p className="mt-2 text-xl text-gray-700">Rating: {movie.vote_average}</p>
          
          {/* تضمين الفيديو بجانب النصوص في الشاشات الكبيرة */}
          <div className="mt-8 md:mt-4">
            <h2 className="text-2xl font-semibold mb-4">Watch Trailer</h2>
            <div className="relative" style={{ paddingBottom: "56.25%", height: 0, overflow: "hidden", maxWidth: "100%" }}>
              <iframe
                className="absolute top-0 left-0 w-96 h-96"
                src={`https://www.youtube.com/embed/${videoId}`}
                title="Movie Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
