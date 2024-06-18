import { SubmitHandler, useForm } from "react-hook-form";


interface IFormInput { 
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const App: React.FC = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<IFormInput>();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    console.log(data);
  }

  return (
    <div>
      <h2>Cadastro de Usuário</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Nome Completo</label>
          <input
            type="text"
            {...register('fullName', {required: 'Nome completo é obrigatório'})}
          />
        </div>
        <div>
          <label>E-mail</label>
          <input
            type="email"
            {...register('email', {
              required: 'E-mail é obrigatório'
            })}
          />
        </div>
      </form>
    </div>
  )
}

