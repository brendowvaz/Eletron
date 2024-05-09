import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  linearGradient: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
  logo: {
    marginTop: 30,
    marginHorizontal: 'auto',
    marginBottom: 20,
  },
  atomo: {
    position: 'absolute',
    top: 20,
    left: Dimensions.get('window').width * 0.05,
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height,
    resizeMode: 'contain',
    opacity: 0.5,
  },
});
