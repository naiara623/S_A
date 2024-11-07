import React from 'react'

function Tela_Principal() {

  const images = [
    
    "./img/frase_carrocel2.jfif",
    "./img/Frase_carrosel4.jfif",
 
   ]
 
   const settings = {
    dots: true, // Adiciona os pontinhos de navegação
    infinite: true, // Loop infinito no carrossel
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div>
       <NavBar_Principal />

<div className='carrocel'>
  
<div>
    <h2>Carrossel de Imagens</h2>

</div>

</div>

<div className='profissionais'> 
<p>PROFISSIONAIS</p>
</div>
    </div>
  )
}

export default Tela_Principal