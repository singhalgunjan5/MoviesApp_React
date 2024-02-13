import React from 'react';
import { AppBar, Toolbar, Typography, Box, Card, CardContent, Chip } from '@mui/material';
import { useContext } from 'react';
import { MostPopularMoviesContext } from './MostPopularMovies';



const MovieInfo = () => {
  const { timeline, year, rating, movieName } = useContext(MostPopularMoviesContext);
    
 

    return (
       
            <div>
               
               
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
                            {timeline} | {year} | {rating}
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
            </div>
       
    );
};

export default MovieInfo;
