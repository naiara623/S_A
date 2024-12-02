import './Cadastro.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import React, { useState, useEffect } from 'react';

function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const navigate = useNavigate();

  // Função para salvar os dados no localStorage
  const saveToLocalStorage = (users) => {
    localStorage.setItem('users', JSON.stringify(users));
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem('users');
    const usersData = storedUsers ? JSON.parse(storedUsers) : [];
    setUsers(usersData);
  }, []);

  // Função para adicionar um novo usuário
  const addUser = () => {
    if (!name || !email || !password || !userType || !acceptedTerms) {
      setErrorMessage('Preencha todos os campos e aceite os Termos de Uso.');
      return;
    }

    if (password.length < 5) {
      setErrorMessage('A senha deve ter pelo menos 5 caracteres.');
      return;
    }

    const isDuplicate = users.some((user) => user.email === email);
    if (isDuplicate) {
      setErrorMessage('Usuário com este email já cadastrado.');
      return;
    }

    const newUser = { name, email, password, userType };
    const updatedUsers = [...users, newUser];
    setUsers(updatedUsers);
    saveToLocalStorage(updatedUsers);
    clearForm();
    navigate('/telaprincipal');
  };

  // Função para limpar o formulário
  const clearForm = () => {
    setName('');
    setEmail('');
    setPassword('');
    setUserType('');
    setAcceptedTerms(false);
    setErrorMessage('');
  };

  // Função de submit do formulário
  const handleSubmit = (e) => {
    e.preventDefault();
    addUser();
  };

  return (
    <div className="body">
      <div className="Conteiner-1"></div>

      <div className="Container">
        <center>
          <div>
            <div className="texto">
              <h1 className="escrita">Cadastro</h1>
              <br /><br />
              {errorMessage && <p className="error">{errorMessage}</p>}
              <form onSubmit={handleSubmit}>
                <div className="input-group">
                  <label className="label2">Nome de usuário</label>
                  <input
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="a"
                    type="text"
                    placeholder="Nome Completo"
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
                    placeholder="seu.email@gmail.com"
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
                    placeholder="Mínimo 5 caracteres"
                  />
                </div>
                <br />

                <div className="radios">
                  <div className="radio11">
                    <label className="radio-button">
                      <input
                        type="radio"
                        name="radio-group"
                        value="Sou TEA"
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Sou TEA</span>
                    </label>
                  </div>

                  <div className="radio1">
                    <label className="radio-button">
                      <input
                        type="radio"
                        name="radio-group"
                        value="Sou responsável"
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Sou responsável</span>
                    </label>
                  </div>

                  <div className="radio2">
                    <label className="radio-button">
                      <input
                        type="radio"
                        name="radio-group"
                        value="Tenho interesse"
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Tenho interesse</span>
                    </label>
                  </div>

                  <div className="radio2">
                    <label className="radio-button">
                      <input
                        type="radio"
                        name="radio-group"
                        value="Sou profissional"
                        onChange={(e) => setUserType(e.target.value)}
                      />
                      <span className="radio-checkmark"></span>
                      <span className="radio-label">Sou profissional</span>
                    </label>
                  </div>
                </div>

                

                <button
                  className="oi"
                  type="submit"
                  disabled={!name || !email || !password || !userType || !acceptedTerms}
                >
                  Cadastrar
                </button>
                <br /><br />
              </form>

             

              <div className="termos">
                  <input
                    type="checkbox"
                    id="cbx2"
                    checked={acceptedTerms}
                    onChange={(e) => setAcceptedTerms(e.target.checked)}
                    style={{display: 'none'}}
                  />
                  <label htmlFor="cbx2" className="check">
                <svg width="18px" height="18px" viewBox="0 0 18 18">
                  <path d="M 1 9 L 1 9 c 0 -5 3 -8 8 -8 L 9 1 C 14 1 17 5 17 9 L 17 9 c 0 4 -4 8 -8 8 L 9 17 C 5 17 1 14 1 9 L 1 9 Z" />
                  <polyline points="1 9 7 14 15 4" />
                </svg> &nbsp; Li e aceito os Termos de uso
              </label>
                </div>

                <div className="Logar">
                <Link to="/login" className='Link'>
                <h4>
                  Já tem conta? Entrar
                </h4>
                </Link>
              </div>
            </div>
          </div>
        </center>
      </div>
    </div>
  );
}

export default Cadastro;