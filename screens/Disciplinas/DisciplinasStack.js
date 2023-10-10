import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Disciplinas from './Disciplinas';
import Formulario from './Formulario';

const Stack = createNativeStackNavigator();

const DisciplinasStack = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="disciplinas" component={Disciplinas} options={{ title: 'Disciplinas' }} />
        <Stack.Screen name="disciplinas-formulario" component={Formulario} options={{ title: 'Formulario' }} />
    </Stack.Navigator>
</>
  )
}

export default DisciplinasStack