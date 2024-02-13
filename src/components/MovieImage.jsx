import React, { useContext } from 'react';
// import{ MovieInfoContext } from './MovieInfo'; // Correct import path for default export

import { MostPopularMoviesContext } from './MostPopularMovies';

const MovieImage = () => {
    const { image } = useContext(MostPopularMoviesContext);
    return (
        <div>
        <img src={image}></img>
        </div>
    );
};

export default MovieImage;
