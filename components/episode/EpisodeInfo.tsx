import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import colors from '../../constants/Colors';
import base from '../../constants/Base';

interface IProps {
  name: string;
  no: string;
}
const EpisodeInfo = ({name, no}: IProps) => {
  return (
    <View style={ss.container}>
      <View>
        <Text style={base.label}>Name</Text>
        <Text style={base.label}>Episode</Text>
      </View>
      <View style={ss.dotView}>
        <Text style={base.label}>:</Text>
        <Text style={base.label}>:</Text>
      </View>
      <View>
        <Text style={base.label}>{name}</Text>
        <Text style={base.label}>{no}</Text>
      </View>
    </View>
  );
};

export default EpisodeInfo;
const ss = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.main,
    padding: 10,
    borderRadius: 6,
    marginTop: 10,
  },
  dotView: {
    marginHorizontal: 10,
  },
});
