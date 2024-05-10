import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Home from '../screens/home';
import {
  CapacitorColors,
  CapacitorSeries,
  CapacitorParallels,
} from '../screens/capacitor';
import {
  ResistorColors,
  ResistorParallels,
  ResistorSeries,
} from '../screens/resistor';

const Stack = createStackNavigator();

function AppRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="CapacitorColors" component={CapacitorColors} />
      <Stack.Screen name="CapacitorSeries" component={CapacitorSeries} />
      <Stack.Screen name="CapacitorParallels" component={CapacitorParallels} />
      <Stack.Screen name="ResistorColors" component={ResistorColors} />
      <Stack.Screen name="ResistorParallels" component={ResistorParallels} />
      <Stack.Screen name="ResistorSeries" component={ResistorSeries} />
    </Stack.Navigator>
  );
}

export default AppRoutes;
