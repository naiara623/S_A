import React from 'react'

function TécnicasDeRelaxamento6() {
  return (
    <div>
      <div class="Navbar-Container">

<div class="navbar-1">
    <img src="logo spectrum.png" alt="spectrum logo" class="logo"/>

    <button onclick="estrategias()" class="menu-janela">
        <img src="pontos-do-menu.png" alt="estrategias para usuários"/>
    </button>
</div>

<div class="navbar-2">
    <div class="navbar-menu">
        <a href="./Tela 4 - Tela inicial.html">INICIO</a>
        <a href="">ESPECIALISTAS</a>
    </div>

    <div class="navbar-pesquisa"> 
        <img src="lupa.png" alt="barra de pesquisa" class="lupa-pesquisa"/>
        <input type="text" class="pesquisar" id="inputPesquisar" placeholder="  Pesquisar" readonly/>

        <button onclick="usuário()"  class="menu-usuario">
            <img src="utilizador.png" alt="usuario"/>
        </button>
    </div>

</div> 

<div class="container">
<div class="content">
<div class="main-content">

<button href="Estratégia 1 Sons Altos.html">⬅   Técnicas de Relaxamento</button> 

<p>Praticar técnicas de respiração profunda, meditação ou outras atividades calmantes pode ser extremamente benéfico. Aqui estão algumas técnicas detalhadas:
 Respiração 4-7-8: Inspirar pelo nariz contando até 4, segurar a respiração contando até 7 e expirar lentamente pela boca contando até 8. Repetir várias vezes até sentir-se mais calmo.
 Meditação Mindfulness: Focar no momento presente, observando os pensamentos e sensações sem julgamento. Aplicativos como Headspace ou Calm podem ser úteis para guiar a prática.
 Progressive Muscle Relaxation: Tensionar e relaxar grupos musculares específicos, começando pelos pés e subindo até a cabeça, para liberar a tensão acumulada.</p>
</div>
<div class="sidebar">
      
<h3>Estratégias para:</h3>
<ul>
<li> <button href="Estratégia 1 Sons Altos.html">Sons Altos</button></li>
<li> <button href="Estratégia 2 Mudança na Rotina.html">Mudança na Rotina</button></li>
<li> <button href="Estratégia 3 Rotas diferentes do previsto.html">Rotas diferentes do previsto</button></li>
<li> <button href="Estratégia 4 Muitas pessoas em um ambiente.html">Muitas pessoas em um ambiente</button></li>
</ul>

</div>
</div>
</div>
</div>
    </div>
  )
}

export default TécnicasDeRelaxamento6
