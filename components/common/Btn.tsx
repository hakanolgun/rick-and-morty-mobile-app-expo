import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../constants/Colors';

interface IProps {
  children?: any;
  title?: string;
  w?: number | string;
  h?: number | string;
  bg?: string;
  fs?: number;
  px?: number;
  py?: number;
  my?: number;
  mx?: number;
  press?: Function;
  disabled?: boolean;
  br?: number;
  clr?: string;
  mh?: number;
  cw?: number | string;
}

const Btn = (props: IProps) => {
  const styles = StyleSheet.create({
    container: {
      height: props.h || 'auto',
      justifyContent: 'center',
      alignItems: 'center',
      marginVertical: props.my || 0,
      marginHorizontal: props.mx || 0,
      width: props.cw || 'auto',
    },
    button: {
      borderWidth: 0,
      backgroundColor: props.bg || colors.main,
      paddingVertical: props.py || 10,
      paddingHorizontal: props.px || 10,
      borderRadius: props.br || 6,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      width: props.w || 200,
      height: props.h || 'auto',
      minHeight: props.mh || 50,
    },
    text: {
      textAlign: 'center',
      color: props.clr || colors.black,
      fontSize: props.fs || 18,
    },
  });
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => (props.press ? props.press() : undefined)}
        style={styles.button}
        disabled={props.disabled || false}>
        {props.title ? <Text style={styles.text}>{props.title}</Text> : null}
        {props.children}
      </TouchableOpacity>
    </View>
  );
};

export default Btn;
