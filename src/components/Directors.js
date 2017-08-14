import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors.map((director)=>{
        return (
          <div>
            <p>{director.name}</p>
            <p>{director.movies.join(', ')}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Directors
