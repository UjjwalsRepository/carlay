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

const CarDetails = () => {
    const {userData,setUserData}=useContext(StepperContext)
 
    const handleChange=(e)=>{
      // alert(e.target.type)
      const {name,value}=e.target;
      // alert(e.target.files[0])
        setUserData({...userData,[name]:value})
    }
    const handleFileChange = (event) => {
      // const file = event.target.files[0];
      setUserData({...userData,[event.target.name]:event.target.files[0]})
      
    };

  

  return (
    <div>
        
       
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
                onChange={handleFileChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
              accept="image/png, image/jpeg" 
            />
              
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Front Image</Form.Label>
                <Form.Control
                name="frontImage"
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
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col> 
          </Row>
       
        
    </div>
  )
}

export default CarDetails