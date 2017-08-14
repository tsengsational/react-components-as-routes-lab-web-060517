import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        {movies.map((movie)=>{
          return (
            <div>
              <p>{movie.title}</p>
              <p>{movie.time}</p>
              <p>{movie.genres.join(', ')}</p>
            </div>
          )
        })}
    </div>
  );
};

export default Movies;
