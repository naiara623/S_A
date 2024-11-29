import React from 'react'
import { Link } from 'react-router-dom'
import "./Boas_Vindas2.css"

function Boas_Vindas2() {
  return (
    <div>
        <nav className='bar'>

          <img src="logo spectrum.png" alt="Logo do site" />

          <Link className='anel'>Entrar</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <Link className='anel'>Cadastrar</Link>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </nav>

      <h1 className='sejabemvindo'>SEJA BEM VINDO <br /> AO ESPECTRUM!</h1>
    </div>
  )
}

export default Boas_Vindas2
