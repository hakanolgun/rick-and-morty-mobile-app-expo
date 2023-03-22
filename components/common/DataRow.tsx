import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../constants/Colors';
interface IProps {
  label: string;
  data: string;
}
const DataRow = ({label, data}: IProps) => {
  return (
    <View style={ss.container}>
      <Text style={ss.label}>{label}</Text>
      <Text style={ss.mid}>:</Text>
      <Text style={ss.data}>{data}</Text>
    </View>
  );
};

export default DataRow;
const ss = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    padding: 8,
  },
  label: {
    width: 100,
    fontSize: 16,
    color: colors.white,
  },
  mid: {fontSize: 16, color: colors.white},
  data: {color: colors.white, fontSize: 16},
});
