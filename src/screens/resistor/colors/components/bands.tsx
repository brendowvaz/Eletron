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
  band4: {
    black: 'Ω',
    brown: '0Ω',
    red: '00Ω',
    orange: 'kΩ',
    yellow: '0kΩ',
    green: '00kΩ',
    blue: 'MΩ',
    violet: '0MΩ',
    gold: 'x0,1Ω',
    silver: 'x0,01Ω',
  },
  band5: {
    brown: '(±1%)',
    red: '(±2%)',
    green: '(±0,5%)',
    blue: '(±0,25%)',
    violet: '(±0,1%)',
    gray: '(±0,05%)',
    gold: '(±5%)',
    silver: '(±10%)',
    null: '(±20%)',
  },
};

interface BandsProps {
  bandQtd: number;
  band1: string;
  band2: string;
  band3: string;
  band4: string;
  band5: string;
  setBandQtd: (v: number) => void;
  setBand1: (v: string) => void;
  setBand2: (v: string) => void;
  setBand3: (v: string) => void;
  setBand4: (v: string) => void;
  setBand5: (v: string) => void;
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

const Bands: React.FC<BandsProps> = ({
  bandQtd,
  band1,
  band2,
  band3,
  band4,
  band5,
  setBandQtd,
  setBand1,
  setBand2,
  setBand3,
  setBand4,
  setBand5,
}) => {
  return (
    <ScrollView style={styles.selectorsScrollView}>
      <View style={styles.selectorsContainer}>
        <Text style={[styles.selectorsText, styles.selectorsTextQtd]}>
          Qtd Faixas:
        </Text>
        <Picker
          selectedValue={bandQtd}
          style={styles.selectors}
          onValueChange={itemValue => setBandQtd(itemValue)}>
          <Picker.Item label="Três" value={3} />
          <Picker.Item label="Quatro" value={4} />
          <Picker.Item label="Cinco" value={5} />
        </Picker>
      </View>
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
          onValueChange={itemValue => setBand2(itemValue)}>
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
      {bandQtd === 5 && (
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
            <Picker.Item label="Azul" value="blue" />
            <Picker.Item label="Violeta" value="violet" />
            <Picker.Item label="Cinza" value="gray" />
            <Picker.Item label="Branco" value="white" />
          </Picker>
        </View>
      )}
      <View style={styles.selectorsContainer}>
        <Text style={styles.selectorsText}>
          {bandQtd === 5 ? 4 : 3}ª Faixa:
        </Text>
        <Picker
          selectedValue={band4}
          style={styles.selectors}
          onValueChange={itemValue => setBand4(itemValue)}>
          <Picker.Item label="Preto" value="black" />
          <Picker.Item label="Marrom" value="brown" />
          <Picker.Item label="Vermelho" value="red" />
          <Picker.Item label="Laranja" value="orange" />
          <Picker.Item label="Amarelo" value="yellow" />
          <Picker.Item label="Verde" value="green" />
          <Picker.Item label="Azul" value="blue" />
          <Picker.Item label="Violeta" value="violet" />
          <Picker.Item label="Ouro" value="gold" />
          <Picker.Item label="Prata" value="silver" />
        </Picker>
      </View>
      {(bandQtd === 5 || bandQtd === 4) && (
        <View style={styles.selectorsContainer}>
          <Text style={styles.selectorsText}>{bandQtd}ª Faixa:</Text>
          <Picker
            selectedValue={band5}
            style={styles.selectors}
            onValueChange={itemValue => setBand5(itemValue)}>
            <Picker.Item label="Marrom" value="brown" />
            <Picker.Item label="Vermelho" value="red" />
            <Picker.Item label="Verde" value="green" />
            <Picker.Item label="Azul" value="blue" />
            <Picker.Item label="Violeta" value="violet" />
            <Picker.Item label="Cinza" value="gray" />
            <Picker.Item label="Ouro" value="gold" />
            <Picker.Item label="Prata" value="silver" />
          </Picker>
        </View>
      )}
      <Text style={styles.resistorValueText}>
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
