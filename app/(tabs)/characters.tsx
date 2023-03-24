import {StyleSheet, Image, ScrollView, View, Text} from 'react-native';
import React from 'react';
import base from '../../constants/Base';
import useCharacter from '../../hooks/useCharacter';
import ShowMsg from '../../components/common/ShowMsg';
import DataRow from '../../components/common/DataRow';
import {useSearchParams} from 'expo-router';

const CharacterScreen = () => {
  const {charID} = useSearchParams();
  const [res, loading, error] = useCharacter(charID as string);

  if (loading || !res) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg full err msg={error} />;
  }
  return (
    <ScrollView style={base.con} showsVerticalScrollIndicator={false}>
      <Text style={ss.title}>{res.name}</Text>
      <Image style={ss.img} source={{uri: res.image}} />
      <View style={base.container}>
        <DataRow label="Status" data={res.status} />
        <DataRow label="Species" data={res.species} />
        <DataRow label="Type" data={res.type} />
        <DataRow label="Gender" data={res.gender} />
        <DataRow label="Origin" data={res.origin.name} />
        <DataRow label="Location" data={res.location.name} />
      </View>
    </ScrollView>
  );
};

export default CharacterScreen;
const ss = StyleSheet.create({
  img: {
    width: '100%',
    height: 400,
    marginVertical: 10,
  },
  title: {
    ...base.title,
    marginTop: 30,
    fontWeight: 'bold',
  },
});
