import Navbar from '../components/Navbar'
import './Tela_Perfil.css'

function Perfil() {
  return (
    <div className='body-perfil'>
      <Navbar />

      <div className='azul'></div>

      <div className='laranja'>

        <div className='containe_um'>
          <img className='keisy' src="keisy.png" alt="" />

          <button className='botperfil'></button>
          
          <div className='blak'></div>
          <div className='Informações'>
            <p className='sobre-mim'>Sobre mim</p>
            <br />
            <label className='info'>Nome:</label><br />
            <label className='info'>Idade:</label><br />
            <label className='info'>Gênero:</label><br />
            <label className='info'>Email:</label><br />
            <label className='info'>Número:</label><br />

            <div className='kkk'></div>
          </div>
        </div>

        <div className='containe_dois'></div>

        <div className='containe_três'></div>
      </div>


      <div className='Verde'></div>

    </div>
  )
}

export default Perfil