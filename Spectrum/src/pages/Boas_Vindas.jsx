import './Boas_Vindas.css'
function Boas_Vindas() {
  
  return (
    <div className='Body'>
      <nav className='navbar'>

        <img src="logo spectrum.png" alt="Logo do site" />

            <button className='Button'>Entrar</button>
            <button className='Button'>Cadastrar-se</button>

      </nav>
     
     <h1>SEJA BEM VINDO <br /> AO ESPECTRUM!</h1>

     <hr />

      <div className='img-section'>

     <p>&nbsp;&nbsp;&nbsp;O nosso projeto se faz útil para pessoas que tenham ou <br /> conheçam
            pessoas com TEA (Transtorno do Espectro Autista). <br /> 
            Buscamos fazer um lugar acolhedor com informações,
            dicas <br /> e profissionais qualificados. 
            Tudo foi feito com base em fontes <br /> confiáveis, 
            principalmente o DSM-5 (Manual Diagnóstico <br /> e Estatístico de
            Transtornos Mentais 5.ª edição). Usado <br /> por diversos profissionais 
            da saúde e da educação, <br /> como: psicólogos, fonoaudiólogos, médicos, 
            terapeutas <br /> ocupacionais e psicopedagogos. 
            O nosso projeto tem <br /> fundamentalmente o objetivo de ajuda 
            a trazer uma vida <br /> mais confortável ás pessoas atípicas, que 
            se fazem tão <br /> presentes e essenciais em nossa sociedade.</p>
     
        <img src="https://i.pinimg.com/564x/31/39/79/313979331e10d6f9e4bde5e7e701d8ac.jpg" alt="Carrosel sobre autismo" />

      </div>

     
    </div>
  )
}

export default Boas_Vindas
