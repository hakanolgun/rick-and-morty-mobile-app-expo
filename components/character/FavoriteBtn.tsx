import {Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {Fontisto as Icon} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import {addFav, deleteFav, useFavs} from '../../store/slices/favoriteSlice';
import {useAppDispatch} from '../../store/hookTypes';
import base from '../../constants/Base';
import Btn from '../common/Btn';

interface IProps {
  charID: string;
}

const FavoriteBtn = ({charID}: IProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useAppDispatch();
  const favs = useFavs();
  const faved = favs.some(item => item === charID);

  const handlePress = async () => {
    if (faved) {
      dispatch(deleteFav(charID));
    } else if (favs.length >= 10) {
      setModalVisible(true);
    } else {
      dispatch(addFav(charID));
    }
  };

  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <View style={ss.view}>
        <Icon name="heart" color={faved ? 'red' : 'white'} size={30} />
      </View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={base.centeredView}>
          <View style={base.modalView}>
            <Text style={base.text}>
              You've exceeded the number of favorite characters added. You have to remove another
              character from favorites.
            </Text>
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
    width: 100,
    height: 100,
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  view: {
    width: 50,
    height: 50,
    backgroundColor: colors.bg_light,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 3,
    marginRight: 3,
    paddingTop: 3,
  },
});
