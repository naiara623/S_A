import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Esqueci_A_Senha.css';

function EsqueciASenha() {

  const[mostrarSenha, setMostrarSenha] = useState(false) // Estado para controlar a visibilidade da senha

  const toggleSenha = () => {
    setMostrarSenha(!mostrarSenha); // Alterna o estado de visibilidade da senha
  };


  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [users, setUsers] = useState([]);

  const navigate = useNavigate();

  // Carregar os usuários do localStorage
  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    const usersData = storedUsers ? JSON.parse(storedUsers) : [];
    setUsers(usersData);
  }, []);

  // Função para redefinir a senha
  const handlePasswordReset = (e) => {
    e.preventDefault();

    // Verificar se os dois campos de senha correspondem
    if (newPassword !== confirmPassword) {
      alert('As senhas não coincidem. Por favor, tente novamente.');
      return;
    }

    // Verificar se o e-mail existe nos usuários cadastrados
    const userIndex = users.findIndex((user) => user.email === email);

    if (userIndex === -1) {
      alert('Email não encontrado. Verifique o email digitado.');
      return;
    }

    // Atualizar a senha do usuário
    const updatedUsers = [...users];
    updatedUsers[userIndex].password = newPassword;

    // Salvar as alterações no localStorage
    localStorage.setItem('users', JSON.stringify(updatedUsers));
    alert('Senha redefinida com sucesso!');

    // Redirecionar para a página de login
    navigate('/login');
  };

  return (
    <div className="body-senha">
      <div className="conteiner-senha">
        <h1 className="modificar-s">Modificar Senha</h1>
        <form onSubmit={handlePasswordReset}>
          <label>Digite seu email</label>
          <input
            autoComplete="off"
            name="email"
            id="email"
            className="input"
            type="email"
            placeholder="seu.email@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br /><br />

          <label>Digite sua nova senha</label>
          <input
            autoComplete="off"
            name="newPassword"
            id="newPassword"
            className="input"
            type={mostrarSenha ? 'text' : 'password'} 
            placeholder="Mínimo 5 caracteres"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        <span
        onClick={toggleSenha}>
        {mostrarSenha ?  <img className='har' src="../visible.png" alt="Mostrar senha" /> : <img className='har' src="../invisible.png" alt="Ocultar senha" />  } {/* Muda o ícone do olho */}
        
         </span>

          <br /><br />
          <div className='subir'>
          <label htmlFor="senha">Senha:</label>
          <div className='olho'>

          <input
            className="input"
            autoComplete="off"
            name="confirmPassword"
            id="confirmPassword"
            type={mostrarSenha ? 'text' : 'password'} 
            placeholder="Confirme sua nova senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span
        onClick={toggleSenha}>
        {mostrarSenha ?  <img className='har' src="../visible.png" alt="Mostrar senha" /> : <img className='har' src="../invisible.png" alt="Ocultar senha" />  } {/* Muda o ícone do olho */}
        
      </span>
      
      </div>
      </div>

          <button className="demetra" type="submit">
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
}

export default EsqueciASenha;