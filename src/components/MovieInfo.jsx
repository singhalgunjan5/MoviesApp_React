import React from 'react';
import { useEffect,useState } from 'react';
import { AppBar, Toolbar, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import axios from 'axios';

const MovieInfo = () => {

    const[movieName,setMovieName]=useState();
    const[timeline,setTimeline]=useState();
    const[year,setYear]=useState();
    const[rating,setRating]=useState();
    const[image,setImage]=useState();


    useEffect(()=>{
        const options = {
            method: 'GET',
            url: 'https://moviesverse1.p.rapidapi.com/most-popular-movies',
            headers: {
              'X-RapidAPI-Key': '7deb6e5f2emsh44712356fe3e853p1fbe8bjsnaf7e6a65ad1f',
              'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
            }
          };
          async function b(){
          try {
              const response = await axios.request(options);
              console.log(response.data);
              const res=response.data.movies;
              setMovieName(res[0].title);
              setTimeline(res[0].timeline);
              setYear(res[0].year);
              setRating(res[0].rating);
              setImage(res[0].image);
          } catch (error) {
              console.error(error);
          }
        }
        b();
    },[image]);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {/* Navbar */}
      <AppBar position="static" sx={{ background: '#212121', color: '#fff' }}>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, fontWeight: 'bold' }}>
            MovieApp
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Home
          </Typography>
          <Typography variant="h6" component="div" sx={{ mr: 2 }}>
            Movies
          </Typography>
          <Typography variant="h6" component="div">
            Series
          </Typography>
        </Toolbar>
      </AppBar>

      {/* Movie Name and Logo */}
      
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 2 }}>
        <Typography variant="h4" component="div" sx={{ mr: 2, fontWeight: 'bold', color: '#666' }}>
         {movieName}
        </Typography>
      </Box>

      {/* Movie Details */}
      <Box sx={{ mt: 2, textAlign: 'center' }}>
        <Typography variant="subtitle1" component="div" sx={{ fontWeight: 'bold', color: '#666' }}>
          {timeline} |{year}| {rating}
        </Typography>
        <Box sx={{ mt: 1 }}>
          <Chip label="Action" color="secondary" sx={{ mr: 1 }} />
          <Chip label="Adventure" color="secondary" sx={{ mr: 1 }} />
          <Chip label="Sci-Fi" color="secondary" />
        </Box>
        <Typography variant="body1" component="div" sx={{ mt: 2, color: '#fff' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula mauris ac tellus dictum fermentum.
        </Typography>
      </Box>

      {/* New Cards */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 4 }}>
        {[1, 2, 3, 4].map((card) => (
          <Card key={card} sx={{ maxWidth: 200, background: '#424242', color: '#fff', mr: 2 }}>
            <CardContent>
              <Typography variant="body2" component="div" sx={{ fontWeight: 'bold', color: '#fff' }}>
                New Movie {card}
              </Typography>
              <Typography variant="body2" component="div" sx={{ color: '#fff' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default MovieInfo;
