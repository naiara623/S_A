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
                <img className='foto-p' src="keisy.png" alt="" />
                <h1 className='nome'>Keisy Souza</h1>
                <p className='idade'>Idade: 10 Anos</p>
                <p className='genero'>Gênero: Femenino</p>
                </div>
          </div>

      <div className='Rosa'></div>

          <div className='Amarelo'>
                <h2 className='info-contato'>INFORMAÇÕES DE CONTATO</h2>
                <label className='telefone' htmlFor="">TELEFONE: (00) 0000-0000</label>
                <label className='gmail' htmlFor="">GMAIL: email@gmail.com </label>
                <button className='butt-edi'>Editar</button> 
                <button className='butt-dele'>Deletar</button>
          </div>

        <div className='Laranja'>
              <p className='detalhes'>DETALHES RELEVANTES SOBRE O USÚARIO:</p>
              <div className='marrom'>
                <label htmlFor="">Qual o nivelamento do seu TEA?<br />Quando foi descorberto?</label><br />
                <label htmlFor="">Quais as suas maiores necessidades? </label><br />
                <label htmlFor="">Quais profissionais já o acompanham? </label><br />
                <label htmlFor="">Quais são seus interesses? </label><br />
                <label htmlFor="">Quais dificuldades já superou? </label><br />
                <label htmlFor="">Tem alguma comorbidade? </label> 
                </div>
        </div>

      <div className='Roxo'></div>

      <div className='Branco'></div>
     
     



        



    </div>
  )
}

export default Perfil