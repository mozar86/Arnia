import React, { InputHTMLAttributes, useState } from "react";
import { 
    InputContainer, 
    StyledLabel, 
    InputPasswordContainer, 
    StyledInput, 
    StatusEyeIcon, 
    CheckboxContainer
} from "./Input-Styles";

// Obter configurações da tag input do html para criar componente
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
    isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ label, isPassword, ...props }) => {
    // Salvar alterações de estado da exibição de senha
    const [showPassword, setShowPassword] = useState(false);

    // Alterar o status de exibição
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    }

    return (
        <InputContainer>
            <StyledLabel>{label}</StyledLabel>
            {isPassword ? (
                <InputPasswordContainer>
                    <StyledInput type={showPassword ? 'text' : 'password'} {...props} />
                    <StatusEyeIcon onClick={handleShowPassword}>
                        {showPassword ? '🙈' : '👁'}
                    </StatusEyeIcon>
                    <CheckboxContainer>
                        <input type="checkbox" id="rememberMe" />
                        <label htmlFor="rememberMe">Lembrar-me</label>
                    </CheckboxContainer>
                </InputPasswordContainer>
            ) : (
                <StyledInput {...props} />
            )}
        </InputContainer>
    );
};

export default Input;
