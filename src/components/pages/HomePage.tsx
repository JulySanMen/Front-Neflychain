import React, { useContext, useEffect } from 'react';
import Navbar from '../layout/Navbar';
import MoviePlayer from '../movies/MoviePlayer';
import ServerSelector from '../movies/ServerSelector';
import Playlist from '../movies/Playlist';
import { MovieContext } from '../../contexts/MovieContext';

const HomePage: React.FC = () => {
  const { movies, currentMovie, setCurrentMovie } = useContext(MovieContext);
  
  // Set the first movie as current when the page loads if none is selected
  useEffect(() => {
    if (!currentMovie && movies.length > 0) {
      setCurrentMovie(movies[0]);
    }
  }, [currentMovie, movies, setCurrentMovie]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 md:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Movie player and server selector */}
          <div className="lg:col-span-2 space-y-4">
            {currentMovie ? (
              <>
                <MoviePlayer />
                <ServerSelector />
              </>
            ) : (
              <div className="h-[300px] md:h-[400px] flex items-center justify-center bg-gray-200 dark:bg-gray-800 rounded-xl">
                <p className="text-gray-500 dark:text-gray-400">Select a movie to watch</p>
              </div>
            )}
          </div>
          
          {/* Playlist */}
          <div className="lg:col-span-1">
            <h2 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Movies</h2>
            <Playlist />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;