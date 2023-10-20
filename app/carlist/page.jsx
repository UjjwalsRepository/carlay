"use client"
import React,{useState,useEffect} from 'react';
import Image from 'next/image';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';
import CarCard from './CarCard';
import Link from 'next/link';
import ModalPopup from '../components/ModalPopup';
import { Button, Col, Row } from 'react-bootstrap';
// import fetchCars from '@/utils'
const Page = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const carData=[
        {make:"Maruti",variantname:"Swift",serialnumber:"0",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Maruti",variantname:"Baleno",serialnumber:"1",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Maruti",variantname:"Baleno",serialnumber:"2",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Maruti",variantname:"Baleno",serialnumber:"3",manufacturingyear:"2020",kilometer:"20000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Hyundai",variantname:"Creta",serialnumber:"4",manufacturingyear:"2021",kilometer:"30000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Hyundai",variantname:"Creta",serialnumber:"5",manufacturingyear:"2021",kilometer:"30000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Hyundai",variantname:"Creta",serialnumber:"6",manufacturingyear:"2021",kilometer:"30000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Tata",variantname:"Harriar",serialnumber:"7",manufacturingyear:"2021",kilometer:"35000",transmission:"Manual",fueltype:"Diesel"},
        {make:"MG",variantname:"Hector",serialnumber:"8",manufacturingyear:"2019",kilometer:"40000",transmission:"Automatic",fueltype:"Petrol"},
        {make:"Kia",variantname:"Sonet",serialnumber:"9",manufacturingyear:"2020",kilometer:"34000",transmission:"Manual",fueltype:"CNG"},
        {make:"Kia",variantname:"Sonet",serialnumber:"10",manufacturingyear:"2020",kilometer:"34000",transmission:"Manual",fueltype:"CNG"},
        {make:"Kia",variantname:"Sonet",serialnumber:"11",manufacturingyear:"2020",kilometer:"34000",transmission:"Manual",fueltype:"CNG"},
        {make:"Mahindra",variantname:"700",serialnumber:"12",manufacturingyear:"2022",kilometer:"10000",transmission:"Automatic",fueltype:"Diesel"},
        {make:"Toyota",variantname:"Fortuner",serialnumber:"13",manufacturingyear:"2017",kilometer:"85000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Toyota",variantname:"Fortuner",serialnumber:"14",manufacturingyear:"2017",kilometer:"85000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Toyota",variantname:"Fortuner",serialnumber:"15",manufacturingyear:"2017",kilometer:"85000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Ford",variantname:"Ecosport",serialnumber:"16",manufacturingyear:"2016",kilometer:"100000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Renault",variantname:"Duster",serialnumber:"17",manufacturingyear:"2015",kilometer:"90000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Nissan",variantname:"Magnite",serialnumber:"18",manufacturingyear:"2022",kilometer:"25000",transmission:"Automatic",fueltype:"Petrol"},
        {make:"Skoda",variantname:"Kusaq",serialnumber:"19",manufacturingyear:"2021",kilometer:"38000",transmission:"Manual",fueltype:"Diesel"},
        {make:"Honda",variantname:"City",serialnumber:"20",manufacturingyear:"2020",kilometer:"75000",transmission:"Manual",fueltype:"Petrol"},
        {make:"Jeep",variantname:"Compass",serialnumber:"21",manufacturingyear:"2019",kilometer:"65000",transmission:"Automatic",fueltype:"Petrol"},
    ]
    const [carList,setCarList]=useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal,setShowModal]=useState(true);
    // useEffect(()=>{
    //     const fetchCars=async()=>{
    //         const options = {
    //             method: 'GET',
    //             url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
    //             params: {model: 'corolla'},
    //             headers: {
    //               'X-RapidAPI-Key': '62daf8cccamshc62096f7d242834p1d144djsna1486c849c4e',
    //               'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    //             }
    //           };
              
    //           try {
    //               const response = await axios.request(options);
    //               setCarList(response.data);
    //           } catch (error) {
    //               console.error(error);
    //           }
    //     }

    //     fetchCars()
       
    // },[])
    
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };
      const filteredData = carData.filter((item) =>
      item.variantname.toLowerCase().includes(searchTerm.toLowerCase())
    );

   console.log("CarList",carList)
    return (
        <>
        <ModalPopup/>
        <Row className="flex w-full">
            <Col lg="4" md="4" sm="6">
            <input 
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={searchTerm}
                onChange={handleSearchChange}
                name="variantname"
                placeholder='Search Variant name'
                />
            </Col>
            </Row>
        <div className="min-h-screen flex justify-center items-center py-20">
            <div className="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
           
                {filteredData?.map((item, index) => (
                    <div key={index}>
                    <Link href={`/cardlist/${index}`}>
                        <CarCard
                            
                            variant={item.variantname}
                            serial={item.serialnumber}
                            mfg={item.manufacturingyear}
                            km={item.kilometer}
                            transmission={item.transmission}
                            fuel={item.fueltype} />
                    </Link>
                    </div>
                ))}

            </div>
        </div>
       
        </>
    );
}

export default Page;