import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

import styles from '../styles';
import {Input} from '../../../../components';
import {Picker} from '@react-native-picker/picker';
import colors from '../../../../assets/others/colors';
import {AddIcon, RemoveIcon} from '../../../../assets/others/svg';

const Series = () => {
  const [resistorValues, setResistorValues] = useState({
    0: {value: '', unit: 'Ω'},
    1: {value: '', unit: 'Ω'},
  });

  const [resistorValue, setResistorValue] = useState('');

  const resistors = Object.entries(resistorValues).map(([key, v]) => v);

  useEffect(() => {
    const arr = Object.entries(resistorValues)
      .map(([key, v]) => v.value !== '' && v)
      .filter(n => n);

    if (arr.length < 2) setResistorValue('');
    else {
      let resistor = 0;

      arr.map(({value, unit}) => {
        value = unit === 'kΩ' ? value * 1000 : +value;
        resistor = resistor + value;
      });

      setResistorValue(Math.round(resistor) + 'Ω');
    }
  }, [resistorValues]);

  const handleAdd = () => {
    setResistorValues(rest => ({
      ...rest,
      [resistors.length]: {value: '', unit: 'Ω'},
    }));
  };

  const handleRemove = () => {
    if (resistors.length > 2) {
      let obj = {};

      resistors.map((o, i) => {
        if (i < resistors.length - 1) obj = {...obj, [i]: o};
      });
      setResistorValues(obj);
    }
  };

  return (
    <ScrollView
      style={[styles.selectorsScrollView, styles.selectorsScrollViewSeries]}>
      <View style={styles.options}>
        <TouchableOpacity style={styles.optionTouchable} onPress={handleAdd}>
          <AddIcon width={30} height={30} color={colors.white} />
          <Text style={styles.optionText}>Adicionar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.optionTouchable} onPress={handleRemove}>
          <RemoveIcon width={30} height={30} color={colors.white} />
          <Text style={styles.optionText}>Remover</Text>
        </TouchableOpacity>
      </View>
      {resistors.map((v, i) => (
        <View style={styles.selectorsContainer} key={i}>
          <Text style={styles.selectorsText}>{i + 1}º Resistor:</Text>
          <Input
            value={v.value}
            onChange={e => {
              setResistorValues(rest => ({
                ...rest,
                [i]: {...v, value: e},
              }));
            }}
          />
          <Picker
            selectedValue={v.unit}
            style={styles.selectorsUnity}
            onValueChange={itemValue => {
              setResistorValues(rest => ({
                ...rest,
                [i]: {...v, unit: itemValue},
              }));
            }}>
            <Picker.Item label="kΩ" value="kΩ" />
            <Picker.Item label="Ω" value="Ω" />
          </Picker>
        </View>
      ))}

      <Text style={styles.resistorValueText}>{resistorValue}</Text>
    </ScrollView>
  );
};

export default Series;
