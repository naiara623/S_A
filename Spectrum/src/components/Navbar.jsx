import './Navbar.css'

function Navbar() {
  return (
    <nav>
        <div className='containe'>

<div className='logo_div'>
  <img className='Logo_Spec' src="logo spectrum.png" alt="Logo Spectrum" /> 
</div>

<div className='inic-espec'>
  <Link className='inicio'>INICIO</Link>      
  <Link className='especialistas'>ESPECIALISTAS</Link>
</div>

<div className='buscar'>

  <img src="lupa.png" alt="lupa de pesquisa" className='lupa'/>
  <input type="text" className='input-busca' />
  <img src="X.png" alt="deletar texto"  className='X'/>
</div>

<div className='div-menu'>
  <img src="menu-.png" alt="" className='menu' />
</div>

</div>
    </nav>
  )
}

export default Navbar
