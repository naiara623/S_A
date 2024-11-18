import React from 'react'
import './Modal.css'
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>
      <p>Perfil</p>
      <p>Estrategias</p>
      <p>Informações</p>
    </div>
  </div>
  )
}

export default Modal
