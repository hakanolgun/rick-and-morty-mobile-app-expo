import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {ICharacter} from '../../interface/episode';

interface IProps {
  char: ICharacter;
  children: any;
}

const CharacterCard = ({char, children}: IProps) => {
  const nav = useNavigation();
  const charImgUrl = `https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`;

  const handlePress = () => {
    console.log('key');
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
