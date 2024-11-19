
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
<<<<<<< HEAD

          <button className='modal' onClick={openModal}><img src="Menu.png" alt="" className='menu' /></button>
=======
          <button onClick={openModal}><img src="menu-.png" alt="" className='menu' /></button>
>>>>>>> 1d6dc16769ab7a9f6de42b0cb827f589d7ca6a76
<Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
            
          

        </div>
   </nav>
  )
}

export default Navbar
