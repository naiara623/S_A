import React from 'react'

function EspaçosDeRefúgio3() {
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

<button href="Estratégia 1 Sons Altos.html">⬅    Espaços de Refúgio</button> 

<p>Identificar e utilizar áreas tranquilas é crucial para evitar a sobrecarga sensorial. Aqui estão algumas dicas adicionais:
 Solicitar Acomodações: Em eventos maiores, pode ser possível solicitar acomodações específicas, como acesso a uma sala de descanso ou a permissão para usar uma entrada menos movimentada.
 Explorar Alternativas: Se não houver áreas designadas de refúgio, procurar alternativas como cafeterias próximas, parques ou até mesmo o carro, se estiver estacionado nas proximidades.
 Personalização do Espaço: Levar itens que ajudem a personalizar o espaço de refúgio, como uma manta, travesseiro ou até mesmo um difusor de aromas calmantes.</p>
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

export default EspaçosDeRefúgio3
