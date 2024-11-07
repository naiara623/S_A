import React from 'react'

function PreparaçãoAntecipada1() {
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

<h2>Preparação Antecipada</h2>
<p>Informar com antecedência sobre a possibilidade de mudança na rota é essencial para reduzir a ansiedade e preparar mentalmente a pessoa. Isso pode incluir:
     Comunicação Clara e Contínua: Manter a pessoa informada sobre possíveis mudanças com atualizações regulares. Isso pode ser feito através de reuniões, e-mails ou mensagens.
     Materiais de Apoio: Fornecer materiais como folhetos, vídeos explicativos ou apresentações que detalhem as mudanças e os motivos por trás delas.
     Sessões de Perguntas e Respostas: Organizar sessões onde a pessoa possa fazer perguntas e expressar suas preocupações, ajudando a esclarecer dúvidas e reduzir incertezas.</p>
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

export default PreparaçãoAntecipada1
