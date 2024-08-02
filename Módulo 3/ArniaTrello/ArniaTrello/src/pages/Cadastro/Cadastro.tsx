import CadastroForm from "../../components/CadastroForm/CadastroForm";
import { CadastroBox, Container } from "./Cadastro-stylex";

const Cadastro = () => {
  return (
    <Container>
      <CadastroBox>
        <CadastroForm />
      </CadastroBox>
    </Container>
  );
};

export default Cadastro;
