import React from 'react'

function Estrategia2() {
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

<h2>Mudanças na Rotina</h2>
<p>Lidar com mudanças de rotina pode ser desafiador para pessoas autistas, mas existem diversas estratégias que podem ajudar:</p>
<div class="estrategias">
<ul>
<li><button href="1.2 Preparação antecipada.html">Preparação antecipada</button></li><br/>
<li><button href="2.2 Visualização e roteiros.html">Visualização e roteiros</button></li><br/>
<li><button href="3.2 Manter elementos constantes.html">Manter elementos constantes</button></li><br/>
<li><button href="4.2 Dividir em etapas.html">Dividir em etapas</button></li><br/>
<li><button href="5.2 Histórias sociais.html">Histórias sociais</button></li><br/>
<li><button href="6.2 Técnicas de relaxamento.html">Técnicas de relaxamento</button></li><br/>
<li><button href="7.2 Reforço positivo.html">Reforço positivo</button></li><br/>
<li><button href="8.2 Introduzir flexibilidade gradualmente.html">Introduzir flexibilidade gradualmente</button></li><br/>
<li><button href="9.2 Suporte emocional.html">Suporte emocional</button></li><br/>
<li><button href="10.2 Objetos de conforto.html">Objetos de conforto</button></li><br/>
</ul>
</div>
<p>Essas estratégias podem ser adaptadas para atender às necessidades individuais de cada pessoa autista, já que cada indivíduo é único e pode responder de maneira diferente às mudanças.</p>
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

export default Estrategia2
