import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';

import PlanetsScreen from './src/screens/PlanetsScreen';
import StudentScreen from './src/screens/StudentScreen';
import colors from './src/theme/colors';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" />
      <Stack.Navigator
        initialRouteName="Student"
        screenOptions={{
          headerStyle: { backgroundColor: colors.background },
          headerTintColor: colors.primary,
          headerTitleStyle: { color: colors.text, fontWeight: 'bold' },
          contentStyle: { backgroundColor: colors.background },
        }}
      >
        <Stack.Screen
          name="Student"
          component={StudentScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Planets"
          component={PlanetsScreen}
          options={{ title: 'Planetas' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
