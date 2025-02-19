"use client";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { Col, Form, Row } from "react-bootstrap";
import { FileInput, Label, Select, TextInput } from "flowbite-react";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { ApiConfig } from "../../config";
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const AddCar = () => {
  const router = useRouter();
  const { userInfo, updateUserInfo } = useContext(UserContext);
  const { email, mobileNo } = userInfo;
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    manufacturerName: "_test",
    variantName: "_test",
    yom: "2023",
    kmReading: "",
    reg_city: "Test",
    v_location: "",
    allSidePhoto: "y",
    created_by: "Admin",
    modified_by: "Admin",
    odoPhoto: "y",
    rcPhoto: "y",
    id: "0",
    ownership: "",
    fuel_Type: "",
    state: "Test",
    transmission: "",
    accidental: "",
    insurance: "",
    expected_Price: "000000",
    state: "Delhi",
    reg_num: "",
    isReqApproved: "0",
    isCarLayAssured: "0",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //File Upload
  const [files, setFiles] = useState([]);
  const handleFileChange = async(event) => {
    // const selectedFiles=Array.from(event.target.files);
    // setFiles((prevFiles)=>[...prevFiles,...selectedFiles])
    setFiles([...files,event.target.files[0]]);
    // const url = `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${'DL-1234'}`;
    const url = `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;

    const formData = new FormData();
    formData.append('files',event.target.files[0])
    await axios.post(url, formData).then((response) => {
    });

  };
  const handleFileSubmit = async (event) => {
    // event.preventDefault();

    alert("Handle file submit")
    const url = `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;

    const formData = new FormData();
    
    // Append each file to FormData
    for (let i = 0; i < files.length; i++) {
      // formData.append("files", file[i]);
      formData.append(`files${i}`, files[i]);
    }
    // files.forEach((file,index)=>{
    //   formData.append(`file${index}`,file);
    // });

// Log FormData contents
// for (let [key, value] of formData.entries()) {
//   console.log(`${key}:`, value);
// }
    await axios.post(url, formData).then((response) => {
    });
  };

  //Input change handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  //Handle Form Submit
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    if (
      formValues.fuel_Type != "" &&
      formValues.accidental != "" &&
      formValues.insurance != "" &&
      formValues.transmission != "" &&
      formValues.reg_num != "" &&
      formValues.v_location != "" &&
      formValues.kmReading != "" &&
      formValues.firstName != "" &&
      formValues.lastName != "" &&
      formValues.email != "" &&
      formValues.mobile != "" &&
      files.length > 1
    ) {
      if (userInfo.email !== "") {
        // handleFileSubmit();
        handleSubmit();
      } else {
        alert("Please Login first");
        router.push("/login");
      }
    } else {
      alert("All fields are mandotary please check all steps and fields !");
      return;
    }
  };
  const handleSubmit = async () => {
    // e.preventDefault();
    console.log(formValues);
    try {
      let result = await axios.post(
        "http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/SellaCarRequest",
        formValues
      );
      toast.success("Request Submitted Successfully, Out team will contact you soon");
      router.push('/')
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && !isSubmit) {
      // setIsDisabled(!isDisabled)
      // console.log("Form Values", formValues);
    }
  }, [formErrors]);

  //Validate form
  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.fuel_Type) {
      errors.fuel_Type = "Fuel type is required";
    }
    if (!values.transmission) {
      errors.transmission = "Transmission type is required";
    }
    if (!values.accidental) {
      errors.accidental = "Accidental is required";
    }
    if (!values.insurance) {
      errors.insurance = "Insurance is required";
    }
    if (!values.reg_num) {
      errors.reg_num = "Reg. No is required";
    }
    if (!values.v_location) {
      errors.v_location = "Vechile location is required";
    }
    if (!values.kmReading) {
      errors.kmReading = "KM Reading is required";
    }
    if (!values.firstName) {
      errors.firstName = "Firstname is required";
    }
    if (!values.lastName) {
      errors.lastName = "Lastname is required";
    }
    if (!values.mobile) {
      errors.mobile = "Mobile no is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }
    return errors;
  };

  return (
    <div className="h-full">
      {/* <p>{JSON.stringify(formValues,undefined,2)}</p> */}
      <Box sx={{ width: "100%" }}>
        <Form onSubmit={handleFormSubmit}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Vechile Details" {...a11yProps(0)} />
              <Tab label="Personal Details" {...a11yProps(1)} />
              <Tab label="Photos" {...a11yProps(2)} />
            </Tabs>
          </Box>
          <CustomTabPanel value={value} index={0}>
            <Row className="bg-blue-900 rounded-lg p-3">
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="countries" value="Fuel Type" />
                      </div>
                      <Select id="countries" required sizing="md"
                      name="fuel_Type"
                      value={formValues.fuel_Type}
                      onChange={handleInputChange}
                      >
                        <option>Select Fuel Type</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>CNG</option>
                      </Select>
                {/* <Form.Group>
                  <Form.Label className="text-white">Fuel Type</Form.Label>
                  <Form.Select
                    name="fuel_Type"
                    // value={userData["fuel_Type" || ""]}
                    value={formValues.fuel_Type}
                    onChange={handleInputChange}
                    // onChange={handleChange}
                  >
                    <option>Select Fuel Type</option>
                    <option>Petrol</option>
                    <option>Diesel</option>
                    <option>CNG</option>s
                  </Form.Select>
                </Form.Group> */}
                <p className="text-red-900">{formErrors.fuel_Type}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Transmission" />
                      </div>
                      <Select required sizing="md"
                      name="transmission"
                      value={formValues.transmission}
                      onChange={handleInputChange}
                      >
                        <option>Select Transmission</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                      </Select>
                {/* <Form.Group>
                  <Form.Label className="text-white">Transmission</Form.Label>
                  <Form.Select
                    name="transmission"
                    // value={userData["transmission" || ""]}
                    // onChange={handleChange}
                    value={formValues.transmission}
                    onChange={handleInputChange}
                  >
                    <option>Select Transmission</option>
                    <option>Manual</option>
                    <option>Automatic</option>
                  </Form.Select>
                </Form.Group> */}
                <p className="text-red-900">{formErrors.transmission}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Accidental" />
                      </div>
                      <Select required sizing="md"
                      name="accidental"
                      value={formValues.accidental}
                      onChange={handleInputChange}
                      >
                        <option>Select Accitental Type</option>
                        <option>No</option>
                        <option>Yes</option>
                      </Select>
                {/* <Form.Group>
                  <Form.Label className="text-white">Accidental</Form.Label>
                  <Form.Select
                    name="accidental"
                    // value={userData["accidental" || ""]}
                    // onChange={handleChange}
                    value={formValues.accidental}
                    onChange={handleInputChange}
                  >
                    <option>Select Accitental Type</option>
                    <option>No</option>
                    <option>Yes</option>
                  </Form.Select>
                </Form.Group> */}
                <p className="text-red-900">{formErrors.accidental}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Insurance" />
                      </div>
                      <Select required sizing="md"
                      name="insurance"
                      value={formValues.insurance}
                      onChange={handleInputChange}
                      >
                        <option>Select Insurance</option>
                        <option>No</option>
                        <option>Yes</option>
                      </Select>
                {/* <Form.Group>
                  <Form.Label className="text-white">Insurance</Form.Label>
                  <Form.Select
                    name="insurance"
                    value={formValues.insurance}
                    onChange={handleInputChange}
                  >
                    <option>Select Insurance</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group> */}
                <p className="text-red-900">{formErrors.insurance}</p>
              </Col>

              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile Reg. No." />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="reg_num"
                        value={formValues.reg_num}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Please enter vechile reg. no"
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">
                    Vechile Reg. No.
                  </Form.Label>
                  <Form.Control
                    name="reg_num"
                    // value={userData["reg_num" || ""]}
                    // onChange={handleChange}
                    value={formValues.reg_num}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Please enter vechile reg. no"
                    aria-describedby="inputGroupPrepend"
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.reg_num}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile current location." />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="v_location"
                        value={formValues.v_location}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Please enter vechile current location."
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">
                    Vechile current location.
                  </Form.Label>
                  <Form.Control
                    name="v_location"
                    // value={userData["v_location" || ""]}
                    // onChange={handleChange}
                    value={formValues.v_location}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Please enter vechile current location."
                    aria-describedby="inputGroupPrepend"
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.v_location}</p>
              </Col>

              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Kilometer Reading" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="kmReading"
                        value={formValues.kmReading}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Please enter kilometer reading"
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">
                    Kilometer Reading
                  </Form.Label>
                  <Form.Control
                    name="kmReading"
                    // value={userData["kmReading" || ""]}
                    // onChange={handleChange}
                    value={formValues.kmReading}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Please enter kilometer reading"
                    aria-describedby="inputGroupPrepend"
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.kmReading}</p>
              </Col>
            </Row>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Row className="bg-blue-900 rounded p-3">
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="First Name" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="lastName"
                        value={formValues.firstName}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter First Name"
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">First Name</Form.Label>
                  <Form.Control
                    name="firstName"
                    value={formValues.firstName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter First Name"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.firstName}</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Last Name" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="lastName"
                        value={formValues.lastName}
                        onChange={handleInputChange}
                        type="text"
                        placeholder="Enter Last Name"
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">Last Name</Form.Label>
                  <Form.Control
                    name="lastName"
                    value={formValues.lastName}
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Enter Last Name"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.lastName}</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Mobile No." />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="mobile"
                        value={formValues.mobile}
                        onChange={handleInputChange}
                        type="number"
                        placeholder="Enter Mobile No"
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">Mobile No</Form.Label>
                  <Form.Control
                    name="mobile"
                    // value={mobileNo != "" ? mobileNo : formValues.mobile}
                    value={formValues.mobile}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter Mobile No"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.mobileNo}</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Email" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="email"
                        value={formValues.email}
                        onChange={handleInputChange}
                        type="email"
                        placeholder="Enter email"
                        required
                         />
                      </div>
                {/* <Form.Group>
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control
                    name="email"
                    // value={email != "" ? email : formValues.email}
                    value={formValues.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter email"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group> */}
                <p className="text-red-900">{formErrors.email}</p>
              </Col>
            </Row>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Row className="bg-blue-900 rounded p-3">
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="RC Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="rcImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Group>
                  <Form.Label className="text-white">RC Image</Form.Label>
                  <Form.Control
                    name="rcImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}

                  />
                </Form.Group> */}
                {/* <p className="text-red-900">{formErrors.firstName}</p> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Front Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="frontImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Group>
                  <Form.Label className="text-white">Front Image</Form.Label>
                  <Form.Control
                    name="frontImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}
                  />
                </Form.Group> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Rear Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="rearImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Label className="text-white">Rear Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="rearImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}
                  />
                </Form.Group> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Right Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="rightImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Label className="text-white">Right Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="rightImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}
                  />
                </Form.Group> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Left Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="leftImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Label className="text-white">Left Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="leftImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}
                  />
                </Form.Group> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Odometer Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="dometerImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Label className="text-white">Odometer Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="dometerImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}
                  />
                </Form.Group> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
              <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Seat Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="seatImage"
                    onChange={handleFileChange}
                    type="file"
                    disabled={formValues.reg_num ===""?true:false}
                      />
                {/* <Form.Label className="text-white">Seat Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="seatImage"
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    disabled={formValues.reg_num ===""?true:false}
                  />
                </Form.Group> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4 flex justify-center items-center">
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                  Submit
                </button>
              </Col>
            </Row>
          </CustomTabPanel>
        </Form>
      </Box>
    </div>
  );
};

export default AddCar;
