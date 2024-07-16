import React, { useState } from 'react';
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography, Grid, Checkbox, FormControlLabel } from '@mui/material';
import { styled } from '@mui/system';
import SchoolIcon from '@mui/icons-material/School'; 
import './teachForm.css';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import AutoStoriesOutlinedIcon from '@mui/icons-material/AutoStoriesOutlined';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import Divider from '@mui/material/Divider';

const FormContainer = styled(Box)(({ theme }) => ({
  maxWidth: '100%',
  height: 'fit-content',
  padding: theme.spacing(3),
  backgroundColor: 'white',
  borderRadius: theme.shape.borderRadius,
  zIndex: 2,
  padding: theme.spacing(3),
}));

const IconButton = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1),
  borderRadius: theme.shape.borderRadius,
  border: '1px solid',
  borderColor: theme.palette.divider,
  textAlign: 'center',
  cursor: 'pointer',
  '&:hover': {
    // backgroundColor: '#333',
  }
}));



// nfwoeinfewo
const SpecializationCheckbox = styled(FormControlLabel)(({ theme }) => ({
  width: '80%',
  margin: theme.spacing(1, 0),
  color: '#333',
  
}));

const subjects = [
  { name: 'Maths', icon: <CalculateOutlinedIcon fontSize="large" style={{  color: '#5891F2' }}/> },
  { name: 'Biology', icon: <SpaOutlinedIcon fontSize="large" style={{ color: '#9CCC65' }} /> },
  { name: 'Chemistry', icon: <ScienceOutlinedIcon fontSize="large" style={{ color: '#ED4640' }}/> },
  { name: 'English', icon: <AutoStoriesOutlinedIcon fontSize="large" style={{ color: '#BA68C8' }}/> },
  { name: '', icon: <RocketLaunchOutlinedIcon fontSize="large" style={{ color: '#4628C1', padding: 10 }} /> }
];

const specializations = [
    'English', 'French', 'Computer Science', 'Biology', 'History', 'Spanish', 'Math', 'Chemistry', 'Special Educational Needs', 'Physics', 'Critical Thinking', 'Physical Education', 'Art & Design', 'Geography', 'Other'
  ];
  
  const TeachingForm = () => {
    const [grade, setGrade] = React.useState('');
    const [subject, setSubject] = React.useState('');
    const [selectedSpecializations, setSelectedSpecializations] = React.useState([]);
    const [price, setPrice] = React.useState('');
  
    const handleGradeChange = (event) => {
      setGrade(event.target.value);
    };
  
    
  
    const handleSpecializationChange = (event) => {
      const { name, checked } = event.target;
      setSelectedSpecializations((prev) => 
        checked ? [...prev, name] : prev.filter((item) => item !== name)
      );
    };
    const [selectedSubjects, setSelectedSubjects] = useState([]);

    const handleSubjectChange = (subject) => {
      setSelectedSubjects((prevSelected) =>
        prevSelected.includes(subject)
          ? prevSelected.filter((item) => item !== subject)
          : [...prevSelected, subject]
      );
    };
  

  return (
    // select grade
    <FormContainer>
        <Box display={'flex'}sx={{gap: 1}}>
      <Typography variant="h6" component="div" mb={5} gutterBottom className='nav'> 
        Personal Information
        <Divider sx={{ my: 0 }} /> 
      </Typography>
      <Typography variant="h6" component="div" mb={5} gutterBottom  className='active' >
        Subject and Prices
        <Divider sx={{ my: 0 }} />
      </Typography>
      <Typography variant="h6" component="div" mb={5} gutterBottom  className='nav' >
        Upload files
        <Divider sx={{ my: 0 }} />
      </Typography>
      </Box>
      <Typography variant="h7" fontWeight={480} gutterBottom>
        Choose the Year Group you would like to teach<span style={{ color: 'red' }}>*</span>
      </Typography>
    
      <FormControl margin="normal" sx={{display:'flex', width:'24%'}}>
        
        <Select className='select' value={grade} onChange={handleGradeChange} 
        labelId="grade-label"
        
        displayEmpty
        required > 
          <MenuItem value="" disabled>Select Grade</MenuItem>
          {/* Add grade options here */}
          <MenuItem value="Grade 1">Grade 1</MenuItem>
          <MenuItem value="Grade 2">Grade 2</MenuItem>
          {/* Add more grades as needed */}
        </Select>
      </FormControl>

        {/* subject select */}
        <Box mt={'6%'} >
      <Typography variant="h7" fontWeight={480} >
        Choose the subject you would like to teach<span style={{ color: 'red' }}>*</span>
      </Typography>
      <Box display="flex" gap={4} marginY={4} >
        {subjects.map((sub) => (
         <IconButton 
         key={sub.name}
         onClick={() => handleSubjectChange(sub.name)}
         style={{
           border: selectedSubjects.includes(sub.name) ? '1px solid' : '0px solid',
         }}
       >
            {sub.icon}
            <Typography>{sub.name}</Typography>
          </IconButton>
        ))}
      </Box>
      </Box>
      {/* select specializations */}
        <Box mt={4} >
      <Typography variant="h7" fontWeight={480} gutterBottom>
        Specialisation<span style={{ color: 'red' }}>*</span>
      </Typography>
      <Grid container spacing={2} sx={{width: '60%'}}>
        {specializations.map((spec) => (
          <Grid item xs={12} sm={6} md={4}  key={spec}>
            <SpecializationCheckbox style ={{color: 'GrayText',}}
              control={<Checkbox checked={selectedSpecializations.includes(spec)} onChange={handleSpecializationChange} name={spec} />}
              label={spec}
            />
          </Grid>
        ))}
      </Grid>
      <Box mt={1} display="flex" >
        <Button variant="text" className='addbtn' maxWidth={false}>
          + Add New
        </Button>
      </Box>
    </Box>


    {/* price selection */}
    <Box mt={4}>
      <Typography variant="h7" fontWeight={480} gutterBottom>
        Price<span style={{ color: 'red' }}>*</span>
      </Typography>
      <Box >
      <TextField  InputLabelProps={{className:'selectprice'}}
        className='selectprice'
        variant="outlined"
        placeholder="GBP"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        margin="normal"
      /></Box>
    </Box>

      <Button variant="contained" className='Button'>
        Next Step
      </Button>
    </FormContainer>
  );
};

export default TeachingForm;
