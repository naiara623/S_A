import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Estrategia1.css'

function Estrategia1() {
  return (
    <div class="tela">
      {<Navbar />}

      <div>

        <div className='cor-estrategias'>
          <div className='coluna-estrategia'>
            <h3 className='estrategias-para'>Estratégias para:</h3>

            <div className='todas-colunas'>
              <button className='estrategia1'  ><h4 className="s1"><Link>Sons Altos</Link></h4></button><br /><br />
              <button className='estrategia2' ><h4 className="s2"><Link to={'/estrategia2'}>Mudança na Rotina</Link></h4></button><br /><br />
              <button className='estrategia3' ><h4 className="s3"><Link to={'/estrategia3'}>Rotas diferentes do previsto</Link></h4></button><br /><br />
              <button className='estrategia4' ><h4 className="s4"><Link to={'/estrategia4'}>Muitas pessoas em um ambiente</Link></h4></button><br /><br />
              <div className='ppp1'>
                <p>Cada pessoa é única, então pode ser necessário experimentar diferentes estratégias para encontrar o que funciona melhor em cada caso.</p>
              </div>
            </div>
          </div>
          <div className='scrollable-colunas'></div>
          <div className='text-estrategias1'>

            <h2 className='text1'>Sons Altos</h2>
            <p className='text2'> Lidar com sons altos pode ser particularmente desafiador para pessoas autistas, mas algumas estratégias podem ajudar a <br /> minimizar o desconforto:</p>

          </div>

          <div className='colunas'>
            <button className='protetores'><h4 className="pe1">Protetores auriculares</h4></button><br />
            <button className='Espa-Tranq'><h4 className="p2e1">Espaços tranquilos</h4></button><br />
            <button className='Planejamento'><h4 className="p3e1">Planejamento</h4></button><br />
            <button className='Comunicaçãos'><h4 className="p4e1">Comunicação</h4></button><br />
            <button className='tec-relax'><h4 className="p5e1">Técnicas de relaxamento</h4></button><br />
            <button className='Mús-Rui-Branco'><h4 className="p6e1">Técnicas de relaxamento</h4></button><br />
            <button className='Treinamento-Dessens'><h4 className="p7e1">Treinamento de dessensibilização</h4></button><br />

          </div>



        </div>
      </div>



    </div>

  )
}

export default Estrategia1
