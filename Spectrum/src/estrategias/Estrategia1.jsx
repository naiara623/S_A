import React from 'react'
import Navbar from '../components/Navbar'
import './Estrategias.css'

function Estrategia1() {
  return (
<div>
  {<Navbar />}

<div class="container">

<div class="sidebar">
      
<h3>Estratégias para:</h3>

<div className='todas-colunas'>

 <button className='estrategias1' >Sons Altos</button><br /><br />
 <button className='estrategias2' >Mudança na Rotina</button><br /><br />
 <button className='estrategias3' >Rotas diferentes do previsto</button><br /><br />
 <button className='estrategias4' >Muitas pessoas em um ambiente</button><br /><br />
</div>

<div className='ppp'>

<h2  className='ppp3'>Sons Altos</h2>
<p  className='ppp3'> Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas estratégias podem ajudar a minimizar o desconforto:</p>

</div>

<div className='colunas'>
<button >Protetores auriculares</button><br />
<button >Espaços tranquilos</button><br/>
<button >Planejamento</button><br/>
<button >Comunicação</button><br/>
<button >Técnicas de relaxamento</button><br/>
<button >Música ou ruído branco</button><br/>
<button >Treinamento de dessensibilização</button><br/>

</div>
  

<div className='ppp1'>
<p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>
</div>

</div>



</div>
</div>

  )
}

export default Estrategia1
