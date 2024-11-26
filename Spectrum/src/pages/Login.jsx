import './Login.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import '../index.css';

function Login() {
// Estados para controlar o formulário de login
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [users, setUsers] = useState([]);

const navigate = useNavigate(); // Navegação entre páginas

// Carregar os usuários armazenados no localStorage ao montar o componente
useEffect(() => {
  const storedUsers = localStorage.getItem('users');
  const usersData = storedUsers ? JSON.parse(storedUsers) : [];
  setUsers(usersData);
}, []);

// Função de login
const handleLogin = (e) => {
  e.preventDefault();

  // Verifica se o usuário e senha correspondem aos dados armazenados
  const userFound = users.find(
    (user) => user.email === email && user.password === password
  );

  if (userFound) {
    alert(`Bem-vindo(a), ${userFound.name}!`);
    navigate('/telaprincipal'); // Redireciona para a página principal
  } else {
    alert('Email ou senha inválidos. Tente novamente.');
  } 
};

  return (
<div className='body-login'>
  <div className='container-1'>
    <div className='container4'>
      <h2 className='kk'>Login</h2>
      <br /><br /><br />
      <form onSubmit={handleLogin}>
      <div className="input-group">
              <label className="label">Nome de usuário ou Email</label>
              <input
                autoComplete="off"
                name="email"
                className="input"
                type="email"
                placeholder='seu.email@gmail.com ou Nome Completo'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <br /><br /><br />
            <div className="input-group">
              <label className="label">Senha</label>
              <input
                autoComplete="off"
                name="password"
                className="input"
                type="password"
                placeholder='Mínimo 5 caracteres'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <br /><br />
            <button className='button' type="submit">Entrar</button>
          </form>
          <br /><br />
          <div className="entrar">
            <h4 className='tim'>Não tem conta? <Link to={"/cadastro"} className='Link'>Cadastrar</Link></h4>
            <h4 className='tim1'>Esqueceu a senha?</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
