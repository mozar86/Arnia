import Input from "../../components/Input";
import { LoginBanner, LoginContainer, LoginForm } from "./Login-Styles";

const Login = () => {

    
    return (
        <LoginContainer>
            <LoginForm>
                <Input label={""} />
            </LoginForm>
            <LoginBanner>
                
            </LoginBanner>
        </LoginContainer>
    );
};

export default Login;