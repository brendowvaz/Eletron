// App.tsx

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/home';
import CapacitorScreen from './src/screens/capacitor';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CapacitorScreen">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={CapacitorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
