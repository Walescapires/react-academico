import AsyncStorage from '@react-native-async-storage/async-storage'
import { Formik } from 'formik'
import React, { useState } from 'react'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { professoresValidator } from '../../validator/professoresValidator'

const ProfessoresFormulario = ({ navigation, route }) => {

  let professores = {
    nome: '',
    cpf: '',
    matricula: '',
    email: '',
    telefone: '',
    cep: '',
    logradouro: '',
    complemento: '',
    numero: '',
    bairro: '',
    salario: '',
  }
  const id = route.params?.id

  if (id >= 0) {
    professores = route.params?.professores
  }

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
          validationSchema={professoresValidator}
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

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='CPF'
                value={values.cpf}
                keyboardType='decimal-pad'
                onChangeText={(value) => { setFieldValue('cpf', mask(value, '999.999.999-99'))}}
              />
              {(errors.cpf && touched.cpf) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.cpf}
                </Text>
              }

              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Matricula'
                value={values.matricula}
                keyboardType='numeric'
                onChangeText={handleChange('matricula')}
              />
              {(errors.matricula && touched.matricula) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.matricula}
                </Text>
              }
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
                onChangeText={(value) => { setFieldValue('telefone', mask(value, '(99) 99999-9999')) }}
              />
              {(errors.telefone && touched.telefone) &&
                <Text style={{ color: 'red', marginTop: 5 }}>
                  {errors.telefone}
                </Text>
              }
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='CEP'
                value={values.cep}
                keyboardType='numeric'
                onChangeText={(value) => { setFieldValue('cep', mask(value, '99.999-999')) }}
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
                label='Número'
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
              <TextInput style={{ marginTop: 10 }}
                mode='outlined'
                label='Salário'
                value={values.salario}
                keyboardType='decimal-pad'
                onChangeText={handleChange('salario')}
              />
              <Button onPress={handleSubmit}>Salvar</Button>
            </View>
          )}
        </Formik>
      </ScrollView>
    </>
  )
}

export default ProfessoresFormulario