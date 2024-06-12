import React, { useState } from 'react';
import Modal from 'react-modal';

// Modal styles
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: '40px',
    borderRadius: '10px',
    border: 'none',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
};

const ModalComponent = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <button className="open-button" onClick={openModal}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Password Modal"
      >
        <h2>Enter Password</h2>
        <input type="password" placeholder="Enter your password" className="password-field" />
        <button className="submit-button" onClick={closeModal}>Submit</button>
      </Modal>
    </div>
  );
};

export default ModalComponent;
