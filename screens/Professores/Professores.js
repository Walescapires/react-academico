import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { Button, Card, FAB, IconButton, Text } from 'react-native-paper'

const Professores = ({navigation}) => {

  const [professores, setProfessores] = useState([])

  useFocusEffect(
    React.useCallback(() => {

      AsyncStorage.getItem('professores').then(resultado => {
        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setProfessores(resultado)
      })

    }, [])
  );
  return (
    <>
      {professores.map((item, i) => (
          <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
              <Text variant="bodyMedium">Nome: {item.nome}</Text>
              <Text >Matricula: {item.matricula}</Text>
              <Text >E-mail: {item.email}</Text>
              <Text >Telefone: {item.telefone}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton icon='pencil-outline'/>
              <IconButton icon='delete'/>
            </Card.Actions>
          </Card>
        ))}
        <FAB
          icon="plus"
          size='small'   
          style={{position: 'absolute', right: 5, bottom: 5}}
          onPress={()=> navigation.push('professores-formulario')}
        />
    </>
  )
}

export default Professores