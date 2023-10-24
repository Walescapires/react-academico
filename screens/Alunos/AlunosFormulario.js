import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const AlunosFormulario = ({ navigation, route }) => {
  const alunos = route.params?.alunos || {}
  const id = route.params?.id

  function salvar(dados) {
    AsyncStorage.getItem('alunos').then(resultado => {

      const alunos = JSON.parse(resultado) || []

      if (id >= 0) {
        alunos.splice(id, 1, dados)

      } else {

        alunos.push(dados)
      }
      AsyncStorage.setItem('alunos', JSON.stringify(alunos))

      navigation.goBack()
    })
  }
  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ textAlign: 'center' }}>Formulário do Aluno</Text>
        <Formik
          initialValues={alunos}
          onSubmit={values => salvar(values)}
        >
          {({ values, handleChange, handleSubmit }) => (
            <View>
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Nome'
                value={values.nome}
                onChangeText={handleChange('nome')}
              />

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='CPF'
                value={values.cpf}
                keyboardType='decimal-pad'
                onChangeText={handleChange('CPF')}
              />

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Matricula'
                value={values.matricula}
                keyboardType='numeric'
                onChangeText={handleChange('matricula')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Email'
                value={values.email}
                keyboardType='email-address'
                onChangeText={handleChange('email')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Telefone'
                value={values.telefone}
                keyboardType='phone-pad'
                onChangeText={handleChange('telefone')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='CEP'
                value={values.cep}
                keyboardType='numeric'
                onChangeText={handleChange('CEP')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Logradouro'
                value={values.logradouro}
                onChangeText={handleChange('logradouro')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Complemento'
                value={values.complemento}
                onChangeText={handleChange('complemento')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Numero'
                value={values.numero}
                keyboardType='numeric'
                onChangeText={handleChange('numero')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Bairro'
                value={values.bairro}
                onChangeText={handleChange('bairro')}
              />

              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>

      </ScrollView>
    </>
  )
}

export default AlunosFormulario