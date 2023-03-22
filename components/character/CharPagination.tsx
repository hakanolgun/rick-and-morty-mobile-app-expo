import {View} from 'react-native';
import React from 'react';
// import PaginationDot from 'react-native-animated-pagination-dot';
import Btn from '../common/Btn';
import base from '../../constants/Base';
import colors from '../../constants/Colors';

interface IPagination {
  currentPage: number;
  changePage: Function;
  maxPage: number;
}
const CharPagination = ({currentPage, maxPage, changePage}: IPagination) => {
  return (
    <View style={[base.paginationContainer, {padding: 10}]}>
      <Btn
        title="Previous"
        w={110}
        press={() => changePage(currentPage - 1)}
        disabled={currentPage === 1}
        bg={currentPage === 1 ? colors.text_gray : undefined}
        fs={15}
      />
      {/* <PaginationDot
        activeDotColor="white"
        curPage={currentPage - 1}
        maxPage={maxPage}
        sizeRatio={1.5}
      /> */}
      <Btn
        title="Next Page"
        w={110}
        press={() => changePage(currentPage + 1)}
        disabled={currentPage === maxPage}
        bg={currentPage === maxPage ? colors.text_gray : undefined}
        fs={15}
      />
    </View>
  );
};

export default CharPagination;
