import React from 'react'
import { Button, Text } from 'react-native-paper'

const Turmas = ({navigation}) => {
  return (
    <>
    <Text style={{ textAlign: 'center', marginTop: 10 }}>Turmas</Text>
    <Button icon='plus'
     mode='contained'
     onPress={()=> navigation.push('turmas-formulario')}
     style={{marginTop: 10}}>
      Novo
      </Button>
      </>
  )
}

export default Turmas