import React from 'react'
import { Button, Text } from 'react-native-paper'

const Professores = ({navigation}) => {
  return (
    <>
    <Text style={{ textAlign: 'center', marginTop: 10 }}>Professores</Text>
    <Button icon='plus'
     mode='contained'
     onPress={()=> navigation.push('professores-formulario')}
     style={{marginTop: 10}}>
      Novo
      </Button>
    </>
  )
}

export default Professores