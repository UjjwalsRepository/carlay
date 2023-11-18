import React from 'react'

const page = () => {
    return (
        <>
            <section className="relative pb-8 " style={{ height: "750px" }}>
                <div>
                    <img src="/images/slider4.jpeg"
                        className="absolute top-0 bottom-0 left-0 right-0 object-cover w-full h-full" alt="" />
                    <div className="absolute top-0 bottom-0 left-0 right-0 flex items-center holder bg-gray-900/75">
                        <div className="z-10 max-w-5xl px-4 mx-auto text-center">
                            {/* <span className="text-xs font-semibold text-blue-400 uppercase">Knowledge is power</span> */}
                            <h2
                                className="mt-2 mb-4 text-3xl font-bold leading-tight text-white md:text-4xl md:leading-tight lg:text-7xl lg:leading-tight g">
                                ABOUT US
                            </h2>
                            <p className="mb-8 text-base leading-8 text-gray-400 lg:text-xl">
                                Welcome to CarLay Autos, your destination for premium pre-owned vehicles in Pune, Maharashtra.
                                At CarLay Autos, we understand that finding the perfect pre-owned vehicle can be a significant
                                decision. That&#39;s why we&#39;re dedicated to providing a seamless and exceptional car buying experience.
                                With a commitment to quality, transparency, and customer satisfaction, we stand out as a trusted
                                name in the automotive industry.</p>
                            {/* <a className="block px-5 py-3 text-sm font-semibold text-center text-indigo-500 transition duration-200 bg-white border border-white rounded md:inline-block hover:bg-indigo-50 hover:border-indigo-50"
                        href="#"> Learn More </a> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* <div className="grid grid-cols-1 lg:grid-cols-4  relative mt-0 lg:-mt-[90px]  z-10  rounded"> */}
            <div className="relative mt-0 lg:-mt-[90px]  z-10  rounded">
                <div className="w-full p-8 mb-10 text-center transition-all bg-blue-900 opacity-2 shadow lg:mb-4">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-8 h-8 text-blue-700 bi bi-people" viewBox="0 0 16 16">
                            <path
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">Our Philosophy</h2>
                    <p className="text-base text-gray-300 dark:text-gray-300">
                        Our philosophy is simple yet effective - to offer our customers a curated selection of premium pre-
                        owned vehicles that exemplify quality, reliability, and style. Each vehicle in our inventory undergoes a
                        rigorous inspection process to ensure it meets our high standards. This meticulous approach allows us
                        to present you with vehicles that not only look great but also perform exceptionally well.
                    </p>
                </div>
                <div className="w-full p-8 mb-10 text-center transition-all bg-red-900 shadow lg:mb-4 ">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-8 h-8 text-red-700 bi bi-book" viewBox="0 0 16 16">
                            <path
                                d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811V2.828zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">Expertise You Can Trust</h2>
                    <p className="text-base text-gray-300 dark:text-gray-300">
                        Backed by a team of automotive experts with years of experience, we possess in-depth knowledge
                        about the industry, enabling us to handpick vehicles that align with your desires and preferences.
                        Whether you&#39;re in the market for a sleek sedan, a rugged SUV, or a family hatchback, our dedicated
                        team is here to assist you every step of the way.
                    </p>
                </div>
                <div className="w-full p-8 mb-10 text-center transition-all bg-blue-900 shadow lg:mb-4 ">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-8 h-8 text-blue-700 bi bi-hdd-rack" viewBox="0 0 16 16">
                            <path
                                d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                            <path
                                d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                        </svg> */}
                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-8 h-8 text-blue-700 bi bi-people" viewBox="0 0 16 16">
                            <path
                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">Customer-Centric Approach</h2>
                    <p className="text-base text-gray-300 dark:text-gray-300">
                        At CarLay Autos, we put our customers first. We understand that your needs and expectations are
                        unique, which is why we take the time to listen and provide personalized solutions. Our friendly and
                        knowledgeable staff is always ready to answer your questions, offer advice, and guide you towards
                        the perfect vehicle that fits your lifestyle.
                    </p>
                </div>
                <div className="w-full p-8 mb-10 text-center transition-all bg-red-900 shadow lg:mb-4 ">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-8 h-8 text-red-700 bi bi-mortarboard " viewBox="0 0 16 16">
                            <path
                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                            <path
                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">Transparency and Integrity</h2>
                    <p className="text-base text-gray-300 dark:text-gray-300">
                        We believe in full transparency throughout the buying process. You can trust that the information
                        provided about each vehicle is accurate and comprehensive. From vehicle history reports to detailed
                        specifications, we ensure you have all the necessary information to make an informed decision.
                    </p>
                </div>
                <div className="w-full p-8 mb-10 text-center transition-all bg-blue-900 shadow lg:mb-0 ">
                    <div className="inline-block p-4 mb-6 -mt-16 bg-gray-100 rounded-full">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                            className="w-8 h-8 text-blue-700 bi bi-hdd-rack" viewBox="0 0 16 16">
                            <path
                                d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zM3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm2 7a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2.5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z" />
                            <path
                                d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h1v2H2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2h-1V7h1a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm0 7v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-3-4v2H4V7h8z" />
                        </svg>
                    </div>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-100 dark:text-white">Visit Us Today</h2>
                    <p className="text-base text-gray-300 dark:text-gray-300">
                        Discover the difference at CarLay Autos. Visit our showroom in wadgaon Sheri Pune, Maharashtra,
                        and explore our exquisite range of premium pre-owned vehicles. Whether you&#39;re a seasoned car
                        enthusiast or a first-time buyer, we&#39;re here to make your car buying experience a memorable one.
                        add map location and address below this section.
                    </p>
                </div>

            </div>
        </>
    )
}

export default page