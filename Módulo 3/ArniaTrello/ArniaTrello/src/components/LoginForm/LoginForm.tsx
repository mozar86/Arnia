import React, { useState } from 'react'
import { User } from '../../types'

type UserProps = {
    loginUser: (user: User) => void;
};

const LoginForm = ({ loginUser }: UserProps) => {
    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!userEmail || !userPassword) {
            alert('Por favor, preencha seu usuário e/ou senha!');
            return;
        }
        
    }

  return (
    <div>
        <h1>Arnia Trello</h1>
        <form action="">
            <input type="email" name='E-mail'/>
            <input type="password" name='Senha'/>
        </form>
    </div>
  )
}

export default LoginForm;