import React from 'react'
import Navbar from '../components/Navbar'
import './Estrategias.css'

function Estrategia1() {
  return (
    <div>
  {<Navbar />}

<div class="container">

<h2>Sons Altos</h2>
<p>Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas estratégias podem ajudar a minimizar o desconforto:</p>

<ul className='colunas1'>
  
<button href="1.1 Protetores auriculares.html"><li className='colunas2'/>Protetores auriculares</button><br />
<button href="2.1 Espaços tranquilos.html"><li className='colunas2'/>Espaços tranquilos</button><br/>
<button href="3.1 Planejamento.html"><li className='colunas2'/>Planejamento</button><br/>
<button href="4.1 Comunicação.html"><li className='colunas2'/>Comunicação</button><br/>
<button href="5.1 Técnicas de relaxamento.html"><li className='colunas2'/>Técnicas de relaxamento</button><br/>
<button href="6.1 Música ou ruído branco.html"><li className='colunas2'/>Música ou ruído branco</button><br/>
<button href="7.1 Treinamento de dessensibilização.html"><li className='colunas2'/>Treinamento de dessensibilização</button><br/>
</ul>

<p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>

</div>

<div class="sidebar">
      
<h3>Estratégias para:</h3>
<ul className='colunas1'>
 <button className='estrategias' ><li className='colunas3'/>Sons Altos</button><br /><br />
 <button className='estrategias' ><li className='colunas3'/>Mudança na Rotina</button><br /><br />
 <button className='estrategias' ><li className='colunas3'/>Rotas diferentes do previsto</button><br /><br />
 <button className='estrategias' ><li className='colunas3'/>Muitas pessoas em um ambiente</button><br /><br />
</ul>

</div>
</div>

  )
}

export default Estrategia1
