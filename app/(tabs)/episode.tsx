import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ShowMsg from '../../components/common/ShowMsg';
import base from '../../constants/Base';
import useEpisode from '../../hooks/useEpisode';
import CharacterCard from '../../components/character/CharacterCard';
import FavoriteBtn from '../../components/character/FavoriteBtn';
import {generateBeginAndEndNumbers, getCharID} from '../../utils/utils';
import {useSearchParams} from 'expo-router';
// import Search from '../../components/common/Search';

const EpisodeScreen = () => {
  const params = useSearchParams();
  const [res, loading, error] = useEpisode(Number(params.id));

  const renderCharacters = ({item}: {item: string}) => (
    <CharacterCard url={item}>
      <FavoriteBtn charID={getCharID(item)} />
    </CharacterCard>
  );

  if (loading || !res) {
    return <ShowMsg full loading />;
  }
  if (error) {
    return <ShowMsg full err msg={error} />;
  }
  return (
    <View style={base.con}>
      {/* <Search
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        handleSearch={handleSearch}
      /> */}
      <Text style={base.title}>Characters In This Episode</Text>
      {/* <FlatList
        data={itemsToShow}
        keyExtractor={item => item}
        renderItem={renderCharacters}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
      /> */}
    </View>
  );
};

export default EpisodeScreen;
