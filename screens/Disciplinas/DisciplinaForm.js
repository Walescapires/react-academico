import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinaForm = ({ navigation }) => {
    const [dados, setDados] = useState({})

    function handelChange(valor, campo){
      setDados({...dados, [campo]: valor})
    }
  
    function salvar(){
      AsyncStorage.getItem('disciplinas').then(resultado => {

        const disciplinas = JSON.parse(resultado) || []
  
        disciplinas.push(dados)
        console.log(disciplinas)
    
        AsyncStorage.setItem('disciplinas', JSON.stringify(disciplinas))
    
        navigation.goBack()
      })
    }
  return (
    <>
    <ScrollView style={{ margin: 15 }}>
      <Text style={{ textAlign: 'center' }}>Formulário da Disciplina</Text>

      <TextInput style={{ marginTop: 10 }}
        mode='outlined'
        label='Nome'
        onChangeText={(valor) => handelChange(valor, 'nome')}
      />
      <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Curso'
          onChangeText={(valor) => handelChange(valor, 'curso')}
        />     

      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  </>
  )
}

export default DisciplinaForm