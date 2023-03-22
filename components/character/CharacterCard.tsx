import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {getCharID} from '../../utils/utils';

interface IProps {
  url: string;
  children: any;
}

const CharacterCard = ({url, children}: IProps) => {
  const nav = useNavigation();
  const charID = getCharID(url);
  const charImgUrl = `https://rickandmortyapi.com/api/character/avatar/${charID}.jpeg`;

  const handlePress = () => {
    nav.navigate('CharacterScreen' as never, {charID: charID} as never);
  };

  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <Image source={{uri: charImgUrl}} style={ss.img} />
      {children}
    </TouchableOpacity>
  );
};

export default CharacterCard;
const ss = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  btn: {
    marginTop: 10,
    width: '100%',
    height: 300,
    borderRadius: 6,
    position: 'relative',
  },
});
