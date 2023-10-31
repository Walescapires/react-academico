import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const ProfessoresFormulario = ({ navigation, route }) => {
  const professores = route.params?.professores || {}
  const id = route.params?.id

  function salvar(dados) {
    AsyncStorage.getItem('professores').then(resultado => {

      const professores = JSON.parse(resultado) || []

      if (id >= 0) {
        professores.splice(id, 1, dados)
      } else {
        professores.push(dados)
      }

      AsyncStorage.setItem('professores', JSON.stringify(professores))

      navigation.goBack()
    })
  }

  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ textAlign: 'center' }}>Formulário do Professor</Text>
        <Formik
          initialValues={professores}
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
                value={dados.matricula}
                keyboardType='numeric'
                onChangeText={(valor) => handelChange(valor, 'matricula')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Email'
                value={dados.email}
                keyboardType='email-address'
                onChangeText={(valor) => handelChange(valor, 'email')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Telefone'
                value={dados.telefone}
                keyboardType='phone-pad'
                onChangeText={(valor) => handelChange(valor, 'telefone')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='CEP'
                value={dados.cep}
                keyboardType='numeric'
                onChangeText={(valor) => handelChange(valor, 'CEP')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Logradouro'
                value={dados.logradouro}
                onChangeText={(valor) => handelChange(valor, 'logradouro')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Complemento'
                value={dados.complemento}
                onChangeText={(valor) => handelChange(valor, 'complemento')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Número'
                value={dados.numero}
                keyboardType='numeric'
                onChangeText={(valor) => handelChange(valor, 'numero')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Bairro'
                value={dados.bairro}
                onChangeText={(valor) => handelChange(valor, 'bairro')}
              />
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Salário'
                value={dados.salario}
                keyboardType='decimal-pad'
                onChangeText={(valor) => handelChange(valor, 'salario')}
              />
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default ProfessoresFormulario