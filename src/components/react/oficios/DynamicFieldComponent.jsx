import React, { useState } from 'react';
import Modal from 'react-modal';
import './ModalComponent.css'

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

function updateDateTimeLink() {
  const now = new Date();
  const dateTimeString = now.toLocaleString();
  return dateTimeString;
}

function DynamicFieldComponent({ registers, slug}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const openModal = () => {
    setModalIsOpen(true);
  };
  const closeModal = () => {
    setModalIsOpen(false);
  };
  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Password Modal"
      >
        <h2>Digite seu PIN</h2>
        <input type="password" placeholder="PIN" className="password-field" />
        <button className="submit-button" onClick={closeModal}>Entrar</button>
      </Modal>
      {registers.map((item) => (
        <div key={item.odNumber}>
          <div className="mt-1" id="linkContainer">
            <a className="btn" target="_self">
              {slug.toUpperCase() + "-" + item.data + "-" + item.odNumber}
            </a>
            <input className="input-style" type="text" placeholder={""} />
            {/* <button className="open-button" onClick={openModal}>Salvar</button> */}
            <button
              className="open-button button-style"
              onClick={openModal}
            >
              Salvar
            </button>
          </div>
        </div>
      ))}
    </>
  );
}

export default DynamicFieldComponent;
