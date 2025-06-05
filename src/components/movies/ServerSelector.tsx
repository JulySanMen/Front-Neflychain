import React, { useContext } from 'react';
import { MovieContext } from '../../contexts/MovieContext';

const ServerSelector: React.FC = () => {
  const { currentMovie, currentServer, setCurrentServer } = useContext(MovieContext);

  if (!currentMovie) {
    return null;
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md transition-colors duration-300">
      <div className="flex flex-wrap items-center">
        <h3 className="text-gray-700 dark:text-gray-300 mr-4 font-medium">Servers:</h3>
        <div className="flex flex-wrap gap-2 mt-2 sm:mt-0">
          {currentMovie.servers.map((server, index) => (
            <button
              key={index}
              onClick={() => setCurrentServer(index)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                currentServer === index
                  ? 'bg-blue-600 dark:bg-blue-500 text-white'
                  : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
            >
              {server.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServerSelector;