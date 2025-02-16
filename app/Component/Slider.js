"use client";

import React, { useContext } from 'react';
import { MovieContext } from '../Context/Context';
import { Swiper, SwiperSlide } from 'swiper/react';  
import { Autoplay } from 'swiper/modules';  
import 'swiper/css';  
import 'swiper/css/autoplay';  
import Link from 'next/link';

const MovieSlider = () => {
  const { movies, loading, error } = useContext(MovieContext);

  if (loading) return <p className="text-center text-lg">Loading...</p>;
  if (error) return <p className="text-center text-lg text-red-500">Error: {error.message}</p>;

  const displayedMovies = movies.slice(0, 6);

  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...'; 
    }
    return title;
  };

  return (
    <div className="w-full h-[60vh] md:h-[80vh]"> {/* جعل الارتفاع متكيفًا حسب حجم الشاشة */}
      <Swiper
        modules={[Autoplay]}  
        spaceBetween={20}
        slidesPerView={3}  
        autoplay={{ delay: 2000, disableOnInteraction: false }}  
        loop={true}  
        breakpoints={{
          320: {
            slidesPerView: 1,  // عرض شريحة واحدة على الهواتف الصغيرة
            spaceBetween: 10,  // تقليل المسافات بين الشرائح في الهواتف
          },
          768: {
            slidesPerView: 2,  // عرض شريحتين على الأجهزة المتوسطة
            spaceBetween: 15,  
          },
          920: {
            slidesPerView: 3,  // عرض 3 شرائح على الشاشات المتوسطة والكبيرة
            spaceBetween: 20,  
          },
          1024: {
            slidesPerView: 3,
          },
        }}
        centeredSlides={true}
      >
        {displayedMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <div className="flex flex-col justify-between items-center relative w-full max-w-xs h-[420px] rounded-lg shadow-lg overflow-hidden"> {/* تحسين الأبعاد والتوافق */}
                <img
                  className="w-full h-[320px] object-contain" 
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <div className="mt-4 w-full text-center px-2">
                  <h3 className="text-lg font-semibold text-black">{truncateTitle(movie.title)}</h3>
                  <p className="text-sm text-gray-600">{movie.release_date}</p>
                  <p className="text-sm text-yellow-700">Rating: {movie.vote_average}</p>
                </div>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default MovieSlider;
