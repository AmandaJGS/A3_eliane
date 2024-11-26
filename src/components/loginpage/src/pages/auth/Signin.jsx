import React, { useState } from "react"; 
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate para redirecionamento
import SCLOGO from "../../assets/img/sc-logo.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para navegação após login bem-sucedido

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_email = e.target.email.value;
    const user_senha = e.target.password.value;

    try {
        const response = await fetch("https://api-a3-eliane.vercel.app/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                user_email: user_email,
                user_senha: user_senha,
            }),
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao tentar logar');
        }

        console.log('Login bem-sucedido:', data);
        // Armazenar o token JWT no localStorage
        localStorage.setItem('token', data.token);

        // Redirecionar para a home page após o login bem-sucedido
        navigate('/home'); // Ajuste para o caminho da sua página inicial

    } catch (error) {
        console.error('Erro ao tentar fazer login:', error);
        setError('Email ou senha inválidos');
    }
};

  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={SCLOGO} alt="Logo" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Bem Vindo</h1>
        <p className="auth-header-subtitle">Faça login na sua conta</p>
      </div>
      <div className="auth-body">
        <form onSubmit={handleSubmit} className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Endereço de Email
            </label>
            <input
              type="email"
              className="input-control"
              id="email"
              placeholder="example@gmail.com"
              autoComplete="off"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Senha
            </label>
            <input
              type="password"
              className="input-control"
              id="password"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <div className="flex-end">
            <Link to={"/auth/forgot-password"} className="link-end">
              Esquecesu a senha?
            </Link>
          </div>
          <button type="submit" className="btn-submit">
            Logar
          </button>
        </form>
        <p className="text-center">
          Novo?{" "}
          <Link to={"/auth/signup"} className="link-text-center">
            Crie a conta aqui!
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signin;
