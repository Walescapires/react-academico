import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Alunos from './Alunos';
import AlunosFormulario from './AlunosFormulario';

const Stack = createNativeStackNavigator();

const AlunosStack = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="alunos" component={Alunos} options={{ title: 'Alunos' }} />
        <Stack.Screen name="alunos-formulario" component={AlunosFormulario} options={{ title: 'Formulario' }} />
        
    </Stack.Navigator>
</>
  )
}

export default AlunosStack