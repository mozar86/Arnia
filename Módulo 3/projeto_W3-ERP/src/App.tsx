import AppRoutes from "./Routes";
import styled from "styled-components";

const AppContainer = styled.div`
  // Estilos globais para o container principal, se necessário
`;

const App: React.FC = () => {
  return (
    <AppContainer>
      <AppRoutes />
    </AppContainer>
  );
};

export default App;
