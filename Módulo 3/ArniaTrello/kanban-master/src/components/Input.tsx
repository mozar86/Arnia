import React, { InputHTMLAttributes, useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

const StyledLabel = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  color: #333;
`;

const StyledInput = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 2px rgba(0, 123, 255, 0.25);
  }
`;

const PasswordContainer = styled.div`
  position: relative;
`;

const EyeIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  user-select: none;
`;

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  isPassword?: boolean;
}

const Input: React.FC<InputProps> = ({ label, isPassword, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <InputContainer>
      <StyledLabel>{label}</StyledLabel>
      {isPassword ? (
        <PasswordContainer>
          <StyledInput type={showPassword ? "text" : "password"} {...props}/>
          <EyeIcon onClick={togglePasswordVisibility}>
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </EyeIcon>
        </PasswordContainer>
      ) : (
        <StyledInput {...props}/>
      )}
    </InputContainer>
  );
};

export default Input;
