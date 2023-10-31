import * as Yup from 'yup';

const cursoValidator = Yup.object().shape({
  nome: Yup.string()
    .required('Campo obrigatório'),
  duracao: Yup.number(),
  modalidade: Yup.string()
})

export default cursoValidator