import React,{useContext,useEffect} from 'react';
import { StepperContext } from '@/app/context/StepperContext'

import { Col, Form, Row } from 'react-bootstrap';

const PersonalDetails = () => {
  const {userData,setUserData}=useContext(StepperContext)
  const handleChange=(e)=>{
    const {name,value}=e.target;
      setUserData({...userData,[name]:value})
    
}

// useEffect(() => {
//   axios.get("http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/carlay/GetManufacturer").then((response) => {
//     console.log("URL Data",response.data);
//   });
  // axios.get("https://jsonplaceholder.typicode.com/todos").then((response) => {
  //   console.log("URL Data",response.data);
  // });
// }, []);


  return (
    <div>

        <Row className="bg-blue-900 rounded p-3">
          <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">First Name</Form.Label>
                  <Form.Control
                  name="firstName"
                  value={userData["firstName" || ""]}
                  onChange={handleChange}
                type="text"
                placeholder="Enter First Name"
                aria-describedby="inputGroupPrepend"
                required
              />
                </Form.Group>
              </Col>
          <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Last Name</Form.Label>
                  <Form.Control
                  name="lastName"
                  value={userData["lastName" || ""]}
                  onChange={handleChange}
                type="text"
                placeholder="Enter Last Name"
                aria-describedby="inputGroupPrepend"
                required
              />
                </Form.Group>
              </Col>
          <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Mobile No</Form.Label>
                  <Form.Control
                  name="mobileNo"
                  value={userData["mobileNo" || ""]}
                  onChange={handleChange}
                type="number"
                placeholder="Enter Mobile No"
                aria-describedby="inputGroupPrepend"
                required
              />
                </Form.Group>
              </Col>
          <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control
                  name="email"
                  value={userData["email" || ""]}
                  onChange={handleChange}
                type="email"
                placeholder="Enter email"
                aria-describedby="inputGroupPrepend"
                required
              />
                </Form.Group>
              </Col>
        </Row>
      {/* <Grid container spacing={3}>
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
       
      </Grid> */}
    </div>
  )
}

export default PersonalDetails