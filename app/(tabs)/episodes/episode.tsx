import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ShowMsg from '../../../components/common/ShowMsg';
import base from '../../../constants/Base';
import useEpisode from '../../../hooks/useEpisode';
import CharacterCard from '../../../components/character/CharacterCard';
import FavoriteBtn from '../../../components/character/FavoriteBtn';
import {useSearchParams} from 'expo-router';
import {ICharacter} from '../../../interface/episode';
import Search from '../../../components/common/Search';

const EpisodeScreen = () => {
  const {id} = useSearchParams();
  const {episode, loading, error} = useEpisode(String(id));
  const [searchValue, setSearchValue] = useState('');
  const [filteredChars, setFilteredChars] = useState<any[]>([]);

  const handleSearch = (newValue: string) => {
    console.log('newValue', newValue);
    if (newValue.trim() === '' && episode) {
      setFilteredChars(episode.characters);
    } else if (!episode) {
      setFilteredChars([]);
    } else {
      const filtered = episode.characters.filter(item => {
        return item.name.toLowerCase().includes(newValue.toLowerCase());
      });
      setFilteredChars(filtered);
    }
  };

  const renderCharacters = ({item}: {item: ICharacter}) => (
    <CharacterCard char={item}>
      <FavoriteBtn charID={String(item.id)} />
    </CharacterCard>
  );

  if (loading || !episode) return <ShowMsg full loading />;
  if (error) return <ShowMsg full err msg={error} />;
  return (
    <View style={base.con}>
      <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      />
      <Text style={base.title}>Characters In This Episode</Text>
      <FlatList
        data={filteredChars}
        keyExtractor={item => String(item.id)}
        renderItem={renderCharacters}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
        initialNumToRender={4}
      />
    </View>
  );
};

export default EpisodeScreen;
