
"use client";

import { Button, Modal } from "flowbite-react";
import { useState } from "react";

export function ModalComponent({handleModalClose}) {
  const [openModal, setOpenModal] = useState(true);
  const modalCloseHandler=()=>{
    setOpenModal(false);
    handleModalClose(openModal)
  }

  return (
    <>
      <Modal show={openModal} onClose={modalCloseHandler}>
        <Modal.Header>Terms of Service</Modal.Header>
        <Modal.Body className="">
          <div className="space-y-6">
          <h1 className='text-xl font-bold'>Carlay Assured Cars</h1>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            At Carlay assured we offer top-notch used cars that are as good as new. We carefully select each car
            for its quality and refurbish them to meet our standards. These cars are thoroughly inspected and
            completely serviced by our expert team, so do not be concerned about maintenance related expenses
            for the first year.
            </p>
        <h1 className='text-xl font-bold'>Park and sell Cars (Direct Customer’s car)</h1>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Experience our curated selection of pre-owned retail vehicles parked at our facility. We offer a range
            of makes and models, all meticulously inspected and ready for a new owner. We guarantee inspection
            review, documentation assistance and unmatched prices in the used car market.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
