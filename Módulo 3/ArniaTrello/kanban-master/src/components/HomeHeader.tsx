import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../contexts/AuthContext";
import apiService from "../services/api";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #3a72f8;
  color: white;
`;

const Username = styled.div`
  font-size: 18px;
`;

const LogoutButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

const HomeHeader: React.FC = () => {
  const [username, setUsername] = useState("");
  const { token, signOut } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await apiService.get("/user", {
          headers: {
            Authorization: token,
          },
        });
        setUsername(response.data.name);
      } catch (error) {
        console.error("Erro ao buscar o nome do usuário:", error);
      }
    };

    if (token) {
      fetchUserData();
    }
  }, [token]);

  return (
    <Header>
      <Username>{`Olá, ${username}`}</Username>
      <LogoutButton onClick={signOut}>Sair</LogoutButton>
    </Header>
  );
};

export default HomeHeader;
