import React from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from './src/assets/others/colors';
import Button from './src/components/button';

function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blue} />
      <LinearGradient
        colors={[colors.blue, colors.white]}
        style={styles.linearGradient}>
        <Image
          style={styles.logo}
          source={require('./src/assets/images/logo.png')}
        />
        <Image
          style={styles.atomo}
          source={require('./src/assets/images/atomo.png')}
        />
        <ScrollView>
          <Button
            title="RESISTOR POR CORES"
            onPress={() => {}}
            icon="ResistorIcon"></Button>
          <Button
            title="RESISTORES PARALELO"
            onPress={() => {}}
            icon="ParallelResistorIcon"></Button>
          <Button
            title="RESISTORES SÉRIE"
            onPress={() => {}}
            icon="SeriesResistorIcon"></Button>
          <Button
            title="CAPACITOR POR CORES"
            onPress={() => {}}
            icon="CapacitorIcon"></Button>
          <Button
            title="CAPACITORES PARALELO"
            onPress={() => {}}
            icon="ParallelCapacitorIcon"></Button>
          <Button
            title="CAPACITORES SÉRIE"
            onPress={() => {}}
            icon="SeriesCapacitorIcon"></Button>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  linearGradient: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  logo: {
    marginTop: 30,
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  atomo: {
    position: 'absolute',
    top: 20,
    left: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
});
export default App;
