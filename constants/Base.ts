import colors from './Colors';
import {StyleSheet} from 'react-native';

const base = StyleSheet.create({
  con: {
    flex: 1,
    backgroundColor: colors.bg_dark,
  },
  container: {
    flex: 1,
    backgroundColor: colors.bg_dark,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  centerContainer: {
    flex: 1,
    backgroundColor: colors.bg_dark,
    paddingVertical: 20,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  centerWideContainer: {
    flex: 1,
    backgroundColor: colors.bg_dark,
    paddingVertical: 20,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
  sectionContainer: {
    marginVertical: 10,
    paddingHorizontal: 3,
  },
  rowContainer: {
    marginHorizontal: 12,
    marginBottom: 10,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  inputContainer: {
    marginHorizontal: 12,
    marginBottom: 26,
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexRowAround: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  flexRowBetween: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumnCenter: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  paginationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 14,
  },
  bigTitle: {
    color: colors.white,
    fontSize: 20,
    marginBottom: 10,
    textAlign: 'center',
  },
  title: {
    color: colors.white,
    fontSize: 18,
    marginVertical: 10,
    textAlign: 'center',
  },
  text: {
    color: colors.white,
    fontSize: 16,
    marginVertical: 4,
    textAlign: 'center',
    lineHeight: 22,
  },
  text_bold: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 22,
    fontWeight: 'bold',
    marginBottom: 4,
    textAlign: 'center',
  },
  label: {
    color: colors.white,
    fontSize: 16,
    lineHeight: 22,
    marginVertical: 4,
    textAlign: 'left',
  },
  input: {
    height: 50,
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 6,
    color: colors.text_dark,
    fontSize: 16,
  },
  secureIcon: {
    position: 'absolute',
    bottom: 12,
    right: 8,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: colors.bg_dark,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  doubleBtnContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
    gap: 30,
  },
  cardContainer: {
    borderRadius: 6,
    backgroundColor: colors.main,
  },
  pv: {
    paddingVertical: 10,
  },
  breathV: {
    marginVertical: 24,
  },
  fixedBottom: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  boxShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
  btnShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});
export default base;
