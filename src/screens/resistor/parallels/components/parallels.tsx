import React, {useEffect, useState} from 'react';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

import styles from '../styles';
import {Input} from '../../../../components';
import {Picker} from '@react-native-picker/picker';
import colors from '../../../../assets/others/colors';
import {AddIcon, RemoveIcon} from '../../../../assets/others/svg';

const Parallels = () => {
  const [resistorValues, setResistorValues] = useState({
    0: {value: '', unit: 'Ω'},
    1: {value: '', unit: 'Ω'},
  });

  const [resistorValue, setResistorValue] = useState('');

  useEffect(() => {
    const array = Object.entries(resistorValues)
      .map(([key, v]) => v.value !== '' && v)
      .filter(n => n);

    if (array.length < 2) setResistorValue('');
    else {
      let resistor = 0;

      array.map(({value, unit}) => {
        value = unit === 'kΩ' ? value * 1000 : value;
        resistor = resistor + 1 / value;
      });

      setResistorValue(Math.round(1 / resistor) + 'Ω');
    }
  }, [resistorValues]);

  const handleAdd = () => {
    const array = Object.keys(resistorValues).map(key => key);
    setResistorValues(rest => ({
      ...rest,
      [array.length]: {value: '', unit: 'Ω'},
    }));
  };

  const handleRemove = () => {
    const array = Object.entries(resistorValues).map(([key, v]) => v);
    if (array.length > 2) {
      let obj = {};

      array.map((o, i) => {
        if (i < array.length - 1) obj = {...obj, [i]: o};
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
      {Object.entries(resistorValues).map(([key, v], i) => {
        return (
          <View style={styles.selectorsContainer} key={i}>
            <Text style={styles.selectorsText}>{i + 1}º Resistor:</Text>
            <Input
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
        );
      })}

      <Text style={styles.resistorValueText}>{resistorValue}</Text>
    </ScrollView>
  );
};

export default Parallels;
