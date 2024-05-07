"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Col, Row, Form, Button, } from "react-bootstrap";
import { MdAddCircleOutline, MdList } from "react-icons/md";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import Link from "next/link";
const Page = () => {
    
  // const initialValues = {
  //   firstName: "",
  //   lastName: "",
  //   email: "",
  //   mobile: "",
  //   manufacturerName: "",
  //   variantName: "",
  //   yom: "",
  //   kmReading: "",
  //   reg_city: "",
  //   v_location: "",
  //   allSidePhoto: "y",
  //   created_by: "",
  //   modified_by: "",
  //   odoPhoto: "y",
  //   rcPhoto: "y",
  //   id: "1",
  //   ownership: "",
  //   fuel_Type: "",
  //   state: "",
  //   transmission: "",
  //   accidental: "",
  //   insurance: "",
  //   expected_Price: "",
  //   state: "",
  //   reg_num: "",
  //   isReqApproved: "",
  //   isCarLayAssured: "",
  // };

  const [formValues, setFormValues] = useState({});


    // File Upload
    const [file, setFile] = useState([]);
    const handleFileChange = (event) => {
      setFile([...file, event.target.files[0]]);
    };
    const handleFileSubmit = async (event) => {
      // event.preventDefault()
      const url = `http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;
      const formData = new FormData();
      // Append each file to FormData
      for (let i = 0; i < file.length; i++) {
        formformValues.append("files", file[i]);
      }
  
      await axios.post(url, formData).then((response) => {
      });
    };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // console.log(formValues);

  const handleSubmit = async () => {
    e.preventDefault();
    // console.log(formValues);
    setFormValues({ ...formValues, id:1})
    try {
      let result = await axios.post(
        "http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/carlay/SellaCarRequest",
        formValues
      );
      
      toast.success(result);
      toast.success("Record Successfully Updated");
      // router.push('/')
    } catch (error) {
      alert(error.message)
      console.error(error);
    }
  };

  return (
   
          <>
           <div className="w-full p-4">
                <Form onSubmit={handleSubmit}>
                <Row className=" bg-blue-900 rounded-lg p-3 mb-4">
                    <Col xl={4} lg={4} md={4} sm={6}>
                    <Form.Group>
                        <Form.Label className="text-white">Manufacturer</Form.Label>
                        <Form.Control
                        name="manufacturerName"
                        value={formValues.manufacturerName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter Manufacturer Name"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6}>
                    <Form.Group>
                        <Form.Label className="text-white">Variant Name</Form.Label>
                        <Form.Control
                        name="variantName"
                        value={formValues.variantName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter Variant Name"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6}>
                    <Form.Group>
                        <Form.Label className="text-white">
                        Year of Manufacture
                        </Form.Label>
                        <Form.Control
                        name="yom"
                        value={formValues.yom}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Mfg. Year"
                        aria-describedby="inputGroupPrepend"
                        // required
                        />
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">Fuel Type</Form.Label>
                        <Form.Select
                        name="fuel_Type"
                        value={formValues.fuel_Type}
                        onChange={handleChange}
                        >
                        <option selected={formValues.fuel_Type}>Fuel Type</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>CNG</option>s
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">Transmission</Form.Label>
                        <Form.Select
                        name="transmission"
                        value={formValues.transmission}
                        onChange={handleChange}
                        >
                        <option selected={formValues.transmission}>
                            Select Transmission
                        </option>
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
                        value={formValues.accidental}
                        onChange={handleChange}
                        >
                        <option selected={formValues.accidental}>Accidental</option>
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
                        value={formValues.insurance}
                        onChange={handleChange}
                        >
                        <option selected={formValues.insurance}>Insurance</option>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">
                        Vechile Reg. State
                        </Form.Label>
                        <Form.Control
                        name="state"
                        value={formValues.state}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile reg. state"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">
                        Vechile Reg. City
                        </Form.Label>
                        <Form.Control
                        name="reg_city"
                        value={formValues.reg_city}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile reg. city"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">Ownership</Form.Label>
                        <Form.Select
                        name="ownership"
                        value={formValues.ownership}
                        onChange={handleChange}
                        >
                        <option selected={formValues.ownership}>Ownership</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">
                        Vechile current location.
                        </Form.Label>
                        <Form.Control
                        name="v_location"
                        value={formValues.v_location}
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
                        <Form.Label className="text-white">
                        Vechile Reg. No.
                        </Form.Label>
                        <Form.Control
                        name="reg_num"
                        value={formValues.reg_num}
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
                        <Form.Label className="text-white">
                        Kilometer Reading
                        </Form.Label>
                        <Form.Control
                        name="kmReading"
                        value={formValues.kmReading}
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
                        <Form.Label className="text-white">
                        Vechile Expected Price
                        </Form.Label>
                        <Form.Control
                        name="expected_Price"
                        value={formValues.expected_Price}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter expected price"
                        aria-describedby="inputGroupPrepend"
                        required
                        />
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">Approved</Form.Label>
                        <Form.Select
                        name="isReqApproved"
                        value={formValues.isReqApproved}
                        onChange={handleChange}
                        >
                        <option selected={formValues.isReqApproved}>Approved</option>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <Form.Group>
                        <Form.Label className="text-white">Carlay Assured</Form.Label>
                        <Form.Select
                        name="isCarLayAssured"
                        value={formValues.isCarLayAssured}
                        onChange={handleChange}
                        >
                        <option selected={formValues.isCarLayAssured}>Assured</option>
                        <option>Yes</option>
                        <option>No</option>
                        </Form.Select>
                    </Form.Group>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
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
                    <Col xl={4} lg={4} md={4} sm={6} className="mt-4 flex justify-center items-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                        Add Record
                    </button>
                    </Col>
                </Row>
                </Form>

           </div>
          </>
       
  );
};

export default Page;
