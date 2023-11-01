import * as Yup from 'yup';

const turmasValidator = Yup.object().shape({
    sala: Yup.string()
      .required('Campo obrigatório'),
    turma: Yup.string()
    .required('Campo obrigatório')
  })  

export default turmasValidator