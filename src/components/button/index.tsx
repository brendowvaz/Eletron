import React, {Component} from 'react';
import {Text, ViewStyle, TouchableOpacity, Image, View} from 'react-native';

import colors from '../../assets/others/colors';
import styles from './styles';
import {
  CapacitorIcon,
  ParallelResistorIcon,
  ResistorIcon,
  SeriesResistorIcon,
} from '../../assets/others/svg';

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: ViewStyle;
  icon?: any;
}

const Button: React.FC<ButtonProps> = ({title, onPress, style, icon}) => {
  return (
    <View style={[styles.buttonContainer, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {icon === 'ResistorIcon' && (
          <ResistorIcon height={30} width={50} color={colors.white} />
        )}
        {icon === 'ParallelResistorIcon' && (
          <ParallelResistorIcon height={60} width={50} color={colors.white} />
        )}
        {icon === 'SeriesResistorIcon' && (
          <SeriesResistorIcon height={50} width={50} color={colors.white} />
        )}
        {icon === 'CapacitorIcon' && (
          <CapacitorIcon height={40} width={50} color={colors.white} />
        )}
        {icon === 'ParallelCapacitorIcon' && (
          <Image
            height={30}
            width={30}
            source={require('../../assets/images/parallel_capacitor.png')}
            style={styles.image}
          />
        )}
        {icon === 'SeriesCapacitorIcon' && (
          <Image
            height={50}
            width={50}
            source={require('../../assets/images/series_capacitor.png')}
            style={styles.image}
          />
        )}
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Button);
