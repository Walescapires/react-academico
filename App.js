import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { PaperProvider } from "react-native-paper";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CursoStack from "./screens/Cursos/CursoStack";
import Disciplinas from "./screens/Disciplinas/Disciplinas";
import AlunosStack from "./screens/Alunos/AlunosStack";
import ProfessoresStack from "./screens/Professores/ProfessoresStack";
import TurmasStack from "./screens/Turmas/TurmasStack";

const Tab = createMaterialBottomTabNavigator();
export default function App() {
  return (
    <>
      <PaperProvider>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen
              name="Cursos"
              component={CursoStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="notebook-multiple" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Disciplinas"
              component={Disciplinas}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="book-open-variant" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Alunos"
              component={AlunosStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-circle-outline" size={26} />
                ),
              }}
            />
            <Tab.Screen
              name="Professores"
              component={ProfessoresStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="account-tie" size={26} />
                  
                ),
              }}
            />
             <Tab.Screen
              name="Turmas"
              component={TurmasStack}
              options={{
                tabBarIcon: () => (
                  <MaterialCommunityIcons name="google-classroom" size={26} />
                  
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </>
  );
}

