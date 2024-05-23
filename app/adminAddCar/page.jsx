"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Col, Row, Form, Button, } from "react-bootstrap";
import { MdAddCircleOutline, MdList } from "react-icons/md";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import axios from "axios";
import Link from "next/link";
import { FileInput, Label, Select, TextInput } from "flowbite-react";

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
      const url = `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;
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
        "http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/SellaCarRequest",
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
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Manufacturer" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="manufacturerName"
                        value={formValues.manufacturerName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter Manufacturer Name"
                        required
                         />
                      </div>
                   
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6}>
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Variant Name" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="variantName"
                        value={formValues.variantName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter Variant Name"
                        required
                         />
                      </div>
                
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6}>
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Year of Manufacture" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="yom"
                        value={formValues.yom}
                        onChange={handleChange}
                        type="text"
                        placeholder="Enter Mfg. Year"
                        required
                         />
                      </div>
                    
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                      <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="countries" value="Fuel Type" />
                      </div>
                      <Select id="countries" required sizing="md"
                      name="fuel_Type"
                      value={formValues.fuel_Type}
                      onChange={handleChange}
                      >
                        <option selected>{formValues.fuel_Type}</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>CNG</option>
                      </Select>
                  
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Transmission" />
                      </div>
                      <Select required sizing="md"
                      name="transmission"
                      value={formValues.transmission}
                      onChange={handleChange}
                      >
                        <option selected>{formValues.transmission}</option>
                        <option>Manual</option>
                        <option>Automatic</option>
                      </Select>
                 
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Accidental" />
                      </div>
                      <Select required sizing="md"
                      name="accidental"
                      value={formValues.accidental}
                      onChange={handleChange}
                      >
                        <option selected>{formValues.accidental}</option>
                        <option>No</option>
                        <option>Yes</option>
                      </Select>
                 
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                    <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Insurance" />
                      </div>
                      <Select required sizing="md"
                      name="insurance"
                      value={formValues.insurance}
                      onChange={handleChange}
                      >
                        <option selected>{formValues.insurance}</option>
                        <option>No</option>
                        <option>Yes</option>
                      </Select>
                 
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile Reg. State" />
                        </div>
                        <TextInput 
                        sizing="md"
                        shadow
                        name="state"
                        value={formValues.state}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile reg. state"
                        required
                         />
                      </div>
                  
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile Reg. City" />
                        </div>
                        <TextInput 
                        sizing="md"
                        shadow
                        name="reg_city"
                        value={formValues.reg_city}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile reg. city"
                        required
                         />
                      </div>
                  
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Ownership" />
                      </div>
                      <Select required sizing="md"
                     name="ownership"
                     value={formValues.ownership}
                     onChange={handleChange}
                      >
                        <option selected>{formValues.ownership}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Select>
                  
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile current location" />
                        </div>
                        <TextInput 
                        sizing="md"
                        shadow
                        name="v_location"
                        value={formValues.v_location}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter vechile current location."
                        aria-describedby="inputGroupPrepend"
                        required
                         />
                      </div>
                    
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                      <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile Reg. No." />
                        </div>
                        <TextInput id="small" type="text" sizing="md"
                        shadow
                        name="reg_num"
                        value={formValues.reg_num}
                        onChange={handleChange}
                        placeholder="Please enter vechile reg. no"
                        aria-describedby="inputGroupPrepend"
                        required
                         />
                      </div>
                   
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
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter kilometer reading"
                        aria-describedby="inputGroupPrepend"
                        required
                         />
                      </div>
                  
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div>
                        <div className="mb-2 block">
                          <Label style={{color:"#fff"}} value="Vechile Expected Price" />
                        </div>
                        <TextInput
                        sizing="md"
                        shadow
                        name="expected_Price"
                        value={formValues.expected_Price}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter expected price"
                        aria-describedby="inputGroupPrepend"
                        required
                         />
                      </div>
                   
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Approved" />
                      </div>
                      <Select required sizing="md"
                     name="isReqApproved"
                     value={formValues.isReqApproved}
                     onChange={handleChange}
                      >
                        <option selected>{formValues.isReqApproved}</option>
                        <option>Yes</option>
                        <option>No</option>
                      </Select>
                   
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}}  value="Carlay Assured" />
                      </div>
                      <Select required sizing="md"
                     name="isCarLayAssured"
                     value={formValues.isCarLayAssured}
                     onChange={handleChange}
                      >
                        <option selected>{formValues.isCarLayAssured}</option>
                        <option>Yes</option>
                        <option>No</option>
                      </Select>
                
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="RC Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="rcImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                 
                    {/* <p className="text-red-900">{formErrors.firstName}</p> */}
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Front Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="frontImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Rear Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="rearImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                  
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Right Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="rightImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                  
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Left Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="leftImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                   
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Odometer Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="dometerImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                 
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
                  <div className="mb-2 block">
                        <Label style={{color:"#fff"}} htmlFor="file" value="Seat Image" />
                      </div>
                      <FileInput id="file" 
                      sizing="md"
                      name="seatImage"
                      onChange={handleFileChange}
                      type="file"
                      />
                  
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                 
                  <Col xl={4} lg={4} md={4} sm={6} className="mt-4 flex justify-center items-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Add Car
                    </button>
                  </Col>
                </Row>
              </Form>

           </div>
          </>
       
  );
};

export default Page;
