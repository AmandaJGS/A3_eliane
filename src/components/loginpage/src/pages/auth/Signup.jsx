import React from "react";
import { Link } from "react-router-dom";
import SCLOGO from "../../assets/img/sc-logo.png";

const Signup = () => {
  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={SCLOGO} alt="" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Faça seu Registro</h1>
        <p className="auth-header-subtitle">
          Crie a conta e se junte a nós
        </p>
      </div>
      <div className="auth-body">
        <form className="auth-form-validation">
          <div className="input-field">
            <label htmlFor="full-name" className="input-label">
              Nome completo
            </label>
            <input
              type="text"
              className="input-control"
              id="full-name"
              placeholder="nome"
              autoComplete="off"
              required
            />
          </div>
          <div className="input-field">
            <label htmlFor="email" className="input-label">
              Endereço de email
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
              placeholder="senha"
              autoComplete="off"
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Criar conta
          </button>
        </form>
        <p className="text-center">
          Ja tem uma conta?{" "}
          <Link to={"/auth/signin"} className="link-text-center">
            Faça o login!
          </Link>
        </p>
      </div>
    </React.Fragment>
  );
};

export default Signup;
