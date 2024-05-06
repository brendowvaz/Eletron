import {StyleSheet} from 'react-native';
import colors from '../../assets/others/colors';

export default StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    width: '90%',
    marginTop: 20,
    marginHorizontal: 'auto',
    borderRadius: 5,
  },

  button: {
    flexDirection: 'row',
    paddingLeft: 20,
    alignItems: 'center',
    height: 80,
    width: '100%',
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,.7)',
  },

  buttonText: {
    position: 'absolute',
    left: 80,
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  image: {
    marginLeft: 10,
  },
});
