import React, { useContext } from 'react';
import { Search } from 'lucide-react';
import { MovieContext } from '../../contexts/MovieContext';

interface SearchBarProps {
  className?: string;
}

const SearchBar: React.FC<SearchBarProps> = ({ className = '' }) => {
  const { searchMovies } = useContext(MovieContext);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchMovies(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="h-4 w-4 text-gray-400 dark:text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-900 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 focus:border-transparent transition-all duration-200"
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;