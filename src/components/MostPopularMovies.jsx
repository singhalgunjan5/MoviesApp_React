import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { styled } from '@mui/system';
import Paper from '@mui/material/Paper';
import MovieInfo from './MovieInfo';
import MovieImage from './MovieImage';
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

const MostPopularMovies = () => {
  return (
    <ThemeProvider theme={theme}>
      <SplitCard>
        <LeftSide> <MovieInfo></MovieInfo></LeftSide>
        <RightSide><MovieImage></MovieImage> </RightSide>
      </SplitCard>
    </ThemeProvider>
  );
};

export default MostPopularMovies;
