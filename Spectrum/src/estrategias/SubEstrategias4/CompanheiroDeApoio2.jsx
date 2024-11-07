import React from 'react'

function CompanheiroDeApoio2() {
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

<button href="Estratégia 1 Sons Altos.html">⬅    Companheiro de Apoio</button> 

<p>Ter uma pessoa de confiança ao lado pode fazer uma grande diferença. Aqui estão algumas maneiras de maximizar esse suporte:
 Sinais de Comunicação: Estabelecer sinais não verbais para comunicar quando a pessoa está se sentindo sobrecarregada ou precisa de uma pausa. Isso pode incluir gestos específicos ou palavras-código.
 Divisão de Tarefas: Delegar responsabilidades, como quem cuidará dos ingressos, quem ficará de olho nos horários e quem será responsável por encontrar áreas de descanso.
 Revisão de Planos: Antes do evento, revisar juntos o plano de ação, incluindo o que fazer em caso de emergências ou se a pessoa precisar sair mais cedo.</p>
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

export default CompanheiroDeApoio2
