import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'
import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Disciplina = ({navigation}) => {

  const [disciplinas, setDisciplinas] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('disciplinas').then(resultado => {
        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setDisciplinas(resultado)
      })

    }, [])
  );
  return (
    <>
    <ScrollView>
    {disciplinas.map((item, i) => (
          <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
              <Text variant="bodyMedium">Nome: {item.nome}</Text>
              <Text >Curso: {item.curso}</Text>
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
          onPress={()=> navigation.push('disciplina-form')}
        />
    </>
  )
}

export default Disciplina