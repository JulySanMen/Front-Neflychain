import React, { createContext, useState } from 'react';
import { Movie, movies as initialMovies } from '../data/movies';

interface MovieContextType {
  movies: Movie[];
  currentMovie: Movie | null;
  currentServer: number;
  filteredMovies: Movie[];
  setCurrentMovie: (movie: Movie) => void;
  setCurrentServer: (serverIndex: number) => void;
  searchMovies: (query: string) => void;
}

export const MovieContext = createContext<MovieContextType>({
  movies: [],
  currentMovie: null,
  currentServer: 0,
  filteredMovies: [],
  setCurrentMovie: () => {},
  setCurrentServer: () => {},
  searchMovies: () => {},
});

export const MovieProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [movies] = useState<Movie[]>(initialMovies);
  const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);
  const [currentServer, setCurrentServer] = useState<number>(0);
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>(initialMovies);

  const searchMovies = (query: string) => {
    if (!query.trim()) {
      setFilteredMovies(movies);
      return;
    }
    
    const normalizedQuery = query.toLowerCase().trim();
    const filtered = movies.filter((movie) => 
      movie.title.toLowerCase().includes(normalizedQuery)
    );
    
    setFilteredMovies(filtered);
  };

  return (
    <MovieContext.Provider
      value={{
        movies,
        currentMovie,
        currentServer,
        filteredMovies,
        setCurrentMovie,
        setCurrentServer,
        searchMovies,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};