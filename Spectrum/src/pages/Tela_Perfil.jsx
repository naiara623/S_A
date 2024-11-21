import Navbar from '../components/Navbar'
import './Tela_Perfil.css'

function Perfil() {
  return (
    <div className='body-perfil'>
       <Navbar/>

     <div className='azul'></div>

     <div className='laranja'>

          <div className='containe_um'>
             <img className='keisy' src="keisy.png" alt="" />
             <div className='blak'></div>
            
                <div className='Informações'>
                  <label htmlFor="">Nome:</label><br />
                  <label htmlFor="">Idade:</label><br />
                  <label htmlFor="">Gênero:</label><br />
                  <label htmlFor="">Email:</label><br />
                  <label htmlFor="">Número:</label><br />

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