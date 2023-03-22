import {View, Text, FlatList} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import ShowMsg from '../../components/common/ShowMsg';
import base from '../../constants/Base';
import useEpisode from '../../hooks/useEpisode';
import CharacterCard from '../../components/character/CharacterCard';
import FavoriteBtn from '../../components/character/FavoriteBtn';
import {generateBeginAndEndNumbers, getCharID} from '../../utils/utils';
import CharPagination from '../../components/character/CharPagination';
import {useSearchParams} from 'expo-router';
// import Search from '../../components/common/Search';

const EpisodeScreen = () => {
  const params = useSearchParams();
  const [res, loading, error] = useEpisode(Number(params.id));
  const [currentPage, setCurrentPage] = useState(1);
  const [maxPage, setMaxPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState([]);
  // const [searchValue, setSearchValue] = useState('');

  const handleMaxPage = useCallback(() => {
    const max = Math.ceil(res.characters.length / 2);
    setMaxPage(max);
  }, [res]);

  const getItemsToShow = useCallback(() => {
    const [begin, end] = generateBeginAndEndNumbers(currentPage);
    let arr = res.characters.slice(begin, end);
    setItemsToShow(arr);
  }, [res, currentPage]);

  useEffect(() => {
    if (res) {
      handleMaxPage();
      getItemsToShow();
    }
  }, [getItemsToShow, handleMaxPage, res]);

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
      <FlatList
        data={itemsToShow}
        keyExtractor={item => item}
        renderItem={renderCharacters}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{padding: 10}}
      />
      <CharPagination currentPage={currentPage} changePage={setCurrentPage} maxPage={maxPage} />
    </View>
  );
};

export default EpisodeScreen;
