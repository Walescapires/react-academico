import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Text, TextInput } from 'react-native-paper'

const CursoFormulario = ({navigation, route}) => {

  const curso = route.params?.curso || {}
  const id = route.params?.id
  const [dados, setDados] = useState(curso)
  

  function handelChange(valor, campo){
    setDados({...dados, [campo]: valor})
  }

  function salvar(){

    AsyncStorage.getItem('cursos').then(resultado => {

      const cursos = JSON.parse(resultado) || []

      if(id >= 0){
        cursos.splice(id, 1, dados)

      } else{
        
        cursos.push(dados)
      }
      
  
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
          value={dados.nome}
          onChangeText={(valor) => handelChange(valor, 'nome')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Duração'
          keyboardType='decimal-pad'
          value={dados.duracao}
          onChangeText={(valor) => handelChange(valor, 'duracao')}
        />

        <TextInput style={{ marginTop: 10 }}
          mode='outlined'
          label='Modalidade'
          value={dados.modalidade}
          onChangeText={(valor) => handelChange(valor, 'modalidade')}
        />

        <Button onPress={salvar}>Salvar</Button>

      </ScrollView>
    </>
  )
}

export default CursoFormulario