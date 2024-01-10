import React,{useState,useContext} from 'react';
import { StepperContext } from '@/app/context/StepperContext'

import { Col, Form, Row, Button } from 'react-bootstrap';
import ProgressBar from 'react-bootstrap/ProgressBar';
import axios from 'axios';
const PicUpload = () => {
  const {userData,setUserData}=useContext(StepperContext);
    // console.log("User-Data",userData);
    // const jsonData = '{"": "value"}';
  // const [file, setFile] = useState(null);
  // const [progress, setProgress] = useState({started:false,pc:0});
  // const [msg, setMsg] = useState(null);

  // const handleUpload=() => {
  //   if(!file){
  //       setMsg("No file selected");
  //       return;
  //   }
  //   const fd=new FormData();
  //   fd.append('file',file);
  //   setMsg("Uploading...");
  //   setProgress(prevState=>{
  //       return {...prevState,started:true}
  //   })
  //   axios.post('http://httpbin.org/post',fd,{
  //       onUploadProgress:(progressEvent)=>{setProgress(prevState=>{
  //           return{...prevState,pc:progressEvent.progress*100}
  //       })},
  //       headers:{
  //           "Custom-Header":"value"
  //       }
  //   })
  //   .then(res=>{
  //       setMsg("Upload Successful");
  //       console.log(res.data);
  //   })
  //   .catch(err=>{
  //       setMsg("Upload Failed");
  //       console.error(err)});


  // }

  const [file, setFile] = useState([])

  function handleChange(event) {
    setFile([...file,event.target.files[0]])
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("Uploaded Files",file)
    // const url = 'http://localhost:3000/uploadFile';

 
    const formData = new FormData();
    
    // Append each file to FormData
    for (let i = 0; i < file.length; i++) {
      formData.append('files', file[i]);
    }

    // const config = {
    //   headers: {
    //     'content-type': 'multipart/form-data',
    //   },
    // };
    // axios.post(url, formData, config).then((response) => {
    //   console.log(response.data);
    // });

  }


  return (
    <div>
        <Row className="bg-blue-900 rounded p-3">
            <Form onSubmit={handleSubmit}>

        <Col xl={4} lg={4} md={6} sm={6} className="">  
              <Form.Group>
                <Form.Label className="text-white">RC Image</Form.Label>
                <Form.Control
                name="rcImage"
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
              accept="image/png, image/jpeg" 
              // multiple
            />
              
              </Form.Group>
              
            </Col>
            <Col xl={4} lg={4} md={6} sm={6} className="">
              <Form.Group>
                <Form.Label className="text-white">Front Image</Form.Label>
                <Form.Control
                name="frontImage"
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              accept="image/png, image/jpeg" 

              required
            />
             
              </Form.Group>
              
            </Col>
            {/* <Col xl={4} lg={4} md={6} sm={6} className="">
              <Form.Group>
                <Form.Label className="text-white">Rear Image</Form.Label>
                <Form.Control
                name="rearImage"
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
              
              </Form.Group>
            </Col> */}
            {/* <Col xl={4} lg={4} md={6} sm={6} className="mt-4">
              <Form.Group>
                <Form.Label className="text-white">Left Image</Form.Label>
                <Form.Control
                name="leftImage"
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col> */}
            {/* <Col xl={4} lg={4} md={6} sm={6} className="my-4">
              <Form.Group>
                <Form.Label className="text-white">Right Image</Form.Label>
                <Form.Control
                name="rightImage"
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
              
              </Form.Group>
            </Col> */}
            {/* <Col xl={4} lg={4} md={4} sm={6} className="my-4">
              <Form.Group>
                <Form.Label className="text-white">Seat Image</Form.Label>
                <Form.Control
                name="seatImage"
                onChange={handleChange}
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col> */}
            {/* <Col xl={4} lg={4} md={6} sm={6} className="">
              <Form.Group>
                <Form.Label className="text-white">Odometer Image</Form.Label>
                <Form.Control
                name="odometerImage"
                onChange={handleChange}
                
              type="file"
              aria-describedby="inputGroupPrepend"
              required
            />
             
              </Form.Group>
            </Col>  */}
            <Button type="submit" className="btn btn-primary">Upload</Button>
            </Form>
        </Row>
    </div>
  )
}

export default PicUpload