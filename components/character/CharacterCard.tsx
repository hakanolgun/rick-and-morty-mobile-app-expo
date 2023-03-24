import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICharacter} from '../../interface/episode';
import {Link} from 'expo-router';

interface IProps {
  char: ICharacter;
  children: any;
}

const CharacterCard = ({char, children}: IProps) => {
  const charImgUrl = `https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`;

  return (
    <Link href={{pathname: '/characters', params: {charID: char.id}}} asChild>
      <TouchableOpacity style={ss.btn}>
        <Image source={{uri: charImgUrl}} style={ss.img} />
        {children}
      </TouchableOpacity>
    </Link>
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
