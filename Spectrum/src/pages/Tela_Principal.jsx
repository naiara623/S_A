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

        <div className='carrocel'>

                <div className="test">


                   <img className="carrocel_img" src="frase3.png" alt="" />
                    {/* <Slider {...settings}>
                                {images.map((image, index) => (
                                  <div key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                  </div>
                                ))}
                              </Slider> */}
                </div>
        </div>
             
              <div className='profissionais'>
              <p className="TEXTOP">PROFISSIONAL</p>
                 <div className="containe_profissional1">
                    <img className="img-profissional" src="Milena Bairro.jpg" alt="" />
                     <p className="nomes">Milena Bairro</p>
                 </div>
                 <div className="containe_profissional2">
                 <img className="img-profissional" src="Gustavo Souza.jpg" alt="" />
                 <p className="nomes">Gustavo Souza</p>
                 </div>
                 <div className="containe_profissional3">
                 <img className="img-profissional" src="Luciana Bittencourt.jpg" alt="" />
                 <p className="nomes">Luciana Bittencourt</p>
                 </div>
              </div>
     </div>
  )
}

export default Tela_Principal