"use client"
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { GrUserExpert } from "react-icons/gr";
const WhoWeWre = () => {
  return (
    <>
        <Row className="h-auto border-y border-slate-500">
            <Col lg="4" md="4" sm="6" className="">
                <div className="m-auto flex justify-center gap-2 p-5">
                    <GrUserExpert style={{fontSize:"32px"}} className="text-blue-900"/>
                    <h1 className='font-bold text-blue-900'>Expertise You Can Trust</h1>
                </div>
            </Col>
           
            <Col lg="4" md="4" sm="6" className="">
                <div className="m-auto flex justify-center gap-2 p-5">
                    <GrUserExpert style={{fontSize:"32px"}} className="text-blue-900"/>
                    <h1 className='font-bold text-blue-900'>Customer-Centric Approach</h1>
                </div>
            </Col>
            <Col lg="4" md="4" sm="6" className="">
                <div className="m-auto flex justify-center gap-2 p-5">
                    <GrUserExpert style={{fontSize:"32px"}} className="text-blue-900"/>
                    <h1 className='font-bold text-blue-900'>Transparency and Integrity</h1>
                </div>
            </Col>
        </Row>
    </>
  )
}

export default WhoWeWre