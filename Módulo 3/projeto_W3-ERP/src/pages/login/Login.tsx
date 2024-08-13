import { useState } from "react";
import Input from "../../components/Input";
import { LoginBanner, LoginContainer, LoginForm, Button } from "./Login-Styles";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <LoginContainer>
            <LoginForm>
                <Input 
                    label="Email" 
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                    label="Password" 
                    type="password"
                    isPassword
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button>Entrar</Button>
            </LoginForm>
            <LoginBanner />
        </LoginContainer>
    );
};

export default Login;
