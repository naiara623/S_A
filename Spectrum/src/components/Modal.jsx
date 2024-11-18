import React from 'react'
import './Modal.css'
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>
      <h2>Este é o Modal!</h2>
      <p>Você pode colocar qualquer conteúdo aqui.</p>
    </div>
  </div>
  )
}

export default Modal
