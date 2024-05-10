import React, {useState} from 'react';
import {TextInput, View, Text, TextInputProps, ViewStyle} from 'react-native';
import colors from '../../assets/others/colors';
import styles from './styles';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  style?: ViewStyle;
  onChange: (e?: any) => void;
}

const Input = React.forwardRef<TextInput, InputProps>(
  ({label, error, style, onChange, ...props}, ref) => {
    return (
      <View style={style ? style : {}}>
        <TextInput
          ref={ref}
          keyboardType="numeric"
          onChange={e => {
            onChange(e.nativeEvent.text.replace(/[^0-9]/g, ''));
          }}
          placeholderTextColor={colors.grey600}
          placeholder={label}
          style={[styles.input]}
          {...props}
        />
        {error && <Text style={styles.error}>{error}</Text>}
      </View>
    );
  },
);

export default Input;
