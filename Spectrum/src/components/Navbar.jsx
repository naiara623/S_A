
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from './Modal';
// import styled from 'styled-components';


function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
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
          {/* <StyledWrapper>
          <div className="group">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
              <g>
                <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
              </g>
            </svg>
            <input id="query" className="input" type="search" placeholder="Search..." name="searchbar" />
          </div>
        </StyledWrapper> */}
        
            {/* <img src="lupa.png" alt="lupa de pesquisa" className='lupa'/>
              <input type="text" className='input-busca' />
              <img src="X.png" alt="deletar texto"  className='X'/>  */}
          </div>

          <div className='div-menu'>

          <button className='modal' onClick={openModal}><img src="Menu.png" alt="" className='menu' /></button>
<Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
            
          

        </div>
   </nav>
  )
}

export default Navbar
