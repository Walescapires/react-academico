import * as Yup from 'yup';

export const professoresValidator = Yup.object().shape({
    nome: Yup.string()
      .required('Campo obrigatório'),
      cpf: Yup.string()
      .required('Campo obrigatório'),
      matricula: Yup.string()
      .required('Campo obrigatório'),
      email: Yup.string(),
      telefone: Yup.string()
      .required(),
      cep: Yup.string(),
      logradouro: Yup.string(),
      complemento: Yup.string(),
      numero: Yup.number(),
      bairro: Yup.string(),
      salario: Yup.string(), 
  })