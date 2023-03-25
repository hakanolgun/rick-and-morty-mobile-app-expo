import {StyleSheet, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import {ICharacter} from '../../interface/episode';
import {Link} from 'expo-router';
import {Avatar, Button, Card, Text} from 'react-native-paper';
import Colors from '../../constants/Colors';
interface IProps {
  char: ICharacter;
  children: any;
}

const CharacterCard = ({char, children}: IProps) => {
  const charImgUrl = `https://rickandmortyapi.com/api/character/avatar/${char.id}.jpeg`;

  return (
    <Link href={{pathname: '/characters', params: {charID: char.id}}} asChild>
      <Card style={ss.card}>
        <Card.Content style={ss.header}>
          <Text variant="titleLarge">{char.name}</Text>
          <Text variant="bodyMedium">{char.species ?? ''}</Text>
        </Card.Content>
        <Card.Cover source={{uri: charImgUrl}} style={ss.img} />
        {children}
      </Card>
    </Link>
  );
};

export default CharacterCard;
const ss = StyleSheet.create({
  card: {
    marginBottom: 16,
    marginHorizontal: 4,
    backgroundColor: Colors.main,
  },
  header: {
    justifyContent: 'center',
    paddingBottom: 10,
  },
  img: {
    width: '100%',
    height: 300,
  },
});
