import {StyleSheet} from 'react-native';

import colors from '../../assets/others/colors';

export default StyleSheet.create({
  input: {
    backgroundColor: colors.white,
    borderRadius: 5,
    height: 50,
    color: colors.grey600,
    width: 60,
  },

  error: {
    paddingHorizontal: 20,
    color: colors.red,
  },
});
