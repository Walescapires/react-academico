import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react'
import { ScrollView } from 'react-native';
import { Button, Card, Dialog, FAB, IconButton, Portal, Text } from 'react-native-paper'

const Alunos = ({ navigation }) => {

  const [alunos, setAlunos] = useState([])
  const [idExcluir, setIdExcluir] = useState(0)

  const [visible, setVisible] = React.useState(false);

  const hideDialog = () => setVisible(false);


  useFocusEffect(
    React.useCallback(() => {

   carregarDados()

    }, [])
    );

    function carregarDados() {
      AsyncStorage.getItem('alunos').then(resultado => {
        resultado = JSON.parse(resultado) || []

        console.log(resultado)
        setAlunos(resultado)
      })
    }
    function confirmarExclusao(id) {
      setIdExcluir(id)
      setVisible(true)
    }   
    
    function excluir() {
      alunos.splice(idExcluir, 1)
      AsyncStorage.setItem('alunos', JSON.stringify(alunos))
      carregarDados()
      setVisible(false)
    }

  return (
    <>
    <ScrollView style={{ padding: 15 }}>
    {alunos.map((item, i) => (
          <Card key={i} mode='outlined' style={{marginBottom: 10}}>
            <Card.Content>
              <Text variant="bodyMedium">Nome: {item.nome}</Text>
              <Text >Matricula: {item.matricula}</Text>
              <Text >E-mail: {item.email}</Text>
              <Text >Telefone: {item.telefone}</Text>
            </Card.Content>
            <Card.Actions>
              <IconButton
              icon='pencil-outline'
              onPress={() => navigation.push('alunos-formulario', {id: i, alunos: item})}
              />
              <IconButton 
              icon='delete'
              onPress={() => confirmarExclusao(i)}
              />
            </Card.Actions>
          </Card>
        ))}
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <Dialog.Content>
              <Text variant="bodyMedium">Deseja excluir o registro?</Text>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={excluir}>Sim</Button>
              <Button onPress={hideDialog}>Não</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
    </ScrollView>

    <FAB
          icon="plus"
          size='small'   
          style={{position: 'absolute', right: 5, bottom: 5}}
          onPress={()=> navigation.push('alunos-formulario')}
        />
    </>
  )
}

export default Alunos