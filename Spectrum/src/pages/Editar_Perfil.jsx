import React from 'react'
import './Editar_Perfil.css'

function Editar_Perfil() {
  return (
    <div>
        <div className="w">
            <h1 className='titulo'>Edite seu perfil!</h1>

            <div className="inputk">
        <label className="l11">Nome de usuário</label>
        <input autoComplete="off" name="text" id="text" className="a" type="text" placeholder='Nome Completo' />
        <div /></div>  
        <br /><br />
        <div className="inputk">
        <label className="label1">Email</label>
        <input autoComplete="off" name="Email" id="Email" className="a" type="Email" placeholder='seu.email@gmail.com'/>
        <div /></div><br /><br />
        <div className="inputk">
        <label className="label1">Telefone</label>
        <input autoComplete="off" name="Email" id="password" className="a" type="password" placeholder='(00) 000000000'/>
        <div /></div>

        <div className="input-descrição">
       
        <input autoComplete="off" name="Email" id="password" className="des" type="password" placeholder='Breve descrição do Usuario'/>
        <div /></div>


      <button className="editar">Confirmar</button>
        </div>
     
    </div>
  )
}

export default Editar_Perfil
