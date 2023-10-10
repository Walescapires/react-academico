import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react'
import Curso from './Curso';
import CursoFormulario from './CursoFormulario';

const Stack = createNativeStackNavigator();

const CursoStack = () => {
  return (
    <>
            <Stack.Navigator>
                <Stack.Screen name="cursos" component={Curso} 
                options={{ title: 'Cursos' }} />
                <Stack.Screen name="cursos-formulario"
                 component={CursoFormulario} 
                 options={{ title: 'Fomulario' }} />
            </Stack.Navigator>
        </>
  )
}

export default CursoStack