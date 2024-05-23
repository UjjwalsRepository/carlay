"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Col, Row, Form, Button, } from "react-bootstrap";
import { MdAddCircleOutline, MdList } from "react-icons/md";
import Box from "@mui/material/Box";
import LinearProgress from "@mui/material/LinearProgress";
import { FileInput, Label, Select, TextInput } from "flowbite-react";
import axios from "axios";
import Link from "next/link";
import Loading from "@/app/components/Loading";
const Page = ({ params }) => {
  let id = params.id;
  const router = useRouter();
  // const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

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

  const fetchData = async () => {
    await axios
      .get(
        `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/GetSellCarDetail?detailId=${id}`
      )
      .then((res) => {
        console.log(res.data.sellaCarModelList[0])
        setFormValues(res.data.sellaCarModelList[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        if (error.response) {
          console.error("Response data:", error.response.data);
        }
      });
  };
  useEffect(() => {
    fetchData();
  }, [id]);

    //File Upload
  const [files, setFiles] = useState([]);
  const handleFileChange = async(event) => {
    alert(formValues.reg_num)
    setFiles([...files,event.target.files[0]]);
    // const url = `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/UploadAllPic?jsonString=${formValues.reg_num}`;

    // const formData = new FormData();
    // formData.append('files',event.target.files[0])
    // await axios.post(url, formData).then((response) => {
    // });
    console.log(files)

  };


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };
  // console.log(formValues);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setFormValues({ ...formValues, });
    alert(JSON.stringify(formValues))


    try {
      let result = await axios.post(
        `http://carlayapimay-dev.eba-npfpmnm6.ap-south-1.elasticbeanstalk.com/api/Carlay/SellaCarRequest`,
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
      <div className="min-h-screen">
        {loading ? (
          <Loading/>
        ) : (
          <>
            <Row>
              <Col>
                <button
                  onClick={() => router.back()}
                  className="mx-4 my-3 focus-visible:ring-ring ring-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#4046ed] px-2 py-1 text-lg font-medium text-[#e9ffec] transition-colors hover:bg-[#4f9deb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                >
                  List of Cars&nbsp;
                  <MdList size={30} />
                </button>
              </Col>
              <Col>
            <div className='flex justify-end'>
            <Link href="/adminAddCar">
            <button  className="my-3 focus-visible:ring-ring ring-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#248046] px-2 py-1 text-lg font-medium text-[#e9ffec] transition-colors hover:bg-[#1a6334] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Add New Car &nbsp;<MdAddCircleOutline size={30}/></button>
            </Link>
           
            </div>
              
            </Col>
            </Row>
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Manufacturer</Form.Label>
                      <Form.Control
                        name="manufacturerName"
                        value={formValues.manufacturerName}
                        onChange={handleChange}
                        type="text"
                        placeholder="Please enter Manufacturer Name"
                        required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Fuel Type</Form.Label>
                      <Form.Select
                        name="fuel_Type"
                        value={formValues.fuel_Type}
                        onChange={handleChange}
                      >
                        <option selected>{formValues.fuel_Type}</option>
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>CNG</option>s
                      </Form.Select>
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Accidental</Form.Label>
                      <Form.Select
                        name="accidental"
                        value={formValues.accidental}
                        onChange={handleChange}
                      >
                        <option selected>{formValues.accidental}</option>
                        <option>No</option>
                        <option>Yes</option>
                      </Form.Select>
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Insurance</Form.Label>
                      <Form.Select
                        name="insurance"
                        value={formValues.insurance}
                        onChange={handleChange}
                      >
                        <option selected>{formValues.insurance}</option>
                        <option>Yes</option>
                        <option>No</option>
                      </Form.Select>
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Ownership</Form.Label>
                      <Form.Select
                        name="ownership"
                        value={formValues.ownership}
                        onChange={handleChange}
                      >
                        <option selected>{formValues.ownership}</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </Form.Select>
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                        disabled
                         />
                      </div>
                    {/* <Form.Group>
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
                        disabled
                      />
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
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
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Approved</Form.Label>
                      <Form.Select
                        name="isReqApproved"
                        value={formValues.isReqApproved}
                        onChange={handleChange}
                      >
                        <option selected>{formValues.isReqApproved}</option>
                        <option>Yes</option>
                        <option>No</option>
                      </Form.Select>
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Carlay Assured</Form.Label>
                      <Form.Select
                        name="isCarLayAssured"
                        value={formValues.isCarLayAssured}
                        onChange={handleChange}
                      >
                        <option selected>{formValues.isCarLayAssured}</option>
                        <option>Yes</option>
                        <option>No</option>
                      </Form.Select>
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">RC Image</Form.Label>
                      <Form.Control
                        name="rcImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Group>
                      <Form.Label className="text-white">Front Image</Form.Label>
                      <Form.Control
                        name="frontImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Label className="text-white">Rear Image</Form.Label>
                    <Form.Group>
                      <Form.Control
                        name="rearImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Label className="text-white">Right Image</Form.Label>
                    <Form.Group>
                      <Form.Control
                        name="rightImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Label className="text-white">Left Image</Form.Label>
                    <Form.Group>
                      <Form.Control
                        name="leftImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Label className="text-white">Odometer Image</Form.Label>
                    <Form.Group>
                      <Form.Control
                        name="dometerImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
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
                    {/* <Form.Label className="text-white">Seat Image</Form.Label>
                    <Form.Group>
                      <Form.Control
                        name="seatImage"
                        //   value={formValues.firstName}
                        onChange={handleFileChange}
                        type="file"
                        aria-describedby="inputGroupPrepend"
                        // required
                      />
                    </Form.Group> */}
                    {/* <p className="text-red-900">{formErrors.lastName}</p> */}
                  </Col>
                 
                  <Col xl={6} lg={6} md={6} sm={6} className="mt-4 flex justify-center items-center">
                    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                      Update
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Page;
