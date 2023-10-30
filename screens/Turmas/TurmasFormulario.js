import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const TurmasFormulario = ({ navigation, route }) => {
  const turmas = route.params?.turmas || {}
  const id = route.params?.id

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
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <View>
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Sala'
                value={values.sala}
                onChangeText={handleChange('sala')}
              />

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Turma'
                value={values.turma}
                onChangeText={handleChange('turma')}
              />

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default TurmasFormulario