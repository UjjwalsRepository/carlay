import React from 'react'

const Page = () => {
    return (
        <>
            <section className="relative  bg-blueGray-50">
                <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover" style={{ backgroundImage: "url('/images/slider4.jpeg');" }} >
                        <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                    </div>
                    <div className="container relative mx-auto">
                        <div className="items-center flex flex-wrap">
                            <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                <div className="pr-12">
                                    <h1 className="text-white font-semibold text-5xl">
                                        ABOUT US
                                    </h1>
                                    <p className="mt-4 text-lg text-white">
                                        Welcome to CarLay Autos, your destination for premium pre-owned vehicles in Pune, Maharashtra.
                                        At CarLay Autos, we understand that finding the perfect pre-owned vehicle can be a significant
                                        decision. That&#39;s why we&#39;re dedicated to providing a seamless and exceptional car buying experience.
                                        With a commitment to quality, transparency, and customer satisfaction, we stand out as a trusted
                                        name in the automotive industry.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" style={{ transform: "translateZ(0px)" }}
                    >
                        <svg className="abso}}lute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </div>
                <section className="pb-10 bg-blueGray-200 -mt-24">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Our Philosophy</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Our philosophy is simple yet effective - to offer our customers a curated selection of premium pre-
                                            owned vehicles that exemplify quality, reliability, and style. Each vehicle in our inventory undergoes a
                                            rigorous inspection process to ensure it meets our high standards. This meticulous approach allows us
                                            to present you with vehicles that not only look great but also perform exceptionally well.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Expertise You Can Trust</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Backed by a team of automotive experts with years of experience, we possess in-depth knowledge
                                            about the industry, enabling us to handpick vehicles that align with your desires and preferences.
                                            Whether you&#39;re in the market for a sleek sedan, a rugged SUV, or a family hatchback, our dedicated
                                            team is here to assist you every step of the way.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Customer-Centric Approach</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            At CarLay Autos, we put our customers first. We understand that your needs and expectations are
                                            unique, which is why we take the time to listen and provide personalized solutions. Our friendly and
                                            knowledgeable staff is always ready to answer your questions, offer advice, and guide you towards
                                            the perfect vehicle that fits your lifestyle.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                                            <i className="fas fa-award"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Transparency and Integrity</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            We believe in full transparency throughout the buying process. You can trust that the information
                                            provided about each vehicle is accurate and comprehensive. From vehicle history reports to detailed
                                            specifications, we ensure you have all the necessary information to make an informed decision.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                                            <i className="fas fa-retweet"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Visit Us Today</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Discover the difference at CarLay Autos. Visit our showroom in wadgaon Sheri Pune, Maharashtra,
                                            and explore our exquisite range of premium pre-owned vehicles. Whether you&#39;re a seasoned car
                                            enthusiast or a first-time buyer, we&#39;re here to make your car buying experience a memorable one.
                                            add map location and address below this section.
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                    <div className="px-4 py-5 flex-auto">
                                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-emerald-400">
                                            <i className="fas fa-fingerprint"></i>
                                        </div>
                                        <h6 className="text-xl font-semibold">Verified Company</h6>
                                        <p className="mt-2 mb-4 text-blueGray-500">
                                            Write a few lines about each one. A paragraph describing a
                                            feature will be enough. Keep you user engaged!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </section>

        </>
    )
}

export default Page