import React, { useState, useEffect } from "react"; 
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate para redirecionamento
import SCLOGO from "../../assets/img/sc-logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate(); // Hook para navegação

  // Verifica se o usuário já está logado
  useEffect(() => {
    const token = localStorage.getItem('token'); // Verifica se existe um token
    if (token) {
      navigate('/home'); // Se o token existir, redireciona para a home
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user_email = e.target.email.value;
    const user_senha = e.target.password.value;

    try {
        const response = await fetch("https://api-a3-eliane.vercel.app/api/signup", {
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
            throw new Error(data.message || 'Erro ao tentar criar a conta');
        }

        console.log('Conta criada com sucesso:', data);
        // Redirecionar para a tela de login após o signup bem-sucedido
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
        <p className="auth-header-subtitle">Preencha os campos abaixo</p>
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

export default Signup
