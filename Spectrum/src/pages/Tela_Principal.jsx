import React from "react";
import Navbar from '../components/Navbar';
import './Tela_Principal.css'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"; 

function Tela_Principal() {

  const images = [
    
    "./img/FRASE.png",
    "./img/frase2.png",
    "./img/frase3.png",
 
   ]
 
   const settings = {
    dots: true, // Adiciona os pontinhos de navegação
    infinite: true, // Loop infinito no carrossel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className='Bore'>
        <Navbar/>

        <div className='carrocel'>
                <div className="test">
                    <Slider {...settings}>
                                {images.map((image, index) => (
                                  <div key={index}>
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                  </div>
                                ))}
                              </Slider>
                </div>
        </div>

              <div className='profissionais'>
                 <div className="containe_profissional1"></div>
                 <div className="containe_profissional2"></div>
                 <div className="containe_profissional3"></div>
              </div>
     </div>
  )
}

export default Tela_Principal