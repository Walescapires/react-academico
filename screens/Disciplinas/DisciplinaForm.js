import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Formik } from 'formik'
import disciplinaValidator from '../../validator/disciplinaValidator'
import { useEffect } from 'react'
import { Picker } from '@react-native-picker/picker'

const DisciplinaForm = ({ navigation, route }) => {

  let disciplinas = {
    nome: '',
    curso_id: ''
  }

  const [cursos, setCursos] = useState([])

  const id = route.params?.id

  if (id >= 0) {
    disciplinas = route.params?.disciplina
  }

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []
      setCursos(resultado)
    })
  },[])

  function salvar(dados) {
    AsyncStorage.getItem('disciplinas').then(resultado => {

      const disciplinas = JSON.parse(resultado) || []

      if (id >= 0) {
        disciplinas.splice(id, 1, dados)
      } else {
        disciplinas.push(dados)
      }

      AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))

      navigation.goBack()
    })
  }
  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ textAlign: 'center' }}>Formulário da Disciplina</Text>
        <Formik
          initialValues={disciplinas}
          validationSchema={disciplinaValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Nome'
                value={values.nome}
                onChangeText={handleChange('nome')}
              />
              {(errors.nome && touched.nome) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.nome}
                </Text>
              }

              <Picker
                selectedValue={values.curso_id}
                onValueChange={handleChange('curso_id')}>
                <Picker.Item label='Curso' value=''/>
                {cursos.map((item, i) => (
                  <Picker.Item key={i}
                    label={item.nome}
                    value={item.nome}
                  />
                ))}
              </Picker>
              {(errors.curso_id && touched.curso_id) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.curso_id}
                </Text>
              }
              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}
export default DisciplinaForm