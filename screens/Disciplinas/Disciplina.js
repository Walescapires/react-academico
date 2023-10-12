import React from 'react'
import { Button, Text } from 'react-native-paper'

const Disciplina = ({navigation}) => {
  return (
    <>
    <Text style={{ textAlign: 'center', marginTop: 10 }}>Disciplinas</Text>
    <Button icon='plus'
     mode='contained'
     onPress={()=> navigation.push('disciplina-form')}
     style={{marginTop: 10}}>
      Novo
      </Button>
    </>
  )
}

export default Disciplina