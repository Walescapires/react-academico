import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursoFormulario = () => {

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
        <Text>Formulário do Cruso</Text>

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