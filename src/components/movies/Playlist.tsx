import React, { useContext } from 'react';
import { Play } from 'lucide-react';
import { MovieContext } from '../../contexts/MovieContext';

const Playlist: React.FC = () => {
  const { filteredMovies, currentMovie, setCurrentMovie } = useContext(MovieContext);

  return (
    <div className="space-y-4 overflow-auto max-h-[600px] pr-2 scrollbar">
      {filteredMovies.length > 0 ? (
        filteredMovies.map((movie) => (
          <div
            key={movie.id}
            onClick={() => setCurrentMovie(movie)}
            className={`group relative bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] cursor-pointer ${
              currentMovie?.id === movie.id ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <div className="aspect-w-16 aspect-h-9">
              <img
                src={movie.thumbnail}
                alt={movie.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-blue-600/80 flex items-center justify-center text-white transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <Play size={24} />
                </div>
              </div>
            </div>
            <div className="p-3">
              <h3 className="text-gray-900 dark:text-white font-medium">{movie.title}</h3>
              <div className="flex items-center mt-1">
                <span className="text-sm text-gray-500 dark:text-gray-400">{movie.year}</span>
                <span className="mx-2 text-gray-400 dark:text-gray-600">•</span>
                <div className="flex flex-wrap gap-1">
                  {movie.genre.map((genre, index) => (
                    <span 
                      key={index} 
                      className="text-xs px-2 py-0.5 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="p-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">No movies found</p>
        </div>
      )}
    </div>
  );
};

export default Playlist;