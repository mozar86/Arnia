import { useForm, SubmitHandler } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, DivForm, Form, Input, Label, Title, ErrorText } from './LoginForm-styled';
import { Link } from 'react-router-dom';

type User = {
  email: string;
  password: string;
};

type UserProps = {
  loginUser: (user: User) => void;
};

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Email é obrigatório'),
  password: Yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

const LoginForm = ({ loginUser }: UserProps) => {
  const { register, handleSubmit, formState: { errors } } = useForm<User>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<User> = data => {
    loginUser(data);
  };

  return (
    <DivForm>
      <Title>Arnia Trello</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Label>
          E-mail:
          <Input type="email" {...register('email')} />
          {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
        </Label>
        <Label>
          Senha:
          <Input type="password" {...register('password')} />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}
        </Label>
        <Button type="submit">Entrar</Button>
      </Form>
      <Link to="/cadastro">Cadastre-se</Link>
    </DivForm>
  );
};

export default LoginForm;
