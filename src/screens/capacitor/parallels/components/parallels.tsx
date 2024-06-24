import React, {useEffect, useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {View, ScrollView, Text, TouchableOpacity} from 'react-native';

import styles from '../styles';
import {Input} from '../../../../components';
import colors from '../../../../assets/others/colors';
import {AddIcon, RemoveIcon} from '../../../../assets/others/svg';

const Parallels = () => {
  const [capacitorValues, setCapacitorValues] = useState({
    0: {value: '', unit: 'pF'},
    1: {value: '', unit: 'pF'},
    2: {value: '', unit: 'pF'},
  });

  const [capacitorValue, setCapacitorValue] = useState('');
  //result

  const capacitors = Object.entries(capacitorValues).map(([key, v]) => v);

  useEffect(() => {
    const arr = Object.entries(capacitorValues)
      .map(([key, v]) => v.value !== '' && v)
      .filter(n => n);

    if (arr.length < 2) setCapacitorValue('');
    else {
      let cap = 0;

      arr.map(({value, unit}) => {
        value = unit === 'nF' ? value * 1000 : +value;
        cap = cap + value;
      });

      setCapacitorValue(Math.round(cap) + 'pf');
    }
  }, [capacitorValues]);

  const handleAdd = () => {
    setCapacitorValues(rest => ({
      ...rest,
      [capacitors.length]: {value: '', unit: 'pF'},
    }));
  };

  const handleRemove = () => {
    if (capacitors.length > 2) {
      let obj = {};

      capacitors.map((o, i) => {
        if (i < capacitors.length - 1) obj = {...obj, [i]: o};
      });
      setCapacitorValues(obj);
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
      {capacitors.map((v, i) => (
        <View style={styles.selectorsContainer} key={i}>
          <Text style={styles.selectorsText}>{i + 1}º Capacitor:</Text>
          <Input
            value={v.value}
            onChange={e => {
              setCapacitorValues(rest => ({
                ...rest,
                [i]: {...v, value: e},
              }));
            }}
          />
          <Picker
            selectedValue={v.unit}
            style={styles.selectorsUnity}
            onValueChange={itemValue => {
              setCapacitorValues(rest => ({
                ...rest,
                [i]: {...v, unit: itemValue},
              }));
            }}>
            <Picker.Item label="pF" value="pF" />
            <Picker.Item label="nF" value="nF" />
          </Picker>
        </View>
      ))}

      <Text style={styles.capacitorValueText}>{capacitorValue}</Text>
    </ScrollView>
  );
};

export default Parallels;
