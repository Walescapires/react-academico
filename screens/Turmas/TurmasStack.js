import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Turmas from './Turmas';
import TurmasFormulario from './TurmasFormulario';

const Stack = createNativeStackNavigator();

const TurmasStack = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="turmas" component={Turmas} options={{ title: 'Turmas' }} />
        <Stack.Screen name="turmas-formulario" component={TurmasFormulario} options={{ title: 'Formulario' }} />
    </Stack.Navigator>
</>
  )
}

export default TurmasStack