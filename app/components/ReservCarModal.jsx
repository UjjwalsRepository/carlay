import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import emailjs from "@emailjs/browser"

const ReservCarModal = (props) => {

    // const sendEmail=(e)=>{
    //     e.preventDefault()
    // }

  return (
    <>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        RESERVE YOUR OWN CAR
        {/* <p>
            Just a few steps away from making your dream car a reality! Fill in a few details and we can begin the reservation…

        </p> */}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <span>Just a few steps away from making your dream car a reality! Fill in a few details and we can begin the reservation…</span>
      <form class="w-full max-w-sm mx-auto bg-white p-8 rounded-md shadow-md" >
        <p>PERSONAL INFORMATION</p>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="text" id="name" name="name" placeholder="John Doe"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="email">Email</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="email" id="email" name="email" placeholder="john@example.com"/>
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
          type="number" id="password" name="password" placeholder="+91-9876-54-32"/>
      </div>
     
      <button
        class="w-full bg-indigo-500 text-white text-sm font-bold py-2 px-4 rounded-md hover:bg-indigo-600 transition duration-300"
        type="submit">Submit</button>
    </form>
      </Modal.Body>
     
    </Modal>
    </>
  )
}

export default ReservCarModal