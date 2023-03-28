import {View, FlatList, SafeAreaView, RefreshControl, Platform} from 'react-native';
import React, {useEffect, useState} from 'react';
import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';
import base from '../../../constants/Base';
import ShowMsg from '../../../components/common/ShowMsg';
import {IEpisode} from '../../../interface/episode';
import EpisodeCard from '../../../components/episode/EpisodeCard';
import Search from '../../../components/common/Search';
import useEpisodes from '../../../hooks/useEpisodes';
import {useAppDispatch} from '../../../store/hookTypes';
import {changeToken, setNotification} from '../../../store/slices/notifySlice';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const {status: existingStatus} = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const {status} = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (
      await Notifications.getExpoPushTokenAsync({
        projectId: 'af03344a-5424-4d70-8585-fe4bf9929f6f',
      })
    ).data;
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }

  return token;
}

const EpisodesScreen = () => {
  const [page, setPage] = useState(1);
  const {info, episodes, loading, error, fetchEpisodes} = useEpisodes();
  const [searchValue, setSearchValue] = useState('');
  const [refreshing, setRefreshing] = useState(false);
  const [searchCount, setSearchCount] = useState(1);
  const dispatch = useAppDispatch();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => dispatch(changeToken(token)));

    const subscription = Notifications.addNotificationReceivedListener(notification => {
      dispatch(setNotification(notification));
    });

    return () => subscription.remove();
  }, []);

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
