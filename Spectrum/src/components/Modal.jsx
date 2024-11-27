import React from 'react'
import './Modal.css'
import { Link } from 'react-router-dom'
function Modal({ isOpen, onClose }) {
    if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="close-btn" onClick={onClose}>X</button>

     <img className='foto' src="do-utilizador.png" alt="Ver Perfil" />
    <Link className='Link' to={"/perfildeusuario"}> Ver Perfil</Link>
    <br /><br />
    <img className='foto' src="icone-estrategia.png" alt="Estrategias" />
    <Link className='Link' to={"/estrategia1"}>Estrategias</Link>
    <br /><br />
    <img className='foto' src="icone-agendamento.png" alt="Agendamento" />
    <Link className='Link' to={"/calendario"}>Agendamentos</Link>
    <br /><br />
    <img className='foto' src="icone-configuração.png" alt="Configuração" />
    <Link className='Link' to={"#"}>Configurações</Link>

     

    </div>
  </div>
  )
}

export default Modal
