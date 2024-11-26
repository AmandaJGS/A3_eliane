import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Importando useNavigate
import { v4 as uuidv4 } from "uuid"; // Importa a biblioteca para gerar UUID
import SCLOGO from "../../assets/img/sc-logo.png";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nome, setNome] = useState("");
  const navigate = useNavigate(); // Usando useNavigate para navegação programática

  const handleSignup = async (e) => {
    e.preventDefault();
  
    const userId = uuidv4();
    const userImg = "https://via.placeholder.com/150";
  
    const userData = {
      user_id: userId,
      user_email: email,
      user_nome: nome,
      user_senha: password,
      user_img: userImg,
    };
  
    try {
      const response = await fetch("https://api-a3-eliane.vercel.app/api/create/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });
  
      // Verifica se a resposta é bem-sucedida
      if (!response.ok) {
        const errorText = await response.text(); // Tenta pegar o texto do erro
        throw new Error(`Erro da API: ${response.status} - ${errorText}`);
      }
  
      // Tenta converter a resposta para JSON
      let result;
      try {
        result = await response.json();
      } catch (error) {
        throw new Error("Resposta inesperada da API: não é um JSON.");
      }
  
      console.log("Usuário cadastrado com sucesso:", result);
      alert("Cadastro realizado com sucesso!");

      // Navega para a página de login após o cadastro
      navigate("/auth/signin"); // Redireciona para o login
      
    } catch (error) {
      console.error("Erro na requisição:", error.message || error);
      alert("Erro ao cadastrar: " + (error.message || "Erro desconhecido."));
    }
  };

  return (
    <React.Fragment>
      <div className="auth-header">
        <div className="auth-header-logo">
          <img src={SCLOGO} alt="" className="auth-header-logo-img" />
        </div>
        <h1 className="auth-header-title">Cadastro</h1>
        <p className="auth-header-subtitle">
          Crie sua conta para começar
        </p>
      </div>
      <div className="auth-body">
        <form className="auth-form-validation" onSubmit={handleSignup}>
          <div className="input-field">
            <label htmlFor="nome" className="input-label">
              Nome Completo
            </label>
            <input
              type="text"
              className="input-control"
              id="nome"
              placeholder="Seu nome completo"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
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
              placeholder="examplo@gmail.com"
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
              id="password"
              className="input-control"
              placeholder="Senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn-submit">
            Cadastrar
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
