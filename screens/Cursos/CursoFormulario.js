import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursoFormulario = ({navigation}) => {

  const [dados, setDados] = useState({})
  

  function handelChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

      cursos.push(dados)
      console.log(cursos)
  
      AsyncStorage.setItem('cursos', JSON.stringify(cursos))
  
      navigation.goBack()
    })

  }
  return (
    <>
      <ScrollView style={{ margin: 15 }}>
        <Text style={{ textAlign: 'center' }}>Formulário do Curso</Text>

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Nome'
          onChangeText={(valor) => handelChange(valor, 'nome')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Duração'
          keyboardType='decimal-pad'
          onChangeText={(valor) => handelChange(valor, 'duracao')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Modalidade'
          onChangeText={(valor) => handelChange(valor, 'modalidade')}
        />

        <Button onPress={salvar}>Salvar</Button>

      </ScrollView>
    </>
  )
}

export default CursoFormulario