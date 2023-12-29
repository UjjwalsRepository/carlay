"use client"
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap';
import axios from 'axios';
const Page = () => {

    const data={
        manufacturerName: "Tata",
        variantName: "Harrier",
        yom: "2022",
        kmReading: "20000",
        reg_city: "Delhi",
        v_location: "Delhi",
        allSidePhoto: "Pune",
        rcPhoto: "Y",
        odoPhoto: "Y",
        created_by: "Ujjwal",
        modified_by: "",
        id: 0,
        ownership: "1",
        fuel_Type: "Diesel",
        transmission: "Automatic",
        accidental: "No",
        insurance: "Yes",
        expected_Price: "2000000",
        reg_num: "DL-1234",
        state: "Delhi"
      }

      const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
            let result = await axios.post(          
              "http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/carlay/SellaCarRequest",data  
              
            );
            alert("Inside function")
          } catch (error) {
            console.error(error);     
          }
        
    }
  return (
    <div className="m-4 rounded">
        <Form onSubmit={handleSubmit}>
            <Row className="bg-blue-900 rounded-lg p-3">
                        <Col xl={4} lg={4} md={4} sm={6}>
                        <Form.Group>
                            <Form.Label className="text-white">Fuel Type</Form.Label>
                            <Form.Select 
                            name="fuel"
                            value=""
                            // onChange={handleChange}
                            >
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
                            value=""
                            // onChange={handleChange}
                            >
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
                            value=""
                            // onChange={handleChange}
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
                            value=""
                            // onChange={handleChange}
                            >
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
                            value=""
                            // onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile current location."
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                        <Form.Group>
                            <Form.Label className="text-white">Vechile Reg. No.</Form.Label>
                            <Form.Control
                            name="regNo"
                            value=""
                            // onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile reg. no"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                        <Form.Group>
                            <Form.Label className="text-white">Kilometer Reading</Form.Label>
                            <Form.Control
                            name="km"
                            value=""
                            // onChange={handleChange}
                        type="text"
                        placeholder="Please enter kilometer reading"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4 hidden">
                        <Form.Group>
                            <Form.Label className="text-white">Insurance End Date</Form.Label>
                            <Form.Control
                            name="insuranceEndDate"
                            value=""
                            // onChange={handleChange}
                        type="date"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                        </Form.Group>
                        </Col>
                    
                        <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                        <Button type="submit">Submit</Button>
                        </Col>
            </Row>
        </Form>
    </div>
  )
}

export default Page