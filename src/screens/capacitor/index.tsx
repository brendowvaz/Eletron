import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Dimensions,
  Image,
  ScrollView,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Picker} from '@react-native-picker/picker';

import colors from '../../assets/others/colors';
import {BackIcon, CapacitorColors} from '../../assets/others/svg';

const COLORVALUES = {
  band1: {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    gray: '8',
    white: '9',
  },
  band2: {
    black: '0',
    brown: '1',
    red: '2',
    orange: '3',
    yellow: '4',
    green: '5',
    blue: '6',
    violet: '7',
    gray: '8',
    white: '9',
  },
  band3: {
    black: 1,
    brown: 10,
    red: 100,
    orange: 1000,
    yellow: 10000,
    green: 100000,
  },
  band4: {
    black: '(±20%)',
    green: '(±5%)',
    white: '(±10%)',
  },
  band5: {
    brown: '100V',
    red: '250V',
    yellow: '400V',
    blue: '630V',
  },
};

function Capacitor() {
  const [band1, setBand1] = useState('black');
  const [band2, setBand2] = useState('black');
  const [band3, setBand3] = useState('black');
  const [band4, setBand4] = useState('white');
  const [band5, setBand5] = useState('blue');

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
        <Text style={styles.tittle}>CAPACITOR POR CORES</Text>
        <Image
          style={styles.atomo}
          source={require('../../assets/images/atomo.png')}
        />
        <ScrollView>
          <CapacitorColors
            width={200}
            height={200}
            style={styles.capacitor}
            colors={[band1, band2, band3, band4, band5]}
          />
          <View style={styles.selectorsContainer}>
            <Text style={styles.selectorsText}>1ª Faixa:</Text>
            <Picker
              selectedValue={band1}
              style={styles.selectors}
              onValueChange={itemValue => setBand1(itemValue)}>
              <Picker.Item label="Preto" value="black" />
              <Picker.Item label="Marrom" value="brown" />
              <Picker.Item label="Vermelho" value="red" />
              <Picker.Item label="Laranja" value="orange" />
              <Picker.Item label="Amarelo" value="yellow" />
              <Picker.Item label="Verde" value="green" />
              <Picker.Item label="Azuk" value="blue" />
              <Picker.Item label="Violeta" value="violet" />
              <Picker.Item label="Cinza" value="gray" />
              <Picker.Item label="Branco" value="white" />
            </Picker>
          </View>
          <View style={styles.selectorsContainer}>
            <Text style={styles.selectorsText}>2ª Faixa:</Text>
            <Picker
              selectedValue={band2}
              style={styles.selectors}
              onValueChange={itemValue => setBand2(itemValue)}>
              <Picker.Item label="Preto" value="black" />
              <Picker.Item label="Marrom" value="brown" />
              <Picker.Item label="Vermelho" value="red" />
              <Picker.Item label="Laranja" value="orange" />
              <Picker.Item label="Amarelo" value="yellow" />
              <Picker.Item label="Verde" value="green" />
              <Picker.Item label="Azuk" value="blue" />
              <Picker.Item label="Violeta" value="violet" />
              <Picker.Item label="Cinza" value="gray" />
              <Picker.Item label="Branco" value="white" />
            </Picker>
          </View>
          <View style={styles.selectorsContainer}>
            <Text style={styles.selectorsText}>3ª Faixa:</Text>
            <Picker
              selectedValue={band3}
              style={styles.selectors}
              onValueChange={itemValue => setBand3(itemValue)}>
              <Picker.Item label="Preto" value="black" />
              <Picker.Item label="Marrom" value="brown" />
              <Picker.Item label="Vermelho" value="red" />
              <Picker.Item label="Laranja" value="orange" />
              <Picker.Item label="Amarelo" value="yellow" />
              <Picker.Item label="Verde" value="green" />
            </Picker>
          </View>
          <View style={styles.selectorsContainer}>
            <Text style={styles.selectorsText}>4ª Faixa:</Text>
            <Picker
              selectedValue={band4}
              style={styles.selectors}
              onValueChange={itemValue => setBand4(itemValue)}>
              <Picker.Item label="Preto" value="black" />
              <Picker.Item label="Verde" value="green" />
              <Picker.Item label="Branco" value="white" />
            </Picker>
          </View>
          <View style={styles.selectorsContainer}>
            <Text style={styles.selectorsText}>5ª Faixa:</Text>
            <Picker
              selectedValue={band5}
              style={styles.selectors}
              onValueChange={itemValue => setBand5(itemValue)}>
              <Picker.Item label="Preto" value="black" />
              <Picker.Item label="Marrom" value="brown" />
              <Picker.Item label="Vermelho" value="red" />
              <Picker.Item label="Amarelo" value="yellow" />
              <Picker.Item label="Azul" value="blue" />
            </Picker>
          </View>
          <Text style={styles.capacitorValueText}>
            {(COLORVALUES.band1[band1] + COLORVALUES.band2[band2]) *
              COLORVALUES.band3[band3] +
              'pF ' +
              COLORVALUES.band4[band4] +
              ' ' +
              COLORVALUES.band5[band5]}
          </Text>
        </ScrollView>
      </LinearGradient>
    </SafeAreaView>
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
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  tittle: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.white,
    paddingVertical: 10,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  linearGradient: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  atomo: {
    position: 'absolute',
    top: 20,
    left: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
  },
  capacitor: {
    marginHorizontal: 'auto',
  },
  selectorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  selectors: {
    height: 50,
    width: 150,
    marginLeft: 10,
    color: colors.white,
    backgroundColor: colors.primary,
  },
  selectorsText: {
    color: colors.white,
    fontSize: 20,
    marginLeft: 20,
  },
  capacitorValueText: {
    color: colors.white,
    fontSize: 25,
    backgroundColor: 'rgba(0,0,0,.7)',
    textAlign: 'center',
    paddingVertical: 10,
  },
});
export default Capacitor;
