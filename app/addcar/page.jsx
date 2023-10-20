"use client"
import React,{useEffect, useState} from 'react'
import { Country, State, City }  from 'country-state-city';
import { ICountry, IState, ICity } from 'country-state-city';
import Select from "react-select";
import MultiFileUploadForm from '../components/MultiFileUploadForm';
import { Col, Row } from 'react-bootstrap';
const initialValues = {
    manufacturer : "",
    variantname: "",
    eom: "",
    kilometer: "",
    city: "",
    location: ""
  };
const Page = () => {

    const [values,setValues]=useState(initialValues);

    const country=Country.getAllCountries()
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const manufactures=["Maruti suzuki","Hyundai","Tata","Honda","Toyota","Mahindra","Skoda","Volkswagen","Isuzu","Nissan",'Jeep',"MG", "BMW","Audi","Mercedes", "Others"]
   const indianStates = [
  'Andaman and Nicobar Islands',
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chandigarh',
  'Chhattisgarh',
  'Dadra and Nagar Haveli and Daman and Diu',
  'Delhi',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jammu and Kashmir',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Ladakh',
  'Lakshadweep',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Puducherry',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal'
];
const fuelType=["Diesel","Petrol","CNG"]
const transmission=["Automatic","Manual"]
    const handleInputChange = (e) => {
        //const name = e.target.name 
        //const value = e.target.value 
        const { name, value } = e.target;
    
        setValues({
          ...values,
          [name]: value,
        });
      };

      const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(values);
      }

    useEffect(() => {
        console.log(selectedCountry);
        console.log(selectedCountry?.isoCode);
        console.log(State?.getStatesOfCountry(selectedCountry?.isoCode));
      }, [selectedCountry]);
    
     
  return (
    <>
        <section className="m-6 rounded-md shadow-lg ">
            <div className='bg-sky-300 rounded-t-md'>

    <h1 className="text-xl  text-black capitalize dark:text-black text-center">Your trusted partner for Buy/Sell premium pre-owned cars.</h1>
    <p className="text-xl py-2 text-black capitalize dark:text-black text-center">We sincerely believe that our customer shall be really happy with our offered services.</p>
            </div>
    <h1 className="text-xl font-bold text-black px-4 py-2 capitalize dark:text-white">Please fill the form with correct information and we shall revert shortly.</h1>

    <form onSubmit={handleSubmit}>
        <Row className="flex w-full p-6">
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Select Manufacturer *</label>
                <select name="manufacturer" value={values.manufacturer} onChange={handleInputChange} className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {manufactures.map((item,index)=><option key={index}>{item}</option>)}
                </select>
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Variant name / Specific Model *</label>
                <input 
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                value={values.variantname}
                onChange={handleInputChange}
                name="variantname"
                placeholder='Enter variant name'
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Year of manufacture *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                
                type="date" 
                value={values.eom}
                onChange={handleInputChange}
                name="eom"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Ownership *</label>
                <select name="ownership" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                </select>
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Registered state *</label>
                <select name="ownership" className="block w-full  py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {indianStates.map((item,index)=><option key={index}>{item}</option>)}
                </select>
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Fuel Type *</label>
                <select name="ownership" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {fuelType.map((item,index)=><option key={index}>{item}</option>)}
                </select>
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Transmission *</label>
                <select name="ownership" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                {transmission.map((item,index)=><option key={index}>{item}</option>)}
                </select>
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Accidental *</label>
                <select name="ownership" className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md  dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>YES</option>
                <option>NO</option>
                </select>
            </Col>
            
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Insurance *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                name="insurance"
                />
            </Col>
            
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Kilometer Reading *</label>
                <input 
                className="block w-full py-2 px-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="text"
                value={values.kilometer}
                onChange={handleInputChange}
                name="kilometer"
                placeholder='Enter kilometer reading'
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Front Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Rightside Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Leftside Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Rear Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Dashboard Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Seat Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Odometer Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >RC Pic *</label>
                <input 
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type="file"
                name="front"
                />
            </Col>
            <Col lg="4" md="4" sm="6" className='mb-3'>
                <label className="text-black font-medium" >Your Expected Price *</label>
                <input 
                className="block w-full px-2 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md   dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                type='number'
                placeholder='Enter your expected peice'
                />
            </Col>
        </Row>

        <div className="flex justify-end mt-6">
            <button type="submit" className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">Save</button>
        </div>
    </form>
    
</section>
    </>
  )
}

export default Page