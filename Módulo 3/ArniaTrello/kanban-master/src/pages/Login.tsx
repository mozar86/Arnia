import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Input from "../components/Input";
import { login } from "../services/api";
import { useAuth } from "../contexts/AuthContext";

const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

const LoginForm = styled.form`
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const RegisterLink = styled.p`
  text-align: center;
  margin-top: 20px;

  a {
    color: #007bff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { signIn } = useAuth();

  const handleLogin = async () => {
    try {
      const response = await login(email, password);
      signIn(response.token);
      navigate("/home");
    } catch (error) {
      console.error("Erro no login:", error);
      alert("Falha no login. Verifique suas credenciais.");
    }
  };

  return (
    <LoginContainer>
      <LoginForm>
        <Title>Login</Title>
        <Input
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          label="Senha"
          isPassword
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="button" onClick={handleLogin}>
          Entrar
        </Button>
        <RegisterLink>
          Não tem uma conta? <a href="/register">Cadastre-se</a>
        </RegisterLink>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;
