
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from './Modal';
import BarraDePesquisa from './BarraDePesquisa';
// import styled from 'styled-components';


function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  const items = [
    'Gustavo Souza',
    'Milena Bairro',
    'Luciana Bittencourt',
    'Lilia Bittencourt',
    'Wanda Bairro',
    'Aghata Souza',
    'James Souza',
    'Keisy Cristina',
  ];
  return (
    <nav>
        <div className='containe'>

          <div className='logo_div'>
            <img className='Logo_Spec' src="logo spectrum.png" alt="Logo Spectrum" /> 
          </div>

          <div className='inic-espec'>
            <Link to={"/telaprincipal"} className='inicio'>INICIO</Link>      
            <Link to={"/perfildeprofissional"} className='especialistas'>ESPECIALISTAS</Link>
          </div>

          <div className='buscar'>
          <div className="App">
      <BarraDePesquisa items={items} /> 
    </div>
          
          </div>

          <div className='div-menu'>
          <button onClick={openModal}><img src="menu-.png" alt="Botão menu" /></button>
<Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
            
          

        </div>
   </nav>
  )
}

export default Navbar
