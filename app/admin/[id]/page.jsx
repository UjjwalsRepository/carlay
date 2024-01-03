"use client"
import React,{useState,useEffect} from 'react'
import { useRouter } from 'next/navigation'
import {Col, Row, Form, Button} from 'react-bootstrap';
import { MdAddCircleOutline,MdList } from "react-icons/md";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import Link from 'next/link';
const page = ({params}) => {
  let id=params.id;
  const router = useRouter()
  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true)
  const fetchData = async () => {
    await axios.get(`http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/Carlay/GetSellCarDetail?detailId=${id}`)
       .then((res)=>{
            // console.log(res.data.sellaCarModelList[0])
           setData(res.data.sellaCarModelList[0]);
           setLoading(false)
        
       }
       )
       .catch((error)=>{
           // console.log(error)
           console.error('Error:', error);
           if (error.response) {
             console.error('Response data:', error.response.data);
             console.error('Response status:', error.response.status);
             console.error('Response headers:', error.response.headers);
           }
       })
  
 };
   
   useEffect(()=>{
      
       fetchData();
       
   },[])

   const handleChange=(e)=>{
    const {name,value}=e.target;
    setData({...data,[name]:value});
   }

  return (
    <>
        {loading?
        ( <Box sx={{ width: '100%',height:'100%' }}>
        <LinearProgress />
      </Box>):
        (
          <div>
          <Row>
            <Col>
             
              
            <button onClick={() => router.back()} className="mx-4 my-3 focus-visible:ring-ring ring-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#4046ed] px-2 py-1 text-lg font-medium text-[#e9ffec] transition-colors hover:bg-[#4f9deb] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">List of Cars&nbsp;<MdList size={30}/></button>
              

            </Col>
            <Col>
            <div className='flex justify-end'>
            
            <button  className="my-3 focus-visible:ring-ring ring-offset-background inline-flex h-10 items-center justify-center rounded-md bg-[#248046] px-2 py-1 text-lg font-medium text-[#e9ffec] transition-colors hover:bg-[#1a6334] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">Add New Car &nbsp;<MdAddCircleOutline size={30}/></button>
           
            </div>
              
            </Col>
          </Row>
          <Row className=" bg-blue-900 rounded-lg p-3">
        <Col xl={4} lg={4} md={4} sm={6}>
              <Form.Group>
                <Form.Label className="text-white">Manufacturer</Form.Label>
                <Form.Select 
                name="manufacturerName"
                value={data.manufacturerName}
                onChange={handleChange}

                // defaultValue={data.manufacturerName}
                >
                  
                  <option selected>{data.manufacturerName}</option>
                  <option >Petrol</option>
                  <option >Diesel</option>
                  <option >CNG</option>
                </Form.Select>
              </Form.Group>
              
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} >
              <Form.Group>
                <Form.Label className="text-white">Variant Name</Form.Label>
                <Form.Control
                name="variantName"
                value={data.variantName}
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
                <Form.Label className="text-white">Year of Manufacture</Form.Label>
                <Form.Select 
                name="yom"
                value={data.yom}
                onChange={handleChange}
                >
                  <option selected>{data.yom}</option>
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
                value={data.fuel_Type}
                onChange={handleChange}
                >
                  <option selected>{data.fuel_Type}</option>
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
                value={data.transmission}
                onChange={handleChange}
                >
                  <option selected={data.transmission}>Select Transmission</option>
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
                value={data.accidental}
                onChange={handleChange}
                >
                  <option selected>{data.accidental}</option>
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
                value={data.insurance}
                onChange={handleChange}
                >
                  <option selected>{data.insurance}</option>
                  <option>Yes</option>
                  <option>No</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Vechile Reg. State</Form.Label>
                <Form.Control
                name="state"
                value={data.state}
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
                <Form.Label className="text-white">Vechile Reg. City</Form.Label>
                <Form.Control
                name="reg_city"
                value={data.reg_city}
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
                value={data.ownership}
                onChange={handleChange}
                >
                  <option selected>{data.ownership}</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </Form.Select>
              </Form.Group>
            </Col>
            <Col xl={4} lg={4} md={4} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Vechile current location.</Form.Label>
                <Form.Control
                name="v_location"
                value={data.v_location}
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
                name="reg_num"
                value={data.reg_num}
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
                name="kmReading"
                value={data.kmReading}
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
                <Form.Label className="text-white">Vechile Expected Price</Form.Label>
                <Form.Control
                name="expected_Price"
                value={data.expected_Price}
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
                value={data.isReqApproved}
                onChange={handleChange}
                >
                 
                  <option selected>{data.isReqApproved}</option>
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
                value={data.isCarLayAssured}
                onChange={handleChange}
              
                >
                 <option selected>{data.isCarLayAssured}</option>
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
                // onChange={handleFileChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
                // onChange={handleChange}
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
        
    </>
  )
}

export default page