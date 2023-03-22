import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {Ionicons as Icon} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import Btn from './Btn';
import {IShowMsg} from '../../interface/common';

const ShowMsg = ({
  msg = '',
  icon = false,
  iconName = 'cloud-done',
  iconSize = 100,
  iconClr = colors.main,
  btnFunc = () => {},
  btnTxt = '',
  full = false,
  err = false,
  form = false,
  loading = false,
  bg = colors.bg_dark,
  mv = 0,
  h,
  fs,
}: IShowMsg) => {
  const ss: any = {
    container: {
      flex: full ? 1 : -1,
      padding: full ? 10 : 0,
      alignItems: form ? 'flex-start' : 'center',
      justifyContent: 'center',
      backgroundColor: full ? bg : 'transparent',
      height: h || 'auto',
      marginVertical: mv,
    },
    txt: {
      color: err ? 'red' : colors.white,
      fontSize: fs ? fs : full ? 20 : 16,
      textAlign: form ? 'left' : 'center',
      marginVertical: mv,
    },
    logo: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
  };
  const load = <ActivityIndicator size={full ? 'large' : 'small'} color={colors.white} />;
  return (
    <View style={ss.container}>
      {icon ? <Icon name={iconName as never} size={iconSize} color={iconClr} /> : null}
      {msg ? <Text style={ss.txt}>{msg}</Text> : null}
      {btnTxt ? <Btn title={btnTxt} my={20} press={() => btnFunc()} /> : null}
      {loading ? load : null}
    </View>
  );
};

export default React.memo(ShowMsg);
