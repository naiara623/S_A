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
        <p className='telefone'>Telefone: (00) 0000-0000</p>
        <p className='gmail'>Email: email@gmail.com</p>
      </div>
      <div className='Laranja'></div>
      <div className='Roxo'></div>

      <div className='Branco'></div>
     
     



        



    </div>
  )
}

export default Perfil