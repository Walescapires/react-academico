import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const DisciplinaForm = () => {
    const [dados, setDados] = useState({})

    function handelChange(valor, campo){
      setDados({...dados, [campo]: valor})
    }
  
    function salvar(){
      console.log
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