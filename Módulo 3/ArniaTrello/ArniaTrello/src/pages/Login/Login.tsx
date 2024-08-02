import LoginForm from '../../components/LoginForm/LoginForm';
import { Container, LoginBox } from './Login-styled';

const Login = () => {
  return (
    <Container>
      <LoginBox>
        <LoginForm loginUser={(user: any) => console.log(user)} />
      </LoginBox>
    </Container>
  );
};

export default Login;
