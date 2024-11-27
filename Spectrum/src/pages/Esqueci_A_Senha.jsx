import React, { useState } from 'react'
import './Esqueci_A_Senha.css'

function Esqueci_A_Senha() {

  const[mostrarSenha, setMostrarSenha] = useState(false) // Estado para controlar a visibilidade da senha

  const toggleSenha = () => {
    setMostrarSenha(!mostrarSenha); // Alterna o estado de visibilidade da senha
  };

  return (

    <div className='body-senha'>
      <div className='conteiner-senha'>                                                                                              
        <h1 className='modificar-s'>Modificar Senha</h1>
        <label>Digite sua nova senha</label>
        <input autoComplete="off" name="Email" id="password" className="input" type="password" placeholder='Minimo 5 Caracteres'/>
        <br /><br /><br />
    <div>
    <label htmlFor="senha">Senha:</label>
    <div>
      <input
      className="input"
        type={mostrarSenha ? 'text' : 'password'} // Se mostrarSenha for true, o tipo é 'text', caso contrário, 'password'
        id="senha"
        placeholder="Digite sua senha"
      />
      <span
        onClick={toggleSenha}
      >
        {mostrarSenha ?  <img className='hu' src="../visible.png" alt="Mostrar senha" /> : <img className='hu' src="../invisible.png" alt="Ocultar senha" />  } {/* Muda o ícone do olho */}
      </span>
    </div>
  </div> 

  <button className='b'>Continuar</button>
  </div>
    </div>
  )
}

export default Esqueci_A_Senha
