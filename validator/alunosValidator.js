import * as Yup from 'yup';

const alunosValidator = Yup.object().shape({
    nome: Yup.string()
    .required('Campo obrigatório'),
    DataNascimento: Yup.date().default(() => new Date()),
    cpf: Yup.string()
    .required('Campo obrigatório'),
    matricula: Yup.string()
    .required('Campo obrigatório'),
    email: Yup.string().email()
    .required(),
    telefone: Yup.string()
    .required('Campo obrigatório'),
    cep: Yup.string(),
    logradouro: Yup.string(),
    complemento: Yup.string(),
    numero: Yup.number(),
    bairro: Yup.string()
  })

  export default alunosValidator