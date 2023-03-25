import {TouchableOpacity, StyleSheet, View, Modal, Text} from 'react-native';
import React, {useState} from 'react';
import {Fontisto as Icon} from '@expo/vector-icons';
import colors from '../../constants/Colors';
import {useAppDispatch} from '../../store/hookTypes';
import {deleteFav} from '../../store/slices/favoriteSlice';
import Btn from '../common/Btn';
import base from '../../constants/Base';
import useCharacter from '../../hooks/useCharacter';

interface IProps {
  charID: string;
}

const DeleteFav = ({charID}: IProps) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [res] = useCharacter(charID);

  const dispatch = useAppDispatch();
  const handlePress = () => {
    setModalVisible(true);
  };
  const deleteItem = () => {
    dispatch(deleteFav(charID));
    setModalVisible(false);
  };
  return (
    <TouchableOpacity style={ss.btn} onPress={handlePress}>
      <Icon name="trash" color="whitesmoke" size={30} />

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
              Are you sure you want to remove {res?.name ?? 'this character'} from favorites?
            </Text>
            <View style={base.doubleBtnContainer}>
              <Btn w={90} title="Yes" press={deleteItem} />
              <Btn w={90} title="No" press={() => setModalVisible(false)} />
            </View>
          </View>
        </View>
      </Modal>
    </TouchableOpacity>
  );
};

export default DeleteFav;
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
