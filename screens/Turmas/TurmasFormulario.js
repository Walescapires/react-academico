import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const TurmasFormulario = () => {
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
      <Text style={{ textAlign: 'center' }}>Formulário da Turma</Text>

      <TextInput style={{ marginTop: 10 }}
        mode='outlined'
        label='Sala'
        onChangeText={(valor) => handelChange(valor, 'sala')}
      />

      <Button onPress={salvar}>Salvar</Button>

    </ScrollView>
  </>
  )
}

export default TurmasFormulario