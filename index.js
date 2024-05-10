/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {
  CapacitorColors,
  CapacitorSeries,
  CapacitorParallels,
} from './src/screens/capacitor';
import {
  ResistorColors,
  ResistorParallels,
  ResistorSeries,
} from './src/screens/resistor';
//import App from './src/screens/home';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => ResistorParallels);
