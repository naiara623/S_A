import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import './index.css'; // Seu arquivo CSS global

// Componentes das páginas
import Boas_Vindas from './pages/Boas_Vindas';
import Cadastro from './pages/Cadastro';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Boas_Vindas} />
        <Route path="/about" component={Cadastro} />
        <Route path="/contact" component={Login} />
      </Switch>
    </Router>
  );
}

export default App;
