import React from 'react';
import {View, StatusBar, Image, ScrollView} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import colors from '../../assets/others/colors';
import Button from '../../components/button';
import styles from './styles';

function Home({navigation}: any) {
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
            onPress={() => {
              navigation.navigate('ResistorColors');
            }}
            icon="ResistorIcon"></Button>
          <Button
            title="RESISTORES PARALELO"
            onPress={() => {
              navigation.navigate('ResistorParallels');
            }}
            icon="ParallelResistorIcon"></Button>
          <Button
            title="RESISTORES SÉRIE"
            onPress={() => {
              navigation.navigate('ResistorSeries');
            }}
            icon="SeriesResistorIcon"></Button>
          <Button
            title="CAPACITOR POR CORES"
            onPress={() => {
              navigation.navigate('CapacitorColors');
            }}
            icon="CapacitorIcon"></Button>
          <Button
            title="CAPACITORES PARALELO"
            onPress={() => {
              navigation.navigate('CapacitorParallels');
            }}
            icon="ParallelCapacitorIcon"></Button>
          <Button
            title="CAPACITORES SÉRIE"
            onPress={() => {
              navigation.navigate('CapacitorSeries');
            }}
            icon="SeriesCapacitorIcon"></Button>
        </ScrollView>
      </LinearGradient>
    </View>
  );
}
export default Home;
