import React from 'react'

function MapasEAplicativosDeNavegação2() {
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

<h2>Mapas e Aplicativos de Navegação</h2>
<p>Usar mapas físicos e aplicativos de navegação pode ajudar a pessoa a se familiarizar com a nova rota. Algumas estratégias incluem:
     Mapas Detalhados: Fornecer mapas impressos que destacam a nova rota e pontos de referência importantes.
     Tutoriais de Aplicativos: Ensinar a pessoa a usar aplicativos de navegação como Google Maps, Waze ou Apple Maps, mostrando como verificar o trânsito em tempo real e encontrar rotas alternativas.
     Simulações de Rota: Fazer simulações de viagem usando os aplicativos para que a pessoa possa praticar a navegação antes de enfrentar a mudança real.</p>
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

export default MapasEAplicativosDeNavegação2
