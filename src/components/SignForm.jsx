import React from 'react';
import { Box, Typography, TextField, Button, IconButton, InputAdornment } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import GoogleIcon from '@mui/icons-material/Google';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignUpForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

  return (
    <Box sx={{ maxWidth: 440,height: 630, p: 6, m: 'auto',mr: 7, bgcolor: 'white', borderRadius: 10, boxShadow: 3, zIndex: 2, pb:3 }}>
      <Typography textAlign={'center'} variant="h5" component="h1" gutterBottom>
        Tutor Sign Up
      </Typography>
      <Typography variant="body2" gutterBottom>
        If you already have an account register <a href="/login" style={{ color: '#3B3086', textDecoration: 'none' }}>Login here !</a>
      </Typography>
      <TextField
        label="Email"
        variant="standard"
        placeholder='Enter your email address'
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span role="img" aria-label="email"> <MailOutlineRoundedIcon fontSize='small'/> </span>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Password"
        type={showPassword ? 'text' : 'password'}
        variant="standard"
        placeholder='Enter your Password'
        fullWidth
        margin="normal"
        required
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span role="img" aria-label="password"> <LockOutlinedIcon fontSize='small' /> </span>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowPassword}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <TextField
        label="Confirm Password"
        type={showConfirmPassword ? 'text' : 'password'}
        variant="standard"
        placeholder='Confirm Password'
        fullWidth
        margin="normal"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <span role="img" aria-label="confirm password"> <LockOutlinedIcon fontSize='small' /> </span>
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleClickShowConfirmPassword}>
                {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button variant="contained" sx={{ justifyContent: 'center', mt: 10, mb: 4, width: '100%', borderRadius: 50, backgroundColor: '#3B3086' }}>
        Register
      </Button>
      <Button variant="outlined" fullWidth startIcon={<GoogleIcon />}  sx={{ justifyContent: 'center', mt: 2, mb: 2, width: '100%', borderRadius: 50, backgroundColor: '#FFE3BB', color: 'black' }}>
        Sign up with Google
      </Button>
    </Box>
  );
};

export default SignUpForm;
