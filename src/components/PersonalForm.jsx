import React from 'react';
import { Box, Button, Container, FormControl, Grid, InputLabel, Link, MenuItem, Select, TextField, Typography } from '@mui/material';
import { styled } from '@mui/system';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import './InfoForm.css';
import Divider from '@mui/material/Divider';
import AddPhotoAlternateOutlinedIcon from '@mui/icons-material/AddPhotoAlternateOutlined';
const ProfilePictureBox = styled(Box)(({ theme }) => ({
  border: '2px dashed #ccc',
  borderRadius: theme.shape.borderRadius,
  padding: theme.spacing(2),
  backgroundColor: '#FAFBFC',
  textAlign: 'center',
  marginBottom: theme.spacing(2),
  cursor: 'pointer',
  height: 160,
  width: 150,
  borderRadius: 40,
}));


const FormContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  height: '100vh',
  
  padding: theme.spacing(3),
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
//   boxShadow: theme.shadows[3],
  boxSizing: 'border-box',
  paddingLeft: theme.spacing(5),
//   paddingRight: theme.spacing(5),
  zIndex: 2,
  
}));

const FormSection = styled(Box)(({ theme }) => ({
  marginBottom: theme.spacing(2),
}));

const PersonalForm = () => {
  const [gender, setGender] = React.useState('');
  const [month, setMonth] = React.useState('');
  const [day, setDay] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };

  const handleDayChange = (event) => {
    setDay(event.target.value);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const days = [...Array(31).keys()].map(i => i + 1);
  const years = [...Array(100).keys()].map(i => 2023 - i); // This generates years from 2023 to 1924

  return (
    <FormContainer>
        <Box display={'flex'}sx={{gap: 1}}>
      <Typography variant="h6" component="div" mb={5} gutterBottom className='active'> 
        Personal Information 
        <Divider sx={{ my: 0 }} />
      </Typography>
      <Typography variant="h6" component="div" mb={5} gutterBottom  className='nav' >
        Grades and Prices
        <Divider sx={{ my: 0 }} />
      </Typography>
      <Typography variant="h6" component="div" mb={5} gutterBottom  className='nav' >
        Upload files
        <Divider sx={{ my: 0 }} />
      </Typography>
      
      </Box>
      
      <FormSection display={'flex'}>
        {/* picture box */}
        <ProfilePictureBox>
          < AddPhotoAlternateOutlinedIcon fontSize='large' sx={{mt: 3}}/>
          <Typography justifyContent={'center'} textAlign={'center'} mt={3}>Upload your photo </Typography>
        </ProfilePictureBox>
        {/* name area */}
        <Box width={'40%'} ml={3}>
        <Typography  required>First Name<span style={{ color: 'red' }}>*</span> </Typography>
        <TextField InputLabelProps={{className:'NameInput'}}
        className='NameInput'
          placeholder='Please enter your first name'
          variant="outlined"
          required
          fullWidth
          margin="normal"
          
        />
        <Typography  required>Last Name<span style={{ color: 'red' }}>*</span></Typography>
         <TextField InputLabelProps={{className:'NameInput'}}
          className='NameInput'
          placeholder='Please enter your last name'
          variant="outlined"
          fullWidth
          margin="normal"
        />
        </Box>
      </FormSection>

        {/* date gender and phone number */}

      
        <Divider sx={{ my: 4 }} />
        <Container maxWidth={false}  disableGutters sx={{width: 400, float: 'left'}}>
        
          <Typography variant="h6" pb={2}>Date of birth<span style={{ color: 'red' }}>*</span></Typography>
          <Box display="flex" gap={2} margin={'normal'} >
            <FormControl fullWidth>
              <InputLabel  >MM</InputLabel>
              <Select InputLabelProps={{className:'NameInput'}}
        className='NameInput'
                labelId="month-label"
                value={month}
                onChange={handleMonthChange}
                label="MM"
                displayEmpty
                required
              >
                <MenuItem value="" disabled>
                  MM
                </MenuItem>
                {months.map((monthName, index) => (
                  <MenuItem key={index} value={index + 1}>{monthName}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="day-label">DD</InputLabel>
              <Select InputLabelProps={{className:'NameInput'}}
        className='NameInput'
                labelId="day-label"
                value={day}
                onChange={handleDayChange}
                label="DD"
                displayEmpty
                required
              >
                <MenuItem value="" disabled>
                  DD
                </MenuItem>
                {days.map((dayNumber) => (
                  <MenuItem key={dayNumber} value={dayNumber}>{dayNumber}</MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel></InputLabel>
              <Select InputLabelProps={{className:'NameInput'}}
        className='NameInput'
                value={year}
                onChange={handleYearChange}
                label="YYYY"
                displayEmpty
                required
              >
                <MenuItem value="" disabled>
                  YYYY
                </MenuItem>
                {years.map((yearNumber) => (
                  <MenuItem key={yearNumber} value={yearNumber}>{yearNumber}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>

        <FormSection>
        <Typography variant="h6" pt={2} pb={2}>Gender<span style={{ color: 'red' }}>*</span></Typography>
        <FormControl fullWidth sx={{ width: "40%"}}>
          <InputLabel id="gender-label">Select</InputLabel>
          <Select InputLabelProps={{className:'NameInput'}}
        className='NameInput'
            labelId="gender-label"
            value={gender}
            onChange={handleGenderChange}
            label="Gender"
            required>
                
            <MenuItem value="" disabled>
              Gender
            </MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="other">Prefer not to say</MenuItem>
          </Select>
        </FormControl>

        
      
      </FormSection>
      <Typography variant="h6" pt={2} pb={0}>Phone Number<span style={{ color: 'red' }}>*</span></Typography>
      
      <TextField  InputLabelProps={{className:'NameInput'}}
      className='NameInput'
        label="Please enter phone number"
        variant="outlined"
        fullWidth
        margin="normal"
      />

        </Container>

        <Container maxWidth={false}  disableGutters sx={{ width:'50%', float: 'right'}}>
        <Typography variant="h6">
            Address<span style={{ color: 'red' }}>*</span>
          </Typography>
        <Grid container columns={{ xs: 4, sm: 7, md: 3, lg: 8 }}  columnSpacing={{ xs: 2, sm: 3, md: 3, lg: 2 }}>
        {/* //parent grid */}
         
          
          
          <Grid item xs={6} sm={6} md={3} lg={3}>
          <TextField
            InputLabelProps={{ className: 'NameInput' }}
            className='NameInput'
            label="Country"
            variant="outlined"
            fullWidth
            
            margin="normal"
          />
          </Grid>
          
          <Grid item xs={6} md={3} lg={3}>
              <TextField
                InputLabelProps={{ className: 'NameInput' }}
                className='NameInput'
                label="County/State"
                variant="outlined"
                fullWidth
                
                margin="normal"
              />
            </Grid>
            <Grid item xs={6} md={3} lg={3}>
              <TextField
                InputLabelProps={{ className: 'NameInput' }}
                className='NameInput'
                label="City"
                variant="outlined"
                fullWidth
                
                margin="normal"
              />
            </Grid>
          
            <Grid item xs={6} md={3} lg={3}>
          <TextField
            InputLabelProps={{ className: 'NameInput' }}
            className='NameInput'
            label="Street"
            variant="outlined"
            fullWidth
           
            margin="normal"
          />
          </Grid>
          <Grid item xs={6} md={3} lg={3}>
          <TextField
            InputLabelProps={{ className: 'NameInput' }}
            className='NameInput'
            label="Postal/Zip code"
            variant="outlined"
            fullWidth
            
            margin="normal"
          />
        </Grid>
      </Grid>
            </Container>
            <Container maxWidth={false}  disableGutters sx={{ mt: 15, width:'50%', float: 'right', mr: 7}}>
            <Button className='Button' variant="contained" >
                Next Step
            </Button>
            </Container>
    </FormContainer>
    
    
  );
};

export default PersonalForm;
