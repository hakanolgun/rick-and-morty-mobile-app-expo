import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import base from '../../constants/Base';
import {IEpisode} from '../../interface/episode';
import {Link} from 'expo-router';

interface IEpisodeCard {
  episode: IEpisode;
}
const EpisodeCard = ({episode}: IEpisodeCard) => {
  return (
    <Link href={{pathname: '/episode', params: {id: episode.id}}} asChild>
      <TouchableOpacity style={ss.cardContainer}>
        <Text style={base.label}>{episode.name}</Text>
        <View style={base.flexRowBetween}>
          <Text style={base.text}>{episode.air_date}</Text>
          <Text style={base.text}>{episode.episode}</Text>
        </View>
      </TouchableOpacity>
    </Link>
  );
};

export default EpisodeCard;

const ss = StyleSheet.create({
  cardContainer: {
    ...base.cardContainer,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 6,
  },
});
