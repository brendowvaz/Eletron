import {StyleSheet, Dimensions} from 'react-native';

import colors from '../../../assets/others/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 10,
    paddingVertical: 10,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  tittle: {
    textAlign: 'center',
    fontSize: 40,
    fontFamily: 'Jersey10-Regular',
    color: colors.white,
    paddingVertical: 10,
  },
  linearGradient: {
    flex: 1,
    width: Dimensions.get('window').width,
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
  selectorsScrollView: {
    width: Dimensions.get('window').width,
    paddingVertical: 5,
    backgroundColor: 'rgba(0,0,0,.7)',
  },
  selectorsScrollViewSeries: {
    marginTop: 30,
  },
  capacitor: {
    marginHorizontal: 'auto',
  },
  selectorsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 'auto',
    marginTop: 15,
  },
  selectors: {
    height: 50,
    width: 150,
    color: colors.white,
    backgroundColor: colors.primary,
  },
  selectorsUnity: {
    height: 50,
    width: 100,
    marginLeft: 10,
    color: colors.white,
    backgroundColor: colors.primary,
  },
  selectorsText: {
    color: colors.white,
    fontSize: 16,
    marginRight: 10,
    marginLeft: -70,
  },
  capacitorValueText: {
    color: colors.white,
    fontSize: 25,
    textAlign: 'center',
    marginTop: 20,
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  optionTouchable: {
    alignItems: 'center',
  },
  optionText: {
    color: colors.white,
    marginHorizontal: 10,
  },
});
