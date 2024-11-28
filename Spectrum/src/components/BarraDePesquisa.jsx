import React, { useState } from 'react';
import './BarraDePesquisa.css';

function BarraDePesquisa({ items }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value); 
  };

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-container">
      <div className="group">
        <label htmlFor="search-input" className="visually-hidden">Pesquisar:</label>
        <input
          type="search"
          id="search-input" // Id que será referenciado pelo label
          className="search-input" // Classe para aplicar as cores
          placeholder="Pesquise algo..."
          value={searchTerm}
          onChange={handleChange}
        />
        <svg className="icon" aria-hidden="true" viewBox="0 0 24 24">
          <g>
            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
          </g>
        </svg>
        {searchTerm && (
          <div className="suggestions">
            <ul>
              {filteredItems.map((item, index) => (
                <li key={index}>
                  <button>{item}</button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default BarraDePesquisa;