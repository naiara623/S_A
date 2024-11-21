import './Login.css'

import { Link } from 'react-router-dom'
import '../index.css'
function Login() {
  return (
    <div className='body-login'>
        <div className='container-1'>

<div className='container4'>
<h2 className='kk'>Login</h2>

<div className="input-group">
        <label className="label">Nome de usuário ou Email</label>
        <input autoComplete="off" name="text" id="text" className="input" type="e-mail" placeholder='se.email@gmail.com ou Nome Completo'/>
        <div /></div>  
        <br /><br /><br />
        <div className="input-group">
        <label className="label">Senha</label>
        <input autoComplete="off" name="Email" id="password" className="input" type="password" placeholder='Minimo 5 Caracteres'/>
        <div /></div>


<br /><br />
<button className='button'>Entrar</button>
<br /><br />

<div className="entrar">
  <h4 className='tim'>não tem conta? <Link to={"/cadastro"} className='Link'>Cadastrar</Link></h4> 

<h4 className='tim1'>Esqueceu a senha? </h4>
</div>

</div>

      </div>
 
    </div>
  )
}

export default Login
