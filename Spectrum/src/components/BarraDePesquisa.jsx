import React, { useState } from 'react';
import './BarraDePesquisa.css'

function BarraDePesquisa({ items }) {
    const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value); // Atualiza o termo de pesquisa conforme o usuário digita
  };

  // Filtra os itens com base no termo de pesquisa
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
        <div class="group">
<svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
    <input
     type="search" 
     className ="input"
      placeholder="Pesquise algo..."
      value={searchTerm}
      onChange={handleChange}
      
    />
    {searchTerm && (
      <div className="suggestions">
        <ul>
          {filteredItems.map((item, index) => (
            <li key={index}><button>{item}</button></li>
          ))}
        </ul>
      </div>
    )}
  </div>
  
</div>
  )
}

export default BarraDePesquisa
