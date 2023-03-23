import {View, FlatList, SafeAreaView, RefreshControl} from 'react-native';
import React, {useEffect, useState} from 'react';
import base from '../../constants/Base';
import ShowMsg from '../../components/common/ShowMsg';
import {IEpisode} from '../../interface/episode';
import EpisodeCard from '../../components/episode/EpisodeCard';
import {getSearchParamFromURL} from '../../utils/utils';
import Search from '../../components/common/Search';
import useEpisodes from '../../hooks/useEpisodes';

const EpisodesScreen = () => {
  const {info, episodes, loading, error, fetchEpisodes} = useEpisodes('1', '', false);
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = React.useState(false);

  const loadMore = async () => {
    if (info && info.next) {
      const page = getSearchParamFromURL(info.next, 'page');
      await fetchEpisodes(page, searchValue, true);
    }
  };

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);
    await fetchEpisodes('1', '', false);
    setRefreshing(false);
  }, []);

  const handleSearch = async (value: string) => {
    await fetchEpisodes('1', value, false);
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
        {loading || !info ? <ShowMsg full loading /> : null}
        {error ? <ShowMsg full msg={error} /> : null}
        {!error && info ? (
          <FlatList
            data={episodes}
            keyExtractor={item => String(item.id)}
            renderItem={renderCards}
            showsVerticalScrollIndicator={false}
            onEndReached={loadMore}
            onEndReachedThreshold={0.3}
            ListFooterComponent={loading ? <ShowMsg loading /> : null}
            refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
          />
        ) : null}
      </View>
    </SafeAreaView>
  );
};

export default EpisodesScreen;
