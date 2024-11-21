import React from 'react'

function PlanejamentoAntecipado1() {
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

<button href="Estratégia 1 Sons Altos.html">⬅    Planejamento Antecipado</button> 

<p>Informar-se sobre o evento ou situação com antecedência* é essencial para reduzir a ansiedade e aumentar a sensação de controle. Aqui estão algumas estratégias detalhadas:
 Mapas e Layouts: Obter mapas do local do evento pode ajudar a identificar áreas importantes como saídas de emergência, banheiros, áreas de alimentação e espaços tranquilos. Isso permite planejar rotas e evitar áreas potencialmente estressantes.
 Listas de Verificação: Criar listas de verificação com itens essenciais a serem levados, como documentos, ingressos, itens de conforto e qualquer medicação necessária. Isso ajuda a garantir que nada importante seja esquecido.
 Simulações Mentais: Visualizar mentalmente o evento, imaginando cada etapa desde a chegada até a saída. Isso pode incluir pensar em como lidar com possíveis imprevistos, como filas longas ou mudanças no cronograma.</p>
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

export default PlanejamentoAntecipado1
