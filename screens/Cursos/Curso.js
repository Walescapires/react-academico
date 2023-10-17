import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useEffect, useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Curso = ({ navigation }) => {

  const [cursos, setCursos] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('cursos').then(resultado => {
        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setCursos(resultado)
      })

    }, [])
  );

  return (
    <>
      <ScrollView style={{padding: 15 }}>
       

        {cursos.map((item, i) => (
          <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
              <Text variant="bodyMedium">Nome: {item.nome}</Text>
              <Text >Duração: {item.duracao} sem.</Text>
              <Text >Modalidade: {item.modalidade}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline'/>
              <IconButton icon='delete'/>
            </Card.Actions>
          </Card>
        ))}
      </ScrollView>
      
      <FAB
          icon="plus"
          size='small'   
          style={{position: 'absolute', right: 5, bottom: 5}}
          onPress={()=> navigation.push('cursos-formulario')}
        />
    </>
  )
}


export default Curso