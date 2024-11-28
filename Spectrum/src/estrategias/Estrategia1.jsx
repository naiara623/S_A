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
            <Link><button className='estrategia1' >Sons Altos</button></Link><br /><br />
              <Link to={'/estrategia2'}><button className='estrategia2' >Mudança na Rotina</button></Link><br /><br />
             <Link to={'/estrategia3'}><button className='estrategia3' >Rotas diferentes do previsto</button></Link><br /><br />
             <Link to={'/estrategia4'}><button className='estrategia4' >Muitas pessoas em um ambiente</button></Link><br /><br />
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
            <button className='protetores'>Protetores auriculares</button><br />
            <button className='Espa-Tranq'> Espaços tranquilos</button><br />
            <button className='Planejamento'> Planejamento</button><br />
            <button className='Comunicaçãos'> Comunicação</button><br />
            <button className='tec-relax'> Técnicas de relaxamento</button><br />
            <button className='Mús-Rui-Branco'> Técnicas de relaxamento</button><br />
            <button className='Treinamento-Dessens'> Treinamento de dessensibilização</button><br />

          </div>



        </div>
      </div>



    </div>

  )
}

export default Estrategia1
