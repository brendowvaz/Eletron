import React, {useState} from 'react';
import {
  StatusBar,
  Image,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {BackIcon, ResistorColors} from '../../../assets/others/svg';
import colors from '../../../assets/others/colors';
import Bands from './components/bands';
import styles from './styles';

function Resistor({navigation}: any) {
  const [bandQtd, setBandQtd] = useState(5);
  const [band1, setBand1] = useState('black');
  const [band2, setBand2] = useState('black');
  const [band3, setBand3] = useState('black');
  const [band4, setBand4] = useState('black');
  const [band5, setBand5] = useState('blue');

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
        <Text style={styles.tittle}>RESISTOR POR CORES</Text>
        <Image
          style={styles.atomo}
          source={require('../../../assets/images/atomo.png')}
        />
        <ResistorColors
          width={200}
          height={100}
          style={styles.resistor}
          colors={[band1, band2, band3, band4, band5].map((b, i) => {
            if (bandQtd >= i + 1) return b;
            return '#806d34';
          })}
        />
        <Bands
          bandQtd={bandQtd}
          band1={band1}
          band2={band2}
          band3={band3}
          band4={band4}
          band5={band5}
          setBandQtd={setBandQtd}
          setBand1={setBand1}
          setBand2={setBand2}
          setBand3={setBand3}
          setBand4={setBand4}
          setBand5={setBand5}
        />
      </LinearGradient>
    </SafeAreaView>
  );
}

export default Resistor;
