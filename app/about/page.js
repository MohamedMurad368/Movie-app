// app/about/page.js

import React from 'react';

export default function About() {
  return (
    <div className="bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 mt-5">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
          About MovieApp
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to **MovieApp**, a platform designed for movie enthusiasts. Here, you can explore a collection of the best movies, watch trailers, discover new releases, and read detailed reviews all in one place.
        </p>
      </div>

      <div className="mt-10">
        <div className="max-w-4xl mx-auto grid gap-12 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              className="h-40 w-40 rounded-full object-cover mb-4"
              src="https://via.placeholder.com/150"
              alt="Feature 1"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Discover Movies</h2>
            <p className="text-center text-gray-500 mt-2">
              Browse through a vast collection of movies from all genres, release years, and countries.
            </p>
          </div>
          
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              className="h-40 w-40 rounded-full object-cover mb-4"
              src="https://via.placeholder.com/150"
              alt="Feature 2"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Watch Trailers</h2>
            <p className="text-center text-gray-500 mt-2">
              Get a sneak peek of the latest movies with our high-quality trailers, all in one place.
            </p>
          </div>
          
          <div className="flex flex-col items-center bg-white shadow-lg rounded-lg p-6">
            <img
              className="h-40 w-40 rounded-full object-cover mb-4"
              src="https://via.placeholder.com/150"
              alt="Feature 3"
            />
            <h2 className="text-2xl font-semibold text-gray-800">Stay Updated</h2>
            <p className="text-center text-gray-500 mt-2">
              Keep up with the latest movie releases, trends, and upcoming films through our platform.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          Our mission is simple: To provide movie lovers with a simple and intuitive platform where they can explore movies, watch trailers, and stay updated on new releases. We aim to enhance your movie discovery journey by offering an easy-to-use interface that suits all devices, from desktops to mobile phones.
        </p>
      </div>
    </div>
  );
}
