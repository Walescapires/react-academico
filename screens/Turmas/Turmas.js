import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Turmas = ({navigation}) => {

  const [turmas, setTurmas] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('turmas').then(resultado => {
        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setTurmas(resultado)
      })

    }, [])
  );
  return (
    <>
   <ScrollView>
   {turmas.map((item, i) => (
          <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
              <Text variant="bodyMedium">Sala: {item.sala}</Text>
              <Text variant="bodyMedium">Turma: {item.turma}</Text>
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
          onPress={()=> navigation.push('turmas-formulario')}
        />
      </>
  )
}

export default Turmas