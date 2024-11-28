import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import './Estrategia2a4.css'

function Estrategia2() {
  return (
    <div>
    {<Navbar />}
    <div class="tela2">
<div class="barra-estrategias">
    
 <div className='cor-estrategias2'>
 <div className='coluna-estrategia2'>
 <h3 className='estrategias-para2'>Estratégias para:</h3>
 
 <button className='estrategia5' ><h4 className="s1"><Link to={'/estrategia1'}>Sons Altos</Link></h4></button>
 <button className='estrategia6' ><h4 className="s2"><Link to={'/estrategia2'}>Mudança na Rotina</Link></h4></button>
 <button className='estrategia7' ><h4 className="s3"><Link to={'/estrategia3'}>Rotas diferentes do previsto</Link></h4></button>
 <button className='estrategia8' ><h4 className="s4"><Link to={'/estrategia4'}>Muitas pessoas em um ambiente</Link></h4></button>
 </div>
 </div>

<div className="text-tela2">
  <h2 className='text1-tela2'>Mudanças na Rotina</h2>
 <p className='text2-tela2'>Lidar com mudanças de rotina pode ser desafiador para pessoas autistas, mas existem diversas estratégias que podem ajudar:</p>
</div>
 
 
 <div class="estra-tela2"> 
 <button className='Preparacao'><h4 className="p">Preparação antecipada</h4></button><br/>
 <button className='vizualizar'><h4 className="p2">Visualização e roteiros</h4></button><br/>
 <button className='manter'><h4 className="p3">Manter elementos constantes</h4></button><br/>
 <button className='dividir'><h4 className="p4">Dividir em etapas</h4></button><br/>
 <button className='historias'><h4 className="p5">Histórias sociais</h4></button><br/>
 <button className='Tecnicas'><h4 className="p6">Técnicas de relaxamento</h4></button><br/>
 <button className='reforco'><h4 className='p7'>Reforço positivo</h4></button><br/>
 <button className='introduzir'><h4 className="p8">Introduzir flexibilidade gradualmente</h4></button><br/>
 <button className='suporte'><h4 className="p9">Suporte emocional</h4></button><br/>
 <button className='objetos'><h4 className="p10">Objetos de conforto</h4></button><br/>
 
 </div>

<div className="ppp2">
  <p>Essas estratégias podem ser adaptadas para atender às necessidades individuais de cada pessoa autista, já que cada indivíduo é único e pode responder de maneira diferente às mudanças.</p>
</div>
 
 </div>
 

 </div>
 </div>
   )
 }
 export default Estrategia2
