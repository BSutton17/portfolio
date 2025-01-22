// Modal.js

import React from 'react';
import '../App.css';
import { MdPhonelinkErase } from "react-icons/md";

const Modal = ({ message, link, img, onClose, phone }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content">
        <div className='modal-img'><img src={img}/></div>
      <div className='text-wrapper'>
        <h3 className='modal-message'>{message} {phone && <MdPhonelinkErase /> }</h3>
        <a href={link} target="_blank" rel="noopener noreferrer"><button>View</button></a>
      </div>
      </div>
     
    </div>
  );
}

export default Modal;
