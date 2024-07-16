import React from 'react'
import { Card, CardContent, CardMedia, CardActions, Container, Typography, Button, Box, Link, } from '@mui/material';
import Header from '../components/Header';
import { styled } from '@mui/system';
import Footer from '../components/Footer';
import PersonalForm from '../components/PersonalForm';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: 'fit-content',
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
    background: 'linear-gradient(0deg, #E94160 0%, #FFFFFF 97%)',
    zIndex: 1,
  },
}));

const ContentContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  zIndex: 3,
  maxWidth: '100%',
 
  textAlign: 'left',

  
}));


const PersonalInfo = () => {
  return (
    <Container maxWidth={false} disableGutters >
      <Header />
      
        <BackgroundContainer>
          <ContentContainer>
          <PersonalForm />
          </ContentContainer>
       </BackgroundContainer>
     
      <Footer/>
    </Container>
  )
}

export default PersonalInfo
