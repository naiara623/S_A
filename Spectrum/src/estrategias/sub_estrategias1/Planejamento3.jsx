import React from 'react'

function Planejamento3() {
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

<button href="Estratégia 1 Sons Altos.html">⬅    Planejamento</button> <h2></h2>
<p>Evitar horários ou locais barulhentos é uma estratégia prática para minimizar a exposição ao ruído. Para pessoas com TEA, planejar atividades em horários menos movimentados pode reduzir significativamente o estresse. Por exemplo, fazer compras no início da manhã ou no final da noite, quando as lojas estão menos cheias, pode ser mais tranquilo. Da mesma forma, escolher rotas alternativas para evitar o tráfego intenso pode ajudar a evitar o barulho da cidade.</p>
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

export default Planejamento3
