import React from 'react';
import colors from '../styles/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';

function handleIcon(name: string, focused: boolean) {
  let clr = focused ? colors.white : colors.bg_light;
  switch (name) {
    case 'EpisodeStack':
      return <Ionicons name="home" color={clr} size={26} />;
    case 'CharacterStack':
      return <Fontisto name="persons" color={clr} size={26} />;
    case 'FavoriteScreen':
      return <Fontisto name="heart" color={clr} size={30} />;
    default:
      return <Fontisto name="heart" color={clr} size={26} />;
  }
}

export default function handleTabScreenOptions({route}: any) {
  return {
    tabBarStyle: {backgroundColor: colors.main},
    tabBarIcon: ({focused}: {focused: boolean}) =>
      handleIcon(route.name, focused),
    headerShown: false,
    tabBarShowLabel: false,
  };
}
