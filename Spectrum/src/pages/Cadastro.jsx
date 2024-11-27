import './Cadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Cadastro() {
  // Estados para controlar o formulário e os dados dos usuários
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const navigate = useNavigate(); // Usado para navegar entre páginas

  // Função para salvar os dados no localStorage
  const saveToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  useEffect(() => {
    const storedUsers = localStorage.setItem('users', JSON.stringify([]));
    const usersData = storedUsers ? JSON.parse(storedUsers) : [];
    setUsers(usersData);
  }, []);

  // Função para adicionar um novo usuário
  const addUser = () => {
    // Verifica se todos os campos foram preenchidos
    if (!name || !email || !password) {
      alert('Preencha todos os campos');
      return;
    }
  
    // Verifica se o email já foi cadastrado
    const isDuplicate = users.some((user) => user.email === email);
    if (isDuplicate) {
      alert('Usuário com este email já cadastrado');
      return;
    }
  
    // Cria o novo usuário e adiciona na lista
    const newUser = { name, email, password };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers); // Salva no localStorage
    clearForm(); // Limpa o formulário
  };

  // Função para editar um usuário
  const editUser = (index) => {
    const userToEdit = users[index];
    setName(userToEdit.name);
    setEmail(userToEdit.email);
    setPassword(userToEdit.password);
    setEditIndex(index);
  };

  // Função para atualizar um usuário
  const updateUser = () => {
    if (!name || !email || !password) {
      alert('Preencha todos os campos');
      return;
    }
    const updatedUsers = [...users];
    updatedUsers[editIndex] = { name, email, password };
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
    clearForm();
  };

  // Função para remover um usuário
  const deleteUser = (index) => {
    const updatedUsers = users.filter((_, i) => i !== index);
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
  };

  // Função para limpar o formulário
  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setEditIndex(null);
  };

  // Função de submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    
  // Verifica se todos os campos foram preenchidos
  if (!name || !email || !password) {
    alert('Preencha todos os campos antes de continuar');
    return; // Impede a navegação
  }

  // Adiciona o usuário e navega para a próxima página
  addUser();
  navigate('/telaprincipal'); // Redireciona somente se os dados forem válidos
};

  return (
    <div className='body'>
      <div className='Conteiner-1'></div>

      <div className='Container'>

        <center>
         

         <div> 

          <div className="texto">
             <h1 className='escrita'>Cadastro</h1>
           
           <br /><br />

          <br /><br />

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label className="l11">Nome de usuário</label>
              <input 
                autoComplete="off" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="a" 
                type="text" 
                placeholder='Nome Completo' 
              />
            </div>
            <br /><br />

            <div className="input-group">
              <label className="label1">Email</label>
              <input 
                autoComplete="off" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="a" 
                type="email" 
                placeholder='seu.email@gmail.com' 
              />
            </div>
            <br /><br />

            <div className="input-group">
              <label className="label1">Senha</label>
              <input 
                autoComplete="off" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="a" 
                type="password" 
                placeholder='Minimo 5 Caracteres' 
              />
            </div>
            <br />

            <div className='radios'>
              <div className='radio11'>
                <label className='radio-button'>
                  <input type="radio" id='radioum' name='radio-group' />
                  <span className='radio-checkmark'></span>
                  <span className='radio-label'>Sou TEA</span>
                </label>
              </div>

              <div className='radio1'>
                <label className='radio-button'>
                  <input type="radio" id='radioDois' name='radio-group' />
                  <span className='radio-checkmark'></span>
                  <span className='radio-label'>Sou responsável</span>
                </label>
              </div>

              <div className='radio2'>
                <label className='radio-button'>
                  <input type="radio" id='radioQuatro' name='radio-group' />
                  <span className='radio-checkmark'></span>
                  <span className='radio-label'>Tenho interesse</span>
                </label>
              </div>

              <div className='radio2'>
                <label className='radio-button'>
                  <input type="radio" id='radioCinco' name='radio-group' />
                  <span className='radio-checkmark'></span>
                  <span className='radio-label'>Sou profissional</span>
                </label>
              </div>
            </div>

            <button className='oi' type="submit">Cadastrar</button>
            <br /><br />
          </form>

          <div className="Logar">
            <div className="termos">
              <input type="checkbox" id="cbx2" style={{ display: "none" }} />
              <label htmlFor="cbx2" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
                  <polyline points="1 9 7 14 15 4" />
                </svg> &nbsp; Li e aceito os Termos de uso
              </label>
            </div>
            <h4>Já tem conta? <Link to="/login">Entrar</Link></h4>

          </div>
        </div>
         </div>
        </center> 
        
      </div>
    </div>
  );
}

export default Cadastro;