import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView, View } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'
import { Formik } from 'formik'

const DisciplinaForm = ({ navigation, route }) => {
  const disciplinas = route.params?.disciplina || {}
  const id = route.params?.id

    function salvar(dados){
      AsyncStorage.getItem('disciplinas').then(resultado => {

        const disciplinas = JSON.parse(resultado) || []
        
        if(id >=0){
          disciplinas.splice(id, 1, dados)
        } else{
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
                        label='Curso'
                        value={values.curso}
                        onChangeText={handleChange('curso')}
                      />     
              
                    <Button onPress={handleSubmit}>Salvar</Button>             
            </View>
          )}
        </Formik>
    </ScrollView>
  </>
  )
}

export default DisciplinaForm