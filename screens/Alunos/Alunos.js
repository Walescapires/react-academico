import React from 'react'
import { Button, Text } from 'react-native-paper'

const Alunos = ({navigation}) => {
  return (
    <>
    <Text style={{ textAlign: 'center', marginTop: 10 }}>Alunos</Text>
    <Button icon='plus'
     mode='contained'
     onPress={()=> navigation.push('alunos-formulario')}
     style={{marginTop: 10}}>
      Novo
      </Button>
    </>
  )
}

export default Alunos