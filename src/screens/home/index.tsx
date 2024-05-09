import React from 'react';
import {View, StatusBar, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../assets/others/colors';
import Button from '../../components/button';
import styles from './styles';

function Home() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={colors.blue} />
      <LinearGradient
        colors={[colors.blue, colors.white]}
        style={styles.linearGradient}>
        <Image
          style={styles.logo}
          source={require('../../assets/images/logo.png')}
        />
        <Image
          style={styles.atomo}
          source={require('../../assets/images/atomo.png')}
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
export default Home;
