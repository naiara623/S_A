import React from 'react'

function HoráriosMenosMovimentados5() {
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

<button href="Estratégia 1 Sons Altos.html">⬅    Horários Menos Movimentados</button> 

<p>Optar por participar de eventos ou visitar locais em horários menos movimentados pode fazer uma grande diferença. Aqui estão algumas estratégias adicionais:
 Consulta de Horários: Verificar com antecedência os horários de menor movimento, seja através de sites, aplicativos ou entrando em contato diretamente com o local.
 Reservas Antecipadas: Sempre que possível, fazer reservas antecipadas para garantir acesso em horários mais tranquilos e evitar filas.
 Flexibilidade: Manter um plano flexível que permita ajustar os horários de visita conforme necessário, evitando picos de movimento.</p>
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

export default HoráriosMenosMovimentados5
