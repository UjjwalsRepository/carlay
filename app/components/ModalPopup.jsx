"use client"
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalPopup() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch static backdrop modal
      </Button> */}
      <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
        size="xl"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            Custom Modal Styling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <h1 className='text-2xl font-bold'>Carlay Assured Cars</h1>
              <p>At Carlay assured we offer top-notch used cars that are as good as new. We carefully select each car
for its quality and refurbish them to meet our standards. These cars are thoroughly inspected and
completely serviced by our expert team, so do not be concerned about maintenance related expenses
for the first year.</p>
        </Modal.Body>
        <Modal.Body>
        <h1 className='text-2xl font-bold'>Park and sell Cars (Direct Customer’s car)</h1>
              <p>
              Experience our curated selection of pre-owned retail vehicles parked at our facility. We offer a range
of makes and models, all meticulously inspected and ready for a new owner. We guarantee inspection
review, documentation assistance and unmatched prices in the used car market.
              </p>
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-success" onClick={handleClose}>LETS FIND A CAR FOR YOU</button>
        </Modal.Footer>
      </Modal>

     
    </>
  );
}

export default ModalPopup;