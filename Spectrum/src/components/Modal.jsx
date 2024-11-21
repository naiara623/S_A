import React from 'react'
import './Modal.css'
import { Link } from 'react-router-dom'
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>

    <Link className='Link' to={"/perfildeusuario"}>Ver Perfil</Link>
    <br /><br />
    <Link className='Link' to={"/estrategia1"}>Estrategias</Link>
    <br /><br />
    <Link className='Link' to={"#"}>Agendamentos</Link>
    <br /><br />
    <Link className='Link' to={"#"}>Configurações</Link>

     

    </div>
  </div>
  )
}

export default Modal
