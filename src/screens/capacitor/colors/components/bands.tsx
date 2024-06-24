import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from '../styles';

const COLOR_VALUES: ColorMap = {
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
    black: 'pF',
    brown: '0pF',
    red: '00pF',
    orange: 'nF',
    yellow: '0nF',
    green: '00nF',
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

interface BandsProps {
  bands: string[];
  setBands: (v: string[]) => void;
}

interface BandValues {
  [key: string]: string;
}

interface ColorMap {
  band1: BandValues;
  band2: BandValues;
  band3: BandValues;
  band4: BandValues;
  band5: BandValues;
}
const Bands: React.FC<BandsProps> = ({bands, setBands}) => {
  return (
    <ScrollView style={styles.selectorsScrollView}>
      <View style={styles.selectorsContainer}>
        <Text style={styles.selectorsText}>1ª Faixa:</Text>
        <Picker
          selectedValue={bands[0]}
          style={styles.selectors}
          onValueChange={itemValue => {
            const arr = [...bands];
            arr[0] = itemValue;
            setBands(arr);
          }}>
          <Picker.Item label="Preto" value="black" />
          <Picker.Item label="Marrom" value="brown" />
          <Picker.Item label="Vermelho" value="red" />
          <Picker.Item label="Laranja" value="orange" />
          <Picker.Item label="Amarelo" value="yellow" />
          <Picker.Item label="Verde" value="green" />
          <Picker.Item label="Azul" value="blue" />
          <Picker.Item label="Violeta" value="violet" />
          <Picker.Item label="Cinza" value="gray" />
          <Picker.Item label="Branco" value="white" />
        </Picker>
      </View>
      <View style={styles.selectorsContainer}>
        <Text style={styles.selectorsText}>2ª Faixa:</Text>
        <Picker
          selectedValue={bands[1]}
          style={styles.selectors}
          onValueChange={itemValue => {
            const arr = [...bands];
            arr[1] = itemValue;
            setBands(arr);
          }}>
          <Picker.Item label="Preto" value="black" />
          <Picker.Item label="Marrom" value="brown" />
          <Picker.Item label="Vermelho" value="red" />
          <Picker.Item label="Laranja" value="orange" />
          <Picker.Item label="Amarelo" value="yellow" />
          <Picker.Item label="Verde" value="green" />
          <Picker.Item label="Azul" value="blue" />
          <Picker.Item label="Violeta" value="violet" />
          <Picker.Item label="Cinza" value="gray" />
          <Picker.Item label="Branco" value="white" />
        </Picker>
      </View>
      <View style={styles.selectorsContainer}>
        <Text style={styles.selectorsText}>3ª Faixa:</Text>
        <Picker
          selectedValue={bands[2]}
          style={styles.selectors}
          onValueChange={itemValue => {
            const arr = [...bands];
            arr[2] = itemValue;
            setBands(arr);
          }}>
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
          selectedValue={bands[3]}
          style={styles.selectors}
          onValueChange={itemValue => {
            const arr = [...bands];
            arr[3] = itemValue;
            setBands(arr);
          }}>
          <Picker.Item label="Preto" value="black" />
          <Picker.Item label="Verde" value="green" />
          <Picker.Item label="Branco" value="white" />
        </Picker>
      </View>
      <View style={styles.selectorsContainer}>
        <Text style={styles.selectorsText}>5ª Faixa:</Text>
        <Picker
          selectedValue={bands[4]}
          style={styles.selectors}
          onValueChange={itemValue => {
            const arr = [...bands];
            arr[4] = itemValue;
            setBands(arr);
          }}>
          <Picker.Item label="Marrom" value="brown" />
          <Picker.Item label="Vermelho" value="red" />
          <Picker.Item label="Amarelo" value="yellow" />
          <Picker.Item label="Azul" value="blue" />
        </Picker>
      </View>
      <Text style={styles.capacitorValueText}>
        {parseInt(COLOR_VALUES.band1[bands[0]] + COLOR_VALUES.band2[bands[1]]) +
          COLOR_VALUES.band3[bands[2]] +
          ' ' +
          COLOR_VALUES.band4[bands[3]] +
          ' ' +
          COLOR_VALUES.band5[bands[4]]}
      </Text>
    </ScrollView>
  );
};

export default Bands;
