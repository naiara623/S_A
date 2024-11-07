import './Tela_Perfil.css'

function Perfil() {
  return (
    <div className='body-perfil'>
      <div className="abacaxi">
        <div className="image-container">
            <img src="https://labes.inf.ufes.br/wp-content/uploads/sem-foto.jpg" alt="Descrição da Imagem" />
        </div>
        <div className="text-container">
            <h2>Nome Completo</h2>
            <h4>INFORMAÇÕES DE CONTATO</h4>
            <p>Telefone: (00) 0000-0000</p>
            <p>Email: email@gmail.com</p>

            <div className="Descrição">
              <h5>Breve Descrição Profissional</h5>
            </div>

            &nbsp;{/* <br> */}

            <div className="Detalhes">
                <h5>Detalhes revelantes sobre as necessidades do usuario</h5>
            </div>
            

        </div>
     </div>

    </div>
  )
}

export default Perfil