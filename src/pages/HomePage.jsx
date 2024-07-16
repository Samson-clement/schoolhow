import React from 'react';
import { Card, CardContent, CardActions, Container, Typography, Button, Box } from '@mui/material';
import './HomePage.css';
import Logo from '../assets/Logo.png';
import Footer from '../components/Footer';
import Header from '../components/Header';
import image from '../assets/imgone.png';
import imagetwo from '../assets/imgtwo.png';

const HomePage = () => {
  return (
    <Container className='Body' maxWidth={false} disableGutters>
      <Typography sx={{ paddingLeft: 1, paddingTop: 1 }}>
        <img src={Logo} alt="SchoolHow Logo" className="logo" />
      </Typography>
      <Box sx={{ textAlign: 'center', mb: 10 }}>
        <Typography className='sign' variant="h4" gutterBottom sx={{ fontWeight: 900 }}>
          Sign Up
        </Typography>

        <Box sx={{ justifyContent: 'center', display: 'flex', flexWrap: 'wrap', mt: 5, width: '100%' }}>
          {/* card one */}
          <Card sx={{ maxWidth: 310, width: '80%', mx: 8, mb: 9 }}>
            <CardContent>
              <img src={image} alt="image" className='imageone' />
            </CardContent>
            <CardActions>
              <Box sx={{ width: '100%', justifyContent: 'center' }}>
                <Button variant="contained" className='imgbutton' sx={{ width: '80%', mb: '20%', backgroundColor: '#3B3085' }}>
                  <Typography variant='h7'>
                    I am a student
                  </Typography>
                </Button>
              </Box>
            </CardActions>
          </Card>
          {/* card two */}
          <Card sx={{ maxWidth: 310, width: '80%', mx: 8, mb: 9 }}>
            <CardContent>
              <img src={imagetwo} alt="image" className='imageone' />
            </CardContent>
            <CardActions>
              <Box sx={{ width: '100%', justifyContent: 'center' }}>
                <Button variant="contained" className='imgbutton' sx={{ width: '80%', mb: '20%', backgroundColor: '#3B3085' }}>
                  <Typography variant='h7'>
                    I am a Tutor
                  </Typography>
                </Button>
              </Box>
            </CardActions>
          </Card>
        </Box>
      </Box>
      <Footer />
    </Container>
  );
};

export default HomePage;
