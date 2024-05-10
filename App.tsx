import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import AppRoutes from './src/routes/app.routes';

function App() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}

export default App;
