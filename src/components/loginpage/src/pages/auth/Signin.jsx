import React from "react";
import { Link } from "react-router-dom";
import SCLOGO from "../../assets/img/sc-logo.png";
const Signin = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={SCLOGO} alt="" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Bem Vindo</h1>
        <p className="auth-header-subtitle">
          Faça login na sua conta
        </p>
      </div>
      <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Endereço de Email
            </label>
            <input
              type="text"
              className="input-control"
              id="email"
              placeholder="examplo@gmail.com"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="password" className="input-label">
              Senha
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-control"
              placeholder="Senha"
              autoComplete="off"
              required
            />
          </div>
          <div className="flex-end">
            <Link to={"/auth/forgot-password"} className="link-end">
              Esqueceu a senha?
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
