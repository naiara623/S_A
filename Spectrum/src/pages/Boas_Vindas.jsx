import { Link } from 'react-router-dom'
import './Boas_Vindas.css'
function Boas_Vindas() {
  
  return (
    <div className='tela-boasvindas'>
      <nav className='navbar-boasvindas'>

        <img className='imglogo-boasvindas' src="logo spectrum.png" alt="Logo do site" />

            <button className='button-boasvindas'>Entrar</button>
            <button className='button-boasvindas'>Cadastrar</button>
          
      </nav>

      
     <h1 className='sejabemvindo'>SEJA BEM VINDO <br /> AO SPECTRUM!</h1>
     <hr />

      <div className='img-section-boasvindas'>

     <p className='tea-boasvindas'>&nbsp;&nbsp;&nbsp;O nosso projeto se faz útil para pessoas que tenham ou <br /> conheçam
            pessoas com TEA (Transtorno do Espectro Autista). <br /> 
            Cria um espaço seguro e informativo para pessoas com TEA <br />
            e seus familiares. O conteúdo é baseado em pesquisas<br /> científicas  
            e conta com a colaboração de profissionais <br />especializados. 
            O objetivo  principal é melhorar a qualidade<br /> de vida das pessoas 
            com TEA,  proporcionando apoio e <br /> recursos necessários.</p>
     
        <img className='img-crianca-boasvindas' src="https://i.pinimg.com/564x/31/39/79/313979331e10d6f9e4bde5e7e701d8ac.jpg" alt="Carrosel sobre autismo" />

      </div>

     
    </div>
  )
}

export default Boas_Vindas