import React from "react";
import Navbar from '../components/Navbar';
import './Tela_Principal.css'

// import Slider from 'react-slick';
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css"; 

function Tela_Principal() {

  // const images = [
    
  //   "./img/FRASE.png",
  //   "./img/frase2.png",
  //   "./img/frase3.png",
 
  //  ]

  //  const settings = {
  //   dots: true, // Adiciona os pontinhos de navegação
  //   infinite: true, // Loop infinito no carrossel
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  // };
  return (
  <div className='Bore'>
        <Navbar/>

         <div className='carrossel'>
              <div className="div-carrossel">
                 <img className="carrossel_img" src="FRASES3.png" alt="" />
                  {/* <Slider {...settings}>
                            {images.map((image, index) => (
                             <div key={index}>
                              <img src={image} alt={`Slide ${index + 1}`} />
                              </div>
                                ))}
                            </Slider> */}
                </div>
         </div>

             <p className="TEXTOP">PROFISSIONAL</p>

          
              <div className='profissionais'>  

              
              
                      <div className="containe_profissional">
                           <img className="img-profissional" src="Milena Bairro.jpg" alt="" />
                              <p className="nome_Milena">Milena Bairro</p>
                             <h1 className="Nome_profissão">Neupsicopedagoga</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                        </div>

                        <div className="containe_profissional">
                            <img className="img-profissional" src="Gustavo Souza.jpg" alt="" />
                            <p className="nomes_Gustavo">Gustavo Souza</p>
                            <h1 className="Nome_profissão">Psicopedagoga</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                        </div>

                        <div className="containe_profissional">
                            <img className="img-profissional" src="Luciana Bittencourt.jpg" alt="" />
                            <p className="nomes_Luciana">Luciana Bittencourt</p>
                            <h1 className="Nome_profissão">Terapeuta Ocupacional</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                        </div>

                          <div className="containe_profissional">
                              <img className="img-profissional" src="Luciana Bittencourt.jpg" alt="" />
                              <p className="nomes_Lilia">Lilia Bittencourt</p>
                              <h1 className="Nome_profissão">Atendente Terapeutica</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                          </div>
                 
                              <div className="containe_profissional">
                                  <img className="img-profissional" src="Milena Bairro.jpg" alt="" />
                                  <p className="nomes_Wanda">Wanda Bairro</p>
                                  <h1 className="Nome_profissão">Fisioterapeuta</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                                </div>

                              <div className="containe_profissional">
                                  <img className="img-profissional" src="Gustavo Souza.jpg" alt="" />
                                  <p className="nomes_Aghata">Aghata Souza</p>
                                  <h1 className="Nome_profissão">Pscicologa</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                              </div>

                              <div className="containe_profissional">
                                  <img className="img-profissional" src="Gustavo Souza.jpg" alt="" />
                                  <p className="nomes_James">James Souza</p>
                                  <h1 className="Nome_profissão">Terapeuta</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                              </div>

                              <div className="containe_profissional">
                                  <img className="img-profissional" src="Gustavo Souza.jpg" alt="" />
                                  <p className="nomes_Keisy">Keisy Cristina</p>
                                  <h1 className="Nome_profissão">Psiquiatra</h1>
                             <button className="Button_profissional" >Entre em contato</button>
                              </div>
                        

          </div>
  </div>
                
                
  )
}

export default Tela_Principal