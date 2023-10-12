import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Disciplina from './Disciplina';
import DisciplinaForm from './DisciplinaForm';

const Stack = createNativeStackNavigator();

const DisciplinaStack = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="disciplina" component={Disciplina} 
        options={{ title: 'Disciplinas' }} />
        <Stack.Screen name="disciplina-form"
         component={DisciplinaForm} 
         options={{ title: 'Fomulario' }} />
    </Stack.Navigator>
</>
  )
}

export default DisciplinaStack