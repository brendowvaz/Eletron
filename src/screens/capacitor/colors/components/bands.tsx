import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import styles from '../styles';

const COLOR_VALUES = {
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
  band1: string;
  band2: string;
  band3: string;
  band4: string;
  band5: string;
  setBand1: (v: string) => void;
  setBand2: (v: string) => void;
  setBand3: (v: string) => void;
  setBand4: (v: string) => void;
  setBand5: (v: string) => void;
}

const Bands: React.FC<BandsProps> = ({
  band1,
  band2,
  band3,
  band4,
  band5,
  setBand1,
  setBand2,
  setBand3,
  setBand4,
  setBand5,
}) => {
  return (
    <ScrollView style={styles.selectorsScrollView}>
      <View style={styles.selectorsContainer}>
        <Text style={styles.selectorsText}>1ª Faixa:</Text>
        <Picker
          selectedValue={band1}
          style={styles.selectors}
          onValueChange={itemValue => {
            setBand1(itemValue);
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
          selectedValue={band2}
          style={styles.selectors}
          onValueChange={itemValue => {
            setBand2(itemValue);
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
          selectedValue={band3}
          style={styles.selectors}
          onValueChange={itemValue => {
            setBand3(itemValue);
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
          selectedValue={band4}
          style={styles.selectors}
          onValueChange={itemValue => {
            setBand4(itemValue);
          }}>
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
          onValueChange={itemValue => {
            setBand5(itemValue);
          }}>
          <Picker.Item label="Marrom" value="brown" />
          <Picker.Item label="Vermelho" value="red" />
          <Picker.Item label="Amarelo" value="yellow" />
          <Picker.Item label="Azul" value="blue" />
        </Picker>
      </View>
      <Text style={styles.capacitorValueText}>
        {parseInt(COLOR_VALUES.band1[band1] + COLOR_VALUES.band2[band2]) +
          COLOR_VALUES.band3[band3] +
          ' ' +
          COLOR_VALUES.band4[band4] +
          ' ' +
          COLOR_VALUES.band5[band5]}
      </Text>
    </ScrollView>
  );
};

export default Bands;
