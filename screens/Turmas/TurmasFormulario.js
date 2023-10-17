import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const TurmasFormulario = ({navigation}) => {
  const [dados, setDados] = useState({})

  function handelChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){
    AsyncStorage.getItem('turmas').then(resultado => {

      const turmas = JSON.parse(resultado) || []

      turmas.push(dados)
      console.log(turmas)
  
      AsyncStorage.setItem('turmas', JSON.stringify(turmas))
  
      navigation.goBack()
    })
  }
  return (
    <>
    <ScrollView style={{ margin: 15 }}>
      <Text style={{ textAlign: 'center' }}>Formulário da Turma</Text>

      <TextInput style={{ marginTop: 10 }}
        mode='outlined'
        label='Sala'
        onChangeText={(valor) => handelChange(valor, 'sala')}
      />

<TextInput style={{ marginTop: 10 }}
        mode='outlined'
        label='Turma'
        onChangeText={(valor) => handelChange(valor, 'turma')}
      />

      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  </>
  )
}

export default TurmasFormulario