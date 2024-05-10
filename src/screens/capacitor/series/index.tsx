import React from 'react';
import {
  StatusBar,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackIcon} from '../../../assets/others/svg';
import colors from '../../../assets/others/colors';
import Series from './components/series';
import styles from './styles';

function Capacitor() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.blue} />
      <LinearGradient
        colors={[colors.blue, colors.white]}
        style={styles.linearGradient}>
        <TouchableOpacity style={styles.header} onPress={() => {}}>
          <BackIcon height={20} width={20} color={colors.white} />
          <Text style={styles.headerText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tittle}>CAPACITORES EM SÉRIE</Text>
        <Image
          style={styles.atomo}
          source={require('../../../assets/images/atomo.png')}
        />
        <Series />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Capacitor;
