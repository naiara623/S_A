import React from 'react'

function Estrategia1() {
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
        <button >INICIO</button>
        <button >ESPECIALISTAS</button>
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

<h2>Sons Altos</h2>
<p>Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas estratégias podem ajudar a minimizar o desconforto:</p>
<div class="estrategias">
<ul>
  
<li><button href="1.1 Protetores auriculares.html">Protetores auriculares</button></li><br />
<li><button href="2.1 Espaços tranquilos.html">Espaços tranquilos</button></li><br/>
<li><button href="3.1 Planejamento.html">Planejamento</button></li><br/>
<li><button href="4.1 Comunicação.html">Comunicação</button></li><br/>
<li><button href="5.1 Técnicas de relaxamento.html">Técnicas de relaxamento</button></li><br/>
<li><button href="6.1 Música ou ruído branco.html">Música ou ruído branco</button></li><br/>
<li><button href="7.1 Treinamento de dessensibilização.html">Treinamento de dessensibilização</button></li><br/>
</ul>

</div>
<p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>

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

export default Estrategia1
