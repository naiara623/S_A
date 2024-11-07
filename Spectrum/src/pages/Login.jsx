import './Login.css'

function Login() {
  return (
    <div>
       <div className='container-1'>

<div className='container'>
<h2 className='kk'>Login</h2>

  <div className="inputs">
  <div className="inputBox">
        <input placeholder="seu.email@gmail.com" type="text" required />
        <span>Nome de Usuário ou Email</span>
      </div>
      <br /><br />
      <div className="inputBox">
        <input placeholder="Minimo 5 Caracteres" type="passaword" required />
        <span>Senha</span>
      </div>
  </div>


<br /><br />
<button className='button'>Entrar</button>
<br /><br />

<div className="entrar">
  <h4 className='tim'>não tem conta? Cadastrar</h4> 

<h4 className='tim1'>Esqueceu a senha? Modificar</h4>
</div>

</div>
</div>
    </div>
  )
}

export default Login
