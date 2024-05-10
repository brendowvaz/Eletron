/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {
  CapacitorColors,
  CapacitorSeries,
  CapacitorParallels,
} from './src/screens/capacitor';
//import App from './src/screens/home';
//import App from './src/screens/resistor';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => CapacitorParallels);
