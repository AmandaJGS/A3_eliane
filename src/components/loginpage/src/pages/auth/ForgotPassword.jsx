import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ForgotImg from "../../assets/img/vector/forgot-password.png";

const ForgotPassword = () => {
  const navigate = useNavigate(); // Hook para navegar entre as páginas

  const handleSubmit = async (event) => {
    event.preventDefault();
    const user_email = event.target.email.value;
    const new_password = event.target.senha.value;

    try {
      const response = await fetch('https://api-a3-eliane.vercel.app/api/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          user_email,
          new_password,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message || 'Senha atualizada com sucesso!');
        // Redirecionar para a tela de login após sucesso
        navigate('/auth/signin');
      } else {
        alert(data.message || 'Erro ao redefinir a senha');
      }
    } catch (error) {
      console.error('Erro ao fazer a requisição:', error);
      alert('Erro de conexão, tente novamente mais tarde.');
    }
  };

  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo forgot-img">
          <img src={ForgotImg} alt="" className="auth-header-logo-img" />
        </div>
      </div>
      <div className="auth-body">
        <h1 className="auth-header-title">Esqueceu a senha?</h1>
        <p className="auth-header-subtitle forgot-subtitle">
          Coloque seu email para receber instruções
        </p>
        <form onSubmit={handleSubmit} className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Endereço de email
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="exemplo@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="senha" className="input-label">
              Nova senha
            </label>
            <input
              type="text"
              className="input-control"
              id="senha"
              placeholder="ex: senha123"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Trocar a Senha
          </button>
          <Link to={"/auth/signin"} className="btn-back-to-login">
            Voltar ao login
          </Link>
        </form>
      </div>
    </React.Fragment>
  );
};

export default ForgotPassword;
