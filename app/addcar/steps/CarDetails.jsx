import React,{useState,useContext} from 'react'
import { StepperContext } from '@/app/context/StepperContext'

import {Col, Row, Form} from 'react-bootstrap';
import axios from 'axios';

const CarDetails = () => {
    const {userData,setUserData}=useContext(StepperContext);
    const handleChange=(e)=>{
      // alert(e.target.type)
      const {name,value}=e.target;
      // alert(e.target.files[0])
        setUserData({...userData,[name]:value})
    }
    const handleFileUpload = (event) => {
      // get the selected file from the input
      const file = event.target.files[0];
      // create a new FormData object and append the file to it
      // const formData = new FormData();
      // formData.append("file", file);
      // setUserData({...userData,[event.target.name]:file})
    };


  // function handleChange(event) {
  //   setFile(event.target.files[0])
  // }
  
  

  return (
    <div>
        <Row className="bg-blue-900 rounded-lg p-3">
        <Col xl={4} lg={4} md={4} sm={6} className="hidden">
              <Form.Group>
                <Form.Label className="text-white">Manufacturer</Form.Label>
                <Form.Select 
                name="manufacturerName"
                value={userData["manufacturerName" || ""]}
                // value=""
                onChange={handleChange}
                >
                  
                  <option selected></option> 
                  <option >Petrol</option>
                  <option >Diesel</option>
                  <option >CNG</option>
                </Form.Select>
              </Form.Group>
              
            </Col>
            <Col xl={4} lg={4} md={4} sm={6}className="hidden">
              <Form.Group>
                <Form.Label className="text-white">Variant Name</Form.Label>
                <Form.Control
                name="variantName"
                value=""
                onChange={handleChange}
              type="text"
              placeholder="Please enter Variant Name"
              aria-describedby="inputGroupPrepend"
              
            />
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="hidden">
              <Form.Group>
                <Form.Label className="text-white">Year of Manufacture</Form.Label>
                <Form.Select 
                name="yom"
                value=""
                onChange={handleChange}
                >
                  <option selected></option>
                  <option >Petrol</option>
                  <option >Diesel</option>
                  <option >CNG</option>
                </Form.Select>
              </Form.Group>
              
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Fuel Type</Form.Label>
                <Form.Select 
                name="fuel_Type"
                value={userData["fuel_Type" || ""]}
                onChange={handleChange}
                >
                  <option >Select Fuel Type</option>
                  <option >Petrol</option>
                  <option >Diesel</option>
                  <option >CNG</option>s
                </Form.Select>
              </Form.Group>
              
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Transmission</Form.Label>
                <Form.Select 
                name="transmission"
                value={userData["transmission" || ""]}

                onChange={handleChange}
                >
                  <option >Select Transmission</option>
                  <option>Manual</option>
                  <option>Automatic</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Accidental</Form.Label>
                <Form.Select 
                name="accidental"
                value={userData["accidental" || ""]}

                onChange={handleChange}
                >
                  <option >Select Accitental Type</option>
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

                onChange={handleChange}
                >
                  <option >Select Insurance</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
              <Form.Group>
                <Form.Label className="text-white">Vechile Reg. State</Form.Label>
                <Form.Control
                name="state"
                value=""

                onChange={handleChange}
              type="text"
              placeholder="Please enter vechile reg. state"
              aria-describedby="inputGroupPrepend"
              
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
              <Form.Group>
                <Form.Label className="text-white">Vechile Reg. City</Form.Label>
                <Form.Control
                name="reg_city"
                value=""
                onChange={handleChange}
              type="text"
              placeholder="Please enter vechile reg. city"
              aria-describedby="inputGroupPrepend"
              
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
              <Form.Group>
                <Form.Label className="text-white">Ownership</Form.Label>
                <Form.Select 
                name="ownership"
                value=""
                onChange={handleChange}
                >
                  {/* <option ></option> */}
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Vechile Reg. No.</Form.Label>
                <Form.Control
                name="reg_num"
                value={userData["reg_num" || ""]}

                onChange={handleChange}
              type="text"
              placeholder="Please enter vechile reg. no"
              aria-describedby="inputGroupPrepend"
              
            />
             
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Vechile current location.</Form.Label>
                <Form.Control
                name="v_location"
                value={userData["v_location" || ""]}

                onChange={handleChange}
              type="text"
              placeholder="Please enter vechile current location."
              aria-describedby="inputGroupPrepend"
              
            />
             
              </Form.Group>
            </Col>
           
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Kilometer Reading</Form.Label>
                <Form.Control
                name="kmReading"
                value={userData["kmReading" || ""]}

                onChange={handleChange}
              type="text"
              placeholder="Please enter kilometer reading"
              aria-describedby="inputGroupPrepend"
              
            />
              </Form.Group>
            </Col>
          
           
            
            {/* <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">RC Image</Form.Label>
                <Form.Control
                name="rcPhoto"
                // value={userData["rcPhoto" || ""]}

                // onChange={handleFileUpload}
              type="file"
              // type="text"
              aria-describedby="inputGroupPrepend"
              
              accept="image/png, image/jpeg" 
            />
              
              </Form.Group>
            </Col> */}

          </Row>
       
      
       
        
    </div>
  )
}

export default CarDetails