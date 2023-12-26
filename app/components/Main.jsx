"use client"
import Image from "next/image";
import Link from "next/link";
import { Button, Col, Row } from "react-bootstrap";

const Main = () => {
    return (
        <>
            <Row className="h-auto">
                <Col lg="6" md="6" sm="12">
                    <div className="da relative flex flex-row justify-center overflow-hidden my-14">
                        <div className="absolute inset-0 bg-center"></div>
                        <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                <img src="/images/buy.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                            </div>
                            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out">
                            <Link href="/carlist">
                                <button className="btn bg-blue-900 text-white hover:bg-blue-900">Buy A Car</button>{' '}
                            </Link>
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg="6" md="6" sm="12">
                <div className="da relative flex flex-row justify-center overflow-hidden my-14">
                        {/* <div className="absolute inset-0 bg-center"></div> */}
                        <div className="group relative m-0 flex h-72 w-96 rounded-xl shadow-xl ring-gray-900/5 sm:mx-auto sm:max-w-lg">
                            <div className="z-10 h-full w-full overflow-hidden rounded-xl border border-gray-200 opacity-80 transition duration-300 ease-in-out group-hover:opacity-100 dark:border-gray-700 dark:opacity-70">
                                <img src="/images/sell.jpg" className="animate-fade-in block h-full w-full scale-100 transform object-cover object-center opacity-100 transition duration-300 group-hover:scale-110" alt="" />
                            </div>
                            <div className="absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 z-20 m-0 pb-4 ps-4 transition duration-300 ease-in-out ">
                            <Link href="/addcar">
                                <button className="btn bg-blue-900 text-white hover:bg-blue-900">Sell Your Car</button>{' '}
                            </Link>
                            
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
       
    );
}

export default Main;