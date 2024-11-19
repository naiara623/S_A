import React from 'react'

function ComunicacaoPrevia7() {
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

<button href="Estratégia 1 Sons Altos.html">⬅   Comunicação Prévia</button> 

<p>Informar amigos, familiares ou organizadores do evento sobre a sensibilidade a ambientes lotados pode levar a uma melhor compreensão e apoio. Aqui estão algumas dicas adicionais:
 Cartões de Informação: Criar cartões de informação que expliquem brevemente as necessidades específicas e como os outros podem ajudar. Esses cartões podem ser entregues discretamente a organizadores ou seguranças.
 Reuniões Prévias: Se possível, organizar reuniões prévias com os organizadores para discutir acomodações e garantir que todas as necessidades sejam atendidas.
 Grupos de Apoio: Participar de grupos de apoio ou fóruns on-line onde é possível compartilhar experiências e obter dicas de outras pessoas que enfrentam desafios semelhantes.</p>
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

export default ComunicacaoPrevia7
