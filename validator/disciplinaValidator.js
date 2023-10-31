import * as Yup from 'yup';

const disciplinaValidator = Yup.object().shape({
    nome: Yup.string()
      .required('Campo obrigatório'),
      curso_id: Yup.string()
    .required()
  })

export default disciplinaValidator