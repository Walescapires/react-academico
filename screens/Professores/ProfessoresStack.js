import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Professores from './Professores';
import ProfessoresFormulario from './ProfessoresFormulario';

const Stack = createNativeStackNavigator();

const ProfessoresStack = () => {
  return (
    <>
    <Stack.Navigator>
        <Stack.Screen name="professores" 
        component={Professores}
         options={{ title: 'Professores' }} />
        <Stack.Screen name="professores-formulario" 
        component={ProfessoresFormulario} 
        options={{ title: 'Formulario' }} />
    </Stack.Navigator>
</>
  )
}

export default ProfessoresStack