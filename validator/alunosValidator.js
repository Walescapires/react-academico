import * as Yup from 'yup';

const alunosValidator = Yup.object().shape({
    nome: Yup.string()
    .min(5, 'Valor muito curto')
    .max(10, 'Valor muito grande')
    .required('Campo obrigatório'),
    duracao: Yup.number(),
    email: Yup.string().email(),
  })

  export default alunosValidator