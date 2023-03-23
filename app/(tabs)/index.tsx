import {View, FlatList, SafeAreaView, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import base from '../../constants/Base';
import ShowMsg from '../../components/common/ShowMsg';
import {IEpisode} from '../../interface/episode';
import EpisodeCard from '../../components/episode/EpisodeCard';
import Search from '../../components/common/Search';
import useEpisodes from '../../hooks/useEpisodes';

const EpisodesScreen = () => {
  const [page, setPage] = useState(1);
  const {info, episodes, loading, error, fetchEpisodes} = useEpisodes();
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchCount, setSearchCount] = useState(1);
  const loadMore = () => {
    if (!loading && page < 3 && info?.next) {
      setPage(p => p + 1);
    }
  };

  useEffect(() => {
    if (page === 1) {
      fetchEpisodes(page, searchValue, false);
    } else {
      fetchEpisodes(page, searchValue, true);
    }
  }, [page, searchCount]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    setPage(1);
    setRefreshing(false);
  }, []);

  const handleSearch = async () => {
    setPage(1);
    setSearchCount(p => p + 1);
  };

  const renderCards = ({item}: {item: IEpisode}) => <EpisodeCard episode={item} />;

  return (
    <SafeAreaView style={base.con}>
      <View style={base.container}>
        <Search
          handleSearch={handleSearch}
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        {error ? <ShowMsg full msg={error} /> : null}
        {!error && info ? (
          <FlatList
            data={episodes}
            keyExtractor={item => String(item.id)}
            renderItem={renderCards}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMore}
            onEndReachedThreshold={0.1}
            initialNumToRender={10}
            ListFooterComponent={loading || refreshing ? <ShowMsg loading /> : null}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default EpisodesScreen;
