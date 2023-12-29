"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
const AdminCarList = () => {

    // const [data,setData]=useState([])
    

    // useEffect(()=>{
    //     axios.get("http://localhost:8000/adminapi/getAllCar")
    //     .then((res)=>setData(res.data))
    //     .catch((error)=>console.log(error))

    // },[])
    // console.log("Data",data)
  return (
    <div className='d-flex flex-column  align-items-center bg-light vh-100'>
        <h1 className='text-4xl text-blue-900'>List of Admin Cars</h1>
        <div className='w-full overflow-x-auto rounded bg-white border shadow p-4'>
            {/* <div className='d-flex justify-content-end'><Link to="/create" className='btn btn-success'>Add+</Link></div> */}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>Manufacturer</th>
                        <th>Variant</th>
                        <th>Reg. No.</th>
                        <th>Mfg Year</th>
                        <th>Ownership</th>
                        <th>Location</th>
                        <th>Reg. State</th>
                        <th>Fuel Type</th>
                        <th>Transmission</th>
                        <th>Accidental</th>
                        <th>Insurance</th>
                        <th>KM Reading</th>
                        <th>Expected Price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((item,i)=>(
                        <tr key={data._id}>
                            <td>{i+1}</td>
                            <td>{item.manufacturer}</td>
                            <td>{item.variant}</td>
                            <td>{item.regNo}</td>
                            <td>{item.mfgYear}</td>
                            <td>{item.ownership}</td>
                            <td>{item.location}</td>
                            <td>{item.regState}</td>
                            <td>{item.fuelType}</td>
                            <td>{item.transmission}</td>
                            <td>{item.accidental}</td>
                            <td>{item.insurance}</td>
                            <td>{item.kilometer}</td>
                            <td>{item.expectedPrice}</td>
                            <td>
                               <EditIcon/> 
                               <DeleteForeverIcon/> 
                            </td>
                           
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default AdminCarList