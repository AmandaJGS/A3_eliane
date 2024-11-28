import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SCLOGO from "../../assets/img/sc-logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState(""); // Estado para o nome
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/home');
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_email = e.target.email.value;
    const user_senha = e.target.password.value;
    const user_nome = e.target.name.value;

    try {
      const response = await fetch("https://api-a3-eliane.vercel.app/api/create/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_email,
          user_senha,
          user_nome,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Erro ao tentar criar a conta');
      }

      console.log('Conta criada com sucesso:', data);
      navigate('/auth/signin');
    } catch (error) {
      console.error('Erro ao tentar criar a conta:', error);
      setError('Erro ao criar a conta');
    }
  };

  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={SCLOGO} alt="Logo" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Crie sua conta</h1>
        <p className="auth-header-subtitle">Preeencha os campos abaixo</p>
      </div>
      <div className="auth-body">
        <form onSubmit={handleSubmit} className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="name" className="input-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="input-control"
              id="name"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
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
          <button type="submit" className="btn-submit">
            Criar Conta
          </button>
        </form>
        <p className="text-center">
          Já tem uma conta?{" "}
          <Link to={"/auth/signin"} className="link-text-center">
            Faça login aqui!
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signup;
