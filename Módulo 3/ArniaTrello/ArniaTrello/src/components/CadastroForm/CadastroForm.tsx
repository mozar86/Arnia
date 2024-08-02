import { useForm, SubmitHandler } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, DivForm, Form, Input, Label, Title, ErrorText } from './CadastroForm-styled';
import { Link } from "react-router-dom";

type User = {
    nomeCompleto: string;
    email: string;
    senha: string;
    repitaSenha: string;
};

const schema = Yup.object().shape({
    nomeCompleto: Yup.string().required('Nome completo é obrigatório'),
    email: Yup.string().email('Email inválido').required('Email é obrigatório'),
    senha: Yup.string().required('Senha é obrigatório'),
    repitaSenha: Yup.string().required('Repita a senha é obrigatório'),
});

const CadastroForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<User>({
        resolver: yupResolver(schema),
    });

    const onSubmit: SubmitHandler<User> = data => {
        console.log(data);
    }

    return (
        <DivForm>
          <Title>Arnia Trello - Cadastro</Title>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Label>
              Nome completo:
              <Input type="text" {...register('nomeCompleto')} />
              {errors.nomeCompleto && <ErrorText>{errors.nomeCompleto.message}</ErrorText>}
            </Label>
            <Label>
              E-mail:
              <Input type="email" {...register('email')} />
              {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
            </Label>
            <Label>
              Senha:
              <Input type="password" {...register('senha')} />
              {errors.senha && <ErrorText>{errors.senha.message}</ErrorText>}
            </Label>
            <Label>
              Repita sua senha:
              <Input type="password" {...register('repitaSenha')} />
              {errors.repitaSenha && <ErrorText>{errors.repitaSenha.message}</ErrorText>}
            </Label>
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Link to="/">Entrar</Link>
        </DivForm>
      );
    };

export default CadastroForm;