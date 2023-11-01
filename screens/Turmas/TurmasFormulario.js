import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import turmasValidator from '../../validator/turmasValidator'

const TurmasFormulario = ({ navigation, route }) => {

  let turmas = {
    sala: '',
    turma: '',
  }
  const id = route.params?.id

  if (id >= 0) {
    turmas = route.params?.turmas
  }

  function salvar(dados) {
    AsyncStorage.getItem('turmas').then(resultado => {

      const turmas = JSON.parse(resultado) || []

      if (id >= 0) {
        turmas.splice(id, 1, dados)
      } else {
        turmas.push(dados)
      }

      AsyncStorage.setItem('turmas', JSON.stringify(turmas))

      navigation.goBack()
    })
  }
  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ textAlign: 'center' }}>Formulário da Turma</Text>
        <Formik
          initialValues={turmas}
          validationSchema={turmasValidator}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit, errors, touched, setFieldValue }) => (
            <View>
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Sala'
                value={values.sala}
                onChangeText={handleChange('sala')}
              />

              {(errors.sala && touched.sala) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.sala}
                </Text>
              }

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Turma'
                value={values.turma}
                onChangeText={handleChange('turma')}
              />
              {(errors.turma && touched.turma) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.turma}
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

export default TurmasFormulario