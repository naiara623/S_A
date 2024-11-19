import React from 'react'
import './Modal.css'
import { Link } from 'react-router-dom'
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h2></h2>
     <button><Link to={"/perfildeusuario"}>Ver Perfil</Link></button> 
     <button><Link to={"/perfildeusuario"}></Link></button> 
     <button><Link to={"/perfildeusuario"}></Link></button> 
    </div>
  </div>
  )
}

export default Modal
