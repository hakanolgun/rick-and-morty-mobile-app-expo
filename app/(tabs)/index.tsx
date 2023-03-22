import {View, FlatList, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import base from '../../constants/Base';
import ShowMsg from '../../components/common/ShowMsg';
import {IEpisode} from '../../interface/episode';
import EpisodeCard from '../../components/episode/EpisodeCard';
import Pagination from '../../components/common/Pagination';
import {getSearchParamFromURL} from '../../utils/utils';
import Search from '../../components/common/Search';
import useAxios from '../../hooks/useAxios';
import {getEpisodes} from '../../api/api';

const EpisodesScreen = () => {
  const [res, loading, error, fetchData] = useAxios();
  const [currentPage, setCurrentPage] = useState(1);
  const [episodes, setEpisodes] = useState<IEpisode[]>([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    if (res) {
      setEpisodes(res.results);
    } else {
      fetchData(getEpisodes('1', ''));
    }
  }, [res, fetchData]);

  const handleSearch = async (value: string) => {
    await fetchData(getEpisodes('1', value));
  };

  const renderCards = ({item}: {item: IEpisode}) => <EpisodeCard episode={item} />;

  const handlePageChange = async (url: string) => {
    if (url) {
      const newPage = getSearchParamFromURL(url, 'page');
      await fetchData(getEpisodes(newPage, searchValue));
      setCurrentPage(Number(newPage));
    }
  };

  return (
    <SafeAreaView style={base.con}>
      <View style={base.container}>
        <Search
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {loading || !res ? <ShowMsg full loading /> : null}
        {error ? <ShowMsg full msg={error} /> : null}
        {!error && !loading && res ? (
          <>
            <FlatList
              data={episodes}
              keyExtractor={item => String(item.id)}
              renderItem={renderCards}
              showsVerticalScrollIndicator={false}
            />
            <Pagination currentPage={currentPage} info={res.info} changePage={handlePageChange} />
          </>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default EpisodesScreen;
