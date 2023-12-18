import React,{useContext} from 'react'
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

const CarDetails = () => {
    const {userData,setUserData}=useContext(StepperContext)

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
    }

  return (
    <div>
        <Grid container spacing={3}>
        
       
       
        
        <Grid item xs={12} sm={4}>
          <FormControl variant="standard" sx={{minWidth: 120 }} className='w-full'>
            <InputLabel id="demo-simple-select-standard-label">Fuel Type *</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="fuel"
              value={userData["fuel" || ""]}
              onChange={handleChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="petrol">Petrol</MenuItem>
              <MenuItem value="diesel">Diesel</MenuItem>
              <MenuItem value="cng">CNG</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="standard" sx={{minWidth: 120 }} className='w-full'>
            <InputLabel id="demo-simple-select-standard-label">Transmission *</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="transmission"
              value={userData["transmission" || ""]}
              onChange={handleChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="automatic">Automatic</MenuItem>
              <MenuItem value="manual">Manual</MenuItem>
              
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="standard" sx={{minWidth: 120 }} className='w-full'>
            <InputLabel id="demo-simple-select-standard-label">Accidental *</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="accidental"
              value={userData["accidental" || ""]}
              onChange={handleChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="no">No</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl variant="standard" sx={{minWidth: 120 }} className='w-full'>
            <InputLabel id="demo-simple-select-standard-label">Insurance *</InputLabel>
            <Select
              labelId="demo-simple-select-standard-label"
              id="demo-simple-select-standard"
              name="insurance"
              value={userData["insurance" || ""]}
              onChange={handleChange}
              
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value="no">No</MenuItem>
              <MenuItem value="yes">Yes</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="curLocation"
            name="curLocation"
            value={userData["curLocation" || ""]}
            onChange={handleChange}
            label="Vechile Current Location"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="regNo"
            name="regNo"
            value={userData["regNo" || ""]}
            onChange={handleChange}
            label="Vechile Reg. No."
            fullWidth
            autoComplete="family-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="incenddate"
            name="incenddate"
            label="Insurance End Date"
            value={userData["incenddate" || ""]}
            onChange={handleChange}
            fullWidth
            variant="standard"
            type='date'
          />
        </Grid>
        
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="kilometer"
            name="kilometer"
            value={userData["kilometer" || ""]}
            onChange={handleChange}
            label="Kilometer Reading"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="front"
            name="front"
            value={userData["front"] || ""}
            onChange={handleChange}
            label="Front Pic"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            type='file'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="right"
            name="right"
            value={userData["right"] || ""}
            onChange={handleChange}
            label="Right Pic"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            type='file'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="left"
            name="left"
            value={userData["left"] || ""}
            onChange={handleChange}
            label="Left Pic"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            type='file'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            id="rear"
            name="rear"
            value={userData["rear"] || ""}
            onChange={handleChange}
            label="Rear Pic"
            fullWidth
            variant="standard"
            type='file'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="dashboard"
            name="dashboard"
            value={userData["dashboard"] || ""}
            onChange={handleChange}
            label="Dashboard Pic"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            type='file'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="odometer"
            name="odometer"
            value={userData["odometer"] || ""}
            onChange={handleChange}
            label="Odometer Pic"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            type='file'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            id="seat"
            label="Seat Pic"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            type='file'
            name="seat"
            value={userData["seat"] || ""}
            onChange={handleChange}
          />
        </Grid>
        
      </Grid>
    </div>
  )
}

export default CarDetails