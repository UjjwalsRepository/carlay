"use client"
import React,{useState,useEffect} from 'react'
import axios from 'axios'
const UserCarList = () => {

    // const [data,setData]=useState([])


    // useEffect(()=>{
    //     axios.get("http://localhost:8000/api/getAllCar")
    //     // axios.get("http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/Carlay/GetSellCarList")
    //     .then((res)=>setData(res.data))
    //     .catch((error)=>console.log(error))

    // },[])
    // const [meals, setMeals] = useState([])
    // useEffect(() => {
    //   axios.get('http://carlayapi-dev.eba-ptwhyggf.ap-south-1.elasticbeanstalk.com/api/Carlay/GetSellCarDetail?detailId=1')
    //     .then((res) => {
    //       setMeals(res.data.sellaCarModelList);
    //     //   console.log(meals);
    //     })
    // }, [])
    // console.log("API Data",meals)
  return (
    <div className='d-flex flex-column  align-items-center bg-light vh-100'>
        <h1 className='text-4xl text-blue-900'>List of User Cars</h1>
        <div className='w-full overflow-x-auto rounded bg-white border shadow p-4'>
            {/* <div className='d-flex justify-content-end'><Link to="/create" className='btn btn-success'>Add+</Link></div> */}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <th>S No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Phone</th>
                        <th>Email</th>
                        <th>Fuel Type</th>
                        <th>Transmission</th>
                        <th>Accidental</th>
                        <th>Insurance End Date</th>
                        <th>Location</th>
                        <th>Reg. No.</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {data.map((item,i)=>(
                        <tr key={data._id}>
                            <td>{i+1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.mobile}</td>
                            <td>{item.email}</td>
                            <td>{item.fuelType}</td>
                            <td>{item.transmission}</td>
                            <td>{item.accidental}</td>
                            <td>{item.insuranceEndDate}</td>
                            <td>{item.location}</td>
                            <td>{item.regNo}</td>
                           
                        </tr>
                    ))} */}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default UserCarList