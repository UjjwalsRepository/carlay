import React,{useState,useContext} from 'react'
import { StepperContext } from '@/app/context/StepperContext'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {Col, Row, Form} from 'react-bootstrap';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
// import { Formik,Form, Field } from 'formik';
// import * as Yup from 'yup';

const CarDetails = () => {
    const {userData,setUserData}=useContext(StepperContext)
 
    const handleChange=(e)=>{
      console.log("Event Target",e)
        const {name,value}=e.target;
        setUserData({...userData,[name]:value})
    }

    // const SignupSchema = Yup.object().shape({
    //   fuel: Yup.string()
    //     .required('Required'),
    //   transmission: Yup.string()
    //     .required('Required'),
    //   accidental: Yup.string()
    //     .required('Required'),
    //   insurance: Yup.string()
    //     .required('Required'),
    //   location: Yup.string()
    //     .required('Required'),
    //   regNo: Yup.string()
    //     .required('Required'),
    //   km: Yup.string()
    //     .required('Required'),
    //   insuranceEndDate: Yup.string()
    //     .required('Required'),
    //   rcImage: Yup.string()
    //     .required('Required'),
    //   frontImage: Yup.string()
    //     .required('Required'),
    //   rearImage: Yup.string()
    //     .required('Required'),
    //   leftImage: Yup.string()
    //     .required('Required'),
    //   rightImage: Yup.string()
    //     .required('Required'),
    //   seatImage: Yup.string()
    //     .required('Required'),
    //   odometerImage: Yup.string()
    //     .required('Required'),
    // });

  return (
    <div>
        
        {/* <Formik
        initialValues={{
          fuel: '',
          transmission: '',
          accidental: '',
          insurance: '',
          location: '',
          regNo: '',
          km: '',
          insuranceEndDate: '',
          rcImage: '',
          frontImage: '',
          rearImage: '',
          leftImage: '',
          rightImage: '',
          seatImage: '',
          odometerImage: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={values => {
          same shape as initial values
          console.log(values);
        }}>
          {({errors,touched})=>(
          <Form>
         
          </Form>
          )}
        </Formik> */}
        <Row className="bg-blue-900 rounded-lg p-3">
            <Col xl={4} lg={4} md={4} sm={6}>
              <Form.Group>
                <Form.Label className="text-white">Fuel Type</Form.Label>
                <Form.Select 
                name="fuel"
                value={userData["fuel" || ""]}
                onChange={handleChange}>
                  <option>Select Fuel Type</option>
                  <option >Petrol</option>
                  <option >Diesel</option>
                  <option >CNG</option>
                </Form.Select>
              </Form.Group>
              
            </Col>
            <Col xl={4} lg={4} md={4} sm={6}>
              <Form.Group>
                <Form.Label className="text-white">Transmission</Form.Label>
                <Form.Select 
                name="transmission"
                value={userData["transmission" || ""]}
                onChange={handleChange}>
                  <option>Select Transmission</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6}>
              <Form.Group>
                <Form.Label className="text-white">Accidental</Form.Label>
                <Form.Select 
                name="accidental"
                value={userData["accidental" || ""]}
                onChange={handleChange}
                >
                  <option>Select Accidental</option>
                  <option>No</option>
                  <option>Yes</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Insurance</Form.Label>
                <Form.Select 
                name="insurance"
                value={userData["insurance" || ""]}
                onChange={handleChange}>
                  <option>Select Insurance</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Vechile current location.</Form.Label>
                <Form.Control
                name="location"
                value={userData["location" || ""]}
                onChange={handleChange}
              type="text"
              placeholder="Please enter vechile current location."
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Vechile Reg. No.</Form.Label>
                <Form.Control
                name="regNo"
                value={userData["regNo" || ""]}
                onChange={handleChange}
              type="text"
              placeholder="Please enter vechile reg. no"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Kilometer Reading</Form.Label>
                <Form.Control
                name="km"
                value={userData["km" || ""]}
                onChange={handleChange}
              type="text"
              placeholder="Please enter kilometer reading"
              aria-describedby="inputGroupPrepend"
              required
            />
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Insurance End Date</Form.Label>
                <Form.Control
                name="insuranceEndDate"
                value={userData["insuranceEndDate" || ""]}
                onChange={handleChange}
              type="date"
              aria-describedby="inputGroupPrepend"
              required
            />
              
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">RC Image</Form.Label>
                <Form.Control
                name="rcImage"
                value={userData["rcImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
              
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Front Image</Form.Label>
                <Form.Control
                name="frontImage"
                value={userData["frontImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Rear Image</Form.Label>
                <Form.Control
                name="rearImage"
                value={userData["rearImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
              
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Left Image</Form.Label>
                <Form.Control
                name="leftImage"
                value={userData["leftImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="my-4">
              <Form.Group>
                <Form.Label className="text-white">Right Image</Form.Label>
                <Form.Control
                name="rightImage"
                value={userData["rightImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
              
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="my-4">
              <Form.Group>
                <Form.Label className="text-white">Seat Image</Form.Label>
                <Form.Control
                name="seatImage"
                value={userData["seatImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="my-4">
              <Form.Group>
                <Form.Label className="text-white">Odometer Image</Form.Label>
                <Form.Control
                name="odometerImage"
                value={userData["odometerImage" || ""]}
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>
          </Row>
       
        {/* <Grid container spacing={3}>
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
        
      </Grid> */}
    </div>
  )
}

export default CarDetails