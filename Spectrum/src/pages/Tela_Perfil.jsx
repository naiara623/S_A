import Navbar from '../components/Navbar'
import './Tela_Perfil.css'

function Perfil() {
  return (
    <div className='body-perfil'>
          <Navbar />
          <div className='Verde'></div>

          <div className='Azul'>
                <div className='Vermelho'></div>
                <div className='Ciano'></div>

                <div className='Cinza'>
                  <img  className='foto-u' src="Samuel.png" alt="" />
                  <h1 className='nome'>Samuel Hernandes</h1>
                  <p className='idade'>Idade: 10 Anos</p>
                  <p className='genero'>Gênero: Masculino</p>
                </div>
          </div>

      <div className='Rosa'></div>

          <div className='Amarelo'>
            <div className='info'>
                <h2 className='info-contato'>INFORMAÇÕES DE CONTATO</h2>
                <div className='contato'>
                <label htmlFor="">Telefone: (00) 0000-0000</label>
                <label className='gmail' htmlFor="">Gmail: email@gmail.com </label>
                </div>
            </div>

            <div className='conteine-button'>
                <button className='butt-edi'>Editar</button> 
               <button className='butt-dele'>Deletar</button>
                </div>
           </div>

        <div className='Laranja'>
              <p className='detalhes'>DETALHES RELEVANTES SOBRE O USÚARIO:</p>
              <div className='marrom'>
                <label>Qual o nivelamento do seu TEA?</label><br />
                <label>Quando foi descorberto?</label><br />
                <label>Quais as suas maiores necessidades? </label><br />
                <label>Quais profissionais já o acompanham? </label><br />
                <label>Quais são seus interesses? </label><br />
                <label>Quais dificuldades já superou? </label><br />
                <label>Tem alguma comorbidade? </label> 
                </div>
        </div>

      <div className='Roxo'></div>

      <div className='Branco'></div>
     
     



        



    </div>
  )
}

export default Perfil