import AsyncStorage from '@react-native-async-storage/async-storage'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, Text } from 'react-native-paper'

const Curso = ({ navigation }) => {

  const [cursos, setCursos] = useState([])

  useEffect(() => {
    AsyncStorage.getItem('cursos').then(resultado => {
      resultado = JSON.parse(resultado) || []

      console.log(resultado)
      setCursos(resultado)
    })
  }, [])

  return (
    <>
    <ScrollView>
      <Text style={{ textAlign: 'center', marginTop: 10 }}>Cursos</Text>
      <Button icon='plus'
        mode='contained'
        onPress={() => navigation.push('cursos-formulario')}
        style={{ marginTop: 10 }}>
        Novo
      </Button>

      {cursos.map(item => (
        <Card>
          <Card.Content>
            <Text variant="bodyMedium">Nome: {item.nome}</Text>
            <Text >Duração: {item.duracao}</Text>
            <Text>Modalidade: {item.modalidade}</Text>
          </Card.Content>
        </Card>
      ))}
      </ScrollView>
    </>
  )
}

export default Curso