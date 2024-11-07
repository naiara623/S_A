import './Cadastro.css'

function Cadastro() {
  return (
    <div className='body'>
      <div className='Conteiner-1'></div>
      <div className='Container'>
         <center> 
             <h1 className='escrita'>Cadastro</h1>
           
           <br /><br />

           <div className="inputs">
            <div className="input-group">
        <label className="label">Nome de Usuário</label>
        <input autoComplete="off" name="text" id="text" className="input" type="text" placeholder='Nome Completo'/>
        <div />
        <br />
           </div>
           <div className="input-group">
        <label className="label1">E-mail</label>
        <input autoComplete="off" name="Email" id="Email" className="input" type="email" placeholder='seu.Email@gmail.com'/>
        <div />
           </div>
           <br />
           <div className="input-group">
        <label className="label1">Senha</label>
        <input autoComplete="off" name="Email" id="Email" className="input" type="password" placeholder='Minimo: 5 Caracteres'/>
        <div />
           </div>
           
           </div>
      <br />

      &nbsp;&nbsp;&nbsp;
        <div className='radios'>
            <div className='radio11'>
                <label className='radio-button'>
                    <input type="radio" id='radioum' name='radio-group' />
                    <span className='radio-checkmark' ></span>
                    <span className='radio-label'>Sou TEA</span>
                </label>
            </div>

            <div className='radio1'>
                <label className='radio-button'>
                    <input type="radio" id='radioDois' name='radio-group' />
                    <span className='radio-checkmark' ></span>
                    <span className='radio-label'>Sou responsável</span>
                </label>

            </div>

            <div className='radio2'>
                <label className='radio-button'>
                    <input type="radio" id='radioQuatro' name='radio-group' />
                    <span className='radio-checkmark' ></span>
                    <span className='radio-label'>Tenho interesse</span>
                </label>

            </div>

            <div className='radio2'>
                <label className='radio-button'>
                    <input type="radio" id='radioCinco' name='radio-group' />
                    <span className='radio-checkmark' ></span>
                    <span className='radio-label'>Sou profissional</span>
                </label>
            </div>     
        </div>
  <button className='oi'>Cadastrar</button>
        <br /><br />
         
         <div className="Logar">

         <div className="termos">

          <input type="checkbox" id="cbx2" style={{ display: "none" }} />
        <label htmlFor="cbx2" className="check">
          <svg width="18px" height="18px" viewBox="0 0 18 18">
            <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
            <polyline points="1 9 7 14 15 4" />
          </svg> &nbsp; li e aceito os Termos de uso
        </label>
          </div>
        <h4>Já tem conta? Entrar</h4> 

         </div>
        </center> 
      </div>
    </div>
  )
}

export default Cadastro
