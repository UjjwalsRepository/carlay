"use client";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Col, Form, Row } from "react-bootstrap";
import { Button } from "@mui/material";
import axios from "axios";
import { UserContext } from "../context/UserContext";
import { useRouter } from "next/navigation";

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

const page = () => {
  const router = useRouter();
  const { userInfo, updateUserInfo } = useContext(UserContext);
  const { email, mobileNo } = userInfo;
  console.log("UserInfo", userInfo);
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
    isReqApproved: "0",
    isCarLayAssured: "0",
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
  const [isDisabled, setIsDisabled] = useState(false);

  const [value, setValue] = useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //File Upload
  const [file, setFile] = useState([]);
  const handleFileChange = (event) => {
    setFile([...file, event.target.files[0]]);
  };
  const handleFileSubmit = async (event) => {
    // event.preventDefault()
    console.log("Uploaded Files", file);
    console.log("Reg No", formValues.reg_num);

    const url = `http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;

    const formData = new FormData();

    // Append each file to FormData
    for (let i = 0; i < file.length; i++) {
      formData.append("files", file[i]);
    }

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    await axios.post(url, formData).then((response) => {
      console.log(response.data);
    });
  };

  //Input change handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    // console.log(formValues);
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
      file.length > 6
    ) {
      if (userInfo.email !== "") {
        alert("Inside");
        // setIsSubmit(true);
        handleFileSubmit();
        // handleSubmit();
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
    try {
      let result = await axios.post(
        "http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/carlay/SellaCarRequest",
        formValues
      );
      console.log("Post Message", result.message);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    // console.log(formErrors)
    if (Object.keys(formErrors).length === 0 && !isSubmit) {
      // setIsDisabled(!isDisabled)
      console.log("Form Values", formValues);
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
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.fuel_Type}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.transmission}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.accidental}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Insurance</Form.Label>
                  <Form.Select
                    name="insurance"
                    // value={userData["insurance" || ""]}
                    // onChange={handleChange}
                    value={formValues.insurance}
                    onChange={handleInputChange}
                  >
                    <option>Select Insurance</option>
                    <option>Yes</option>
                    <option>No</option>
                  </Form.Select>
                </Form.Group>
                <p className="text-red-900">{formErrors.insurance}</p>
              </Col>

              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.reg_num}</p>
              </Col>
              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.v_location}</p>
              </Col>

              <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.kmReading}</p>
              </Col>
            </Row>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            <Row className="bg-blue-900 rounded p-3">
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.firstName}</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
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
                </Form.Group>
                <p className="text-red-900">{formErrors.lastName}</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Mobile No</Form.Label>
                  <Form.Control
                    name="mobile"
                    value={mobileNo != "" ? mobileNo : formValues.mobile}
                    onChange={handleInputChange}
                    type="number"
                    placeholder="Enter Mobile No"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                <p className="text-red-900">{formErrors.mobileNo}</p>
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Email</Form.Label>
                  <Form.Control
                    name="email"
                    value={email != "" ? email : formValues.email}
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Enter email"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                <p className="text-red-900">{formErrors.email}</p>
              </Col>
            </Row>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            <Row className="bg-blue-900 rounded p-3">
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">RC Image</Form.Label>
                  <Form.Control
                    name="rcImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.firstName}</p> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Group>
                  <Form.Label className="text-white">Front Image</Form.Label>
                  <Form.Control
                    name="frontImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.lastName}</p> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Label className="text-white">Rear Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="rearImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.lastName}</p> */}
              </Col>

              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Label className="text-white">Right Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="rightImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.lastName}</p> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Label className="text-white">Left Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="leftImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.lastName}</p> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Label className="text-white">Odometer Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="dometerImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.lastName}</p> */}
              </Col>
              <Col xl={6} lg={6} md={6} sm={6} className="mt-4">
                <Form.Label className="text-white">Seat Image</Form.Label>
                <Form.Group>
                  <Form.Control
                    name="seatImage"
                    //   value={formValues.firstName}
                    onChange={handleFileChange}
                    type="file"
                    aria-describedby="inputGroupPrepend"
                    // required
                  />
                </Form.Group>
                {/* <p className="text-red-900">{formErrors.lastName}</p> */}
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

export default page;
