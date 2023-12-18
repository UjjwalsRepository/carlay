import React,{useContext,useEffect} from 'react';
import { StepperContext } from '@/app/context/StepperContext'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';

const PersonalDetails = () => {
  const {userData,setUserData}=useContext(StepperContext)
  const handleChange=(e)=>{
    const {name,value}=e.target;
    setUserData({...userData,[name]:value})
}

useEffect(() => {
  axios.get("http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/carlay/GetManufacturer").then((response) => {
    console.log("URL Data",response.data);
  });
  // axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
  //   console.log("URL Data",response.data);
  // });
}, []);


  return (
    <div>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="firstName"
            label="First Name "
            fullWidth
            autoComplete="cc-name"
            variant="standard"
            name="firstName"
            value={userData["firstName"] || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="lastName"
            label="Last Name"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
            name="lastName"
            value={userData["lastName"] || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="mobile"
            label="Mobile"
            fullWidth
            autoComplete="cc-exp"
            variant="standard"
            type="number"
            name="mobile"
            value={userData["mobile"] || ""}
            onChange={handleChange}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="email"
            label="Email Id"
            type="email"
            fullWidth
            autoComplete="cc-csc"
            variant="standard"
            name="email"
            value={userData["email"] || ""}
            onChange={handleChange}
          />
        </Grid>
       
      </Grid>
    </div>
  )
}

export default PersonalDetails