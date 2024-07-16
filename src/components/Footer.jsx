import React from 'react';
import { Box, Container, Link, Typography, Grid, IconButton } from '@mui/material';
import { Facebook, Twitter, YouTube } from '@mui/icons-material';
import './Footer.css';

const Footer = () => {
  return (
    <Box className='Footer' component="footer" sx={{ backgroundColor: '#E94160', py: 4 }}>
      <Container>
        <Grid container spacing={5} justifyContent="space-between">
          {/* links start here */}
          <Grid item xs={12} sm={6} md={3} sx={{ display: 'flex', gap: 2 }}>
            <Link href="/about" variant="body1" className='LinkColor' underline="none" color='inherit' sx={{ display: 'flex', mb: 1, color:'white' }}>
              About us
            </Link>
            <Link href="/discover" variant="body1" className='LinkColor' underline="none" color='inherit' sx={{ display: 'flex', mb: 1, color:'white'  }}>
              Discover
            </Link>
            <Link href="/explore" variant="body1" className='LinkColor' underline="none" color='inherit' sx={{ display: 'flex', mb: 1, color:'white'  }}>
              Explore
            </Link>
          </Grid>
          
          {/* icons start here */}
          <Grid className='FooterTagIcon'>
            <IconButton href="https://facebook.com" className='LinkColor' aria-label="Facebook">
              <Facebook />
            </IconButton>
            <IconButton href="https://twitter.com" className='LinkColor' aria-label="Twitter">
              <Twitter />
            </IconButton>
            <IconButton href="https://youtube.com" className='LinkColor' aria-label="YouTube">
              <YouTube />
            </IconButton>
          </Grid>
        </Grid>
        <Typography className='CopyRight'>
          ©2024. All Rights Reserved
        </Typography>
        <Typography className='Copyleft'>
          Terms of Service | Privacy Policy
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
