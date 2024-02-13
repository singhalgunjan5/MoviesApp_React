import React, { useEffect, useState, createContext } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import MovieInfo from './MovieInfo';
import MovieImage from './MovieImage';
import axios from 'axios';

export const MostPopularMoviesContext = createContext();
// Define your custom theme
const theme = createTheme();

const SplitCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  marginTop:0
}));

const LeftSide = styled('div')(({ theme }) => ({
  flex: '2.85',
  padding: theme.spacing(2),
}));

const RightSide= styled('div')(({ theme }) => ({
  flex: '2.15',
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
}));

const MostPopularMovies = ({ children }) => {
    const [movieName, setMovieName] = useState();
    const [timeline, setTimeline] = useState();
    const [year, setYear] = useState();
    const [rating, setRating] = useState();
    const [image, setImage] = useState('');
    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://moviesverse1.p.rapidapi.com/most-popular-movies',
            headers: {
                'X-RapidAPI-Key': '7deb6e5f2emsh44712356fe3e853p1fbe8bjsnaf7e6a65ad1f',
                'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
            }
        };
        async function fetchData() {
            try {
                const response = await axios.request(options);
                // console.log(response.data);
                const res = response.data.movies;
                setMovieName(res[0].title);
                setTimeline(res[0].timeline);
                setYear(res[0].year);
                setRating(res[0].rating);
                setImage(res[0].image);
                
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, []);
  return (
    <MostPopularMoviesContext.Provider value={{image,timeline,year,rating,movieName}}>
    {children}
    <ThemeProvider theme={theme}>
      <SplitCard>
        <LeftSide> <MovieInfo></MovieInfo></LeftSide>
        <RightSide><MovieImage></MovieImage> </RightSide>
      </SplitCard>
    </ThemeProvider>
    </MostPopularMoviesContext.Provider>
  );
};

export default MostPopularMovies;
