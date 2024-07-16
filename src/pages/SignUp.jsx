import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import { Card, CardContent, CardMedia, CardActions, Container, Typography, Button, Box, Link, } from '@mui/material';
import { styled } from '@mui/system';
import BackgroundImage from '../assets/Backimg.jpg'
import SignUpForm from '../components/SignForm';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh',
  // backgroundImage:`url(${BackgroundImage})`,
  
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(4),
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(359deg, #E9415F 30%, #FFFFFF 100%)',
    zIndex: 1,
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 2,
  color: 'white',
  maxWidth: '500px',
  textAlign: 'left',
}));

const SignUp = () => {
  return (
    <Container maxWidth={false} disableGutters>
      <Header />
    <BackgroundContainer  >
      <ContentContainer>
        <Typography variant="h3" component="h1" gutterBottom sx={{fontWeight: 'bold'}}>
          Unlock A Learning Adventure!
        </Typography>
        <Typography variant="h5" component="p" sx={{fontWeight: 200, fontSize:40 }}>
          Give lessons or manage bookings with your customers
        </Typography>
      </ContentContainer>
      <SignUpForm />
    </BackgroundContainer>
    <Footer />
    </Container>
  );
};
  
export default SignUp
