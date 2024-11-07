import React from 'react'
import './Tela_Profissional.css'

function Tela_Profissional() {
  return (
    <div>
    <div className='container-perfil-p'>
         <div className='image-container'>
        <img src="Gustavo Souza.jpg" alt="Foto de perfil do profissional Gustavo Souza" />
    </div>
    <div className='text-container-perfil-p'>
        <h2>Gustavo Souza</h2>
        <p className='profissão'>Pedagogia</p>
        <h4>INFORMAÇÕES DE CONTATO</h4>
        <p>Telefone: (48) 8865-1680</p>
        <p>Email: gustavo.souza@gmail.com</p>

        <div className='Descrição'>
            <p>Breve descrição profissional sobre Gustavo Souza</p>
        </div>
    </div>
    </div>
   
    </div>
  )
}

export default Tela_Profissional
