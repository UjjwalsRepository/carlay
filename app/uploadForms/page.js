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

// const [formData,setFormData]=useState({
//     manufacturerName:"",
//     variantName:"",
//     yom:"",
//     fuel_Type:"",
//     transmission:"",
//     accidental:"",
//     insurance:"",
//     state:"",
//     reg_city:"",
//     ownership:"",
//     v_location:"",
//     reg_num:"",
//     kmReading:"",
//     expected_Price:"",
//     isReqApproved:"",
//     isCarLayAssured:"",
//     rcImage:null,
//     frontImage:null,
//     rearImage:null,
//     rightImage:null,
//     leftImage:null,
//     odometerImage:null,
//     seatImage:null,
// });

const [formValues, setFormValues] = useState({});
const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

const [file, setFile] = useState([]);
const handleFileChange = (event) => {
    setFile([...file, event.target.files[0]]);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Clicked")
    const formDataToSend = new FormData();
    Object.keys(formValues).forEach((key) => {
      formDataToSend.append(key, formValues[key]);
    });
    for (let i = 0; i < file.length; i++) {
        formDataToSend.append("files", file[i]);
    }
    // for(var key in formDataToSend) {
    //     console.log(formDataToSend[key]);
    // }
    // console.log(formDataToSend.getAll());
    axios.post('http://localhost:8000/uploads',formDataToSend).then((response) => {console.log(response)});
  }




// const getFormData=(e)=>{
//     const input=e.target;
//     const name=e.target.name;
//     let value="";
//     if(input.type==="file"){
//         value=input.files[0];
//     }else{
//         value=input.value;
//     }
//     return setFormData((prevData)=>{
//         return{
//             ...prevData,
//             [name]:value
//         }
//     })
// }



//   const [formValues, setFormValues] = useState({});
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };

    // File Upload
    // const [file, setFile] = useState([]);
    // const handleFileChange = (event) => {
    //   setFile([...file, event.target.files[0]]);
    // };
    // const handleFileSubmit = async (event) => {
    //   // event.preventDefault()
    //   const url = `http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;
    //   const formData = new FormData();
    //   // Append each file to FormData
    //   for (let i = 0; i < file.length; i++) {
    //     formformValues.append("files", file[i]);
    //   }
  
    //   await axios.post(url, formData).then((response) => {
    //   });
    // };



//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // console.log(formData)
//     const fd=new FormData(e.target);
//     const data=Object.fromEntries(fd.entries());
//     console.log("Data",data)
//     axios.post('http://localhost:8000/uploads',data).then((response) => {console.log(response)});
//   };

  return (
   
          <>
           <div className="w-full p-4" style={{backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"}}>
                <Form onSubmit={handleSubmit}>
                {/* <Row className="p-3 mb-4"> // bg-blue-900 rounded-lg  */}
                <Row className="p-3 mb-4">
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
                        // required
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
                        // required
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
                        <option >Fuel Type</option>
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
                        <option >
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
                        <option >Accidental</option>
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
                        <option >Insurance</option>
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
                        // required
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
                        // required
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
                        <option >Ownership</option>
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
                        // required
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
                        // required
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
                        // required
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
                        // required
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
                        <option >Approved</option>
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
                        <option >Assured</option>
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
                        onChange={handleFileChange}
                        type="file"
                        accept="image/*"
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
                        accept="image/*"
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
                        accept="image/*"
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
                        accept="image/*"
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
                        accept="image/*"
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
                        accept="image/*"
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
                        accept="image/*"
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
