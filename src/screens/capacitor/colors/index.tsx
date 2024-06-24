import React, {useState} from 'react';
import {
  StatusBar,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackIcon, CapacitorColors} from '../../../assets/others/svg';
import colors from '../../../assets/others/colors';
import Bands from './components/bands';
import styles from './styles';

function Capacitor({navigation}: any) {
  const [bands, setBands] = useState([
    'black',
    'black',
    'black',
    'white',
    'blue',
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.blue} />
      <LinearGradient
        colors={[colors.blue, colors.white]}
        style={styles.linearGradient}>
        <TouchableOpacity
          style={styles.header}
          onPress={() => navigation.goBack()}>
          <BackIcon height={20} width={20} color={colors.white} />
          <Text style={styles.headerText}>Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.tittle}>CAPACITOR POR CORES</Text>
        <Image
          style={styles.atomo}
          source={require('../../../assets/images/atomo.png')}
        />
        <CapacitorColors
          width={200}
          height={200}
          style={styles.capacitor}
          colors={bands}
        />
        <Bands bands={bands} setBands={setBands} />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Capacitor;
