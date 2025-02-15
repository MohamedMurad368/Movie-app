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

  // دالة لتقليص العنوان إلى 3 كلمات كحد أقصى
  const truncateTitle = (title) => {
    const words = title.split(' ');
    if (words.length > 3) {
      return words.slice(0, 3).join(' ') + '...'; // تقليص العنوان إلى 3 كلمات
    }
    return title;
  };

  return (
    <div className="w-full h-[60vh]">
      <Swiper
        modules={[Autoplay]}  
        spaceBetween={20}
        slidesPerView={3}  // العرض الافتراضي للشرائح
        autoplay={{ delay: 2000, disableOnInteraction: false }}  // التنقل التلقائي
        loop={true}  
        breakpoints={{
          320: {
            slidesPerView: 1,  // عرض شريحة واحدة في الشاشات الصغيرة جدًا (مثل الموبايل الصغير)
          },
          768: {
            slidesPerView: 2,  // عرض شريحتين على الشاشات الصغيرة (مثل الموبايل الكبير أو التابلت)
          },
          920: {
            slidesPerView: 3,  // عرض 3 شرائح على الشاشات المتوسطة
          },
          1024: {
            slidesPerView: 3,  // عرض 3 شرائح على الشاشات الكبيرة
          },
        }}
        centeredSlides={true} // وضع العناصر في المنتصف
      >
        {displayedMovies.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <div className="flex flex-col justify-between items-center relative w-[400px] h-[450px] rounded-lg shadow-md overflow-hidden">
                {/* الصورة تم تعديلها لتغطية المساحة بالكامل مع الحفاظ على الأبعاد */}
                <img
                  className="w-full h-[360px] object-contain mt-1"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                
                {/* النصوص تحت الصورة */}
                <div className="mt-4 w-full text-center px-2">
                  <h3 className="text-xl font-semibold text-black">{truncateTitle(movie.title)}</h3>
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
