import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Fontisto as Icon} from '@expo/vector-icons';
import {addFav, deleteFav, useFavs} from '../../store/slices/favoriteSlice';
import {useAppDispatch} from '../../store/hookTypes';
import base from '../../constants/Base';
import Btn from '../common/Btn';
import {sendPushNotification} from '../../utils/notifications';
import {usePushToken} from '../../store/slices/notifySlice';

interface IProps {
  charID: string;
}

const msg = `You've exceeded the number of favorite characters added. You have to remove another character from favorites`;

const FavoriteBtn = ({charID}: IProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const favs = useFavs();
  const faved = favs.some(item => item === charID);

  const pushToken = usePushToken();

  const handlePress = async () => {
    if (faved) {
      dispatch(deleteFav(charID));
    } else if (favs.length >= 10) {
      setModalVisible(true);
      await sendPushNotification(pushToken, 'Maximum 10 Favorites', msg);
    } else {
      dispatch(addFav(charID));
    }
  };

  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <Icon name="heart" color={faved ? 'red' : 'white'} size={30} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={base.centeredView}>
          <View style={base.modalView}>
            <Text style={base.text}>{msg}</Text>
            <View style={base.doubleBtnContainer}>
              <Btn w={90} title="Back" press={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default FavoriteBtn;
const ss = StyleSheet.create({
  btn: {
    position: 'absolute',
    top: 16,
    right: 6,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    padding: 6,
  },
});
