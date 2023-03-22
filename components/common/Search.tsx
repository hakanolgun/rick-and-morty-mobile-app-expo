import {View, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {Fontisto as Icon} from '@expo/vector-icons';
import colors from '../../constants/Colors';

interface IProps {
  handleSearch: Function;
  searchValue: string;
  setSearchValue: Function;
}

const Search = ({handleSearch, searchValue, setSearchValue}: IProps) => {
  const handlePress = () => {
    handleSearch(searchValue);
  };
  const updateValue = (newValue: string) => {
    setSearchValue(newValue);
    if (newValue.trim() === '') {
      handleSearch(newValue);
    }
  };
  return (
    <View style={ss.container}>
      <TextInput
        style={ss.input}
        onChangeText={updateValue}
        value={searchValue}
        placeholder="Search..."
        placeholderTextColor={'whitesmoke'}
      />
      <TouchableOpacity style={ss.btn} onPress={handlePress}>
        <Icon name="search" color="white" size={26} />
      </TouchableOpacity>
    </View>
  );
};

export default React.memo(Search);
const ss = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginBottom: 10,
    borderRadius: 6,
  },
  input: {
    height: 60,
    flex: 1,
    backgroundColor: 'black',
    color: 'white',
    paddingLeft: 20,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    borderWidth: 1,
    borderColor: colors.main,
  },
  btn: {
    backgroundColor: colors.main,
    height: '100%',
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
  },
});
