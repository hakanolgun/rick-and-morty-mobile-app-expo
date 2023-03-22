import {View} from 'react-native';
import React from 'react';
// import PaginationDot from 'react-native-animated-pagination-dot';
import Btn from './Btn';
import base from '../../constants/Base';
import colors from '../../constants/Colors';

interface IPagination {
  currentPage: number;
  info: any;
  changePage: Function;
}
const Pagination = ({currentPage, info, changePage}: IPagination) => {
  return (
    <View style={base.paginationContainer}>
      <Btn
        title="Previous"
        w={100}
        press={() => changePage(info.prev)}
        disabled={info.prev === null}
        bg={info.prev === null ? colors.text_gray : undefined}
        fs={15}
      />
      {/* <PaginationDot
        activeDotColor={'white'}
        curPage={currentPage - 1}
        maxPage={info.pages}
        sizeRatio={1.5}
      /> */}
      <Btn
        title="Next Page"
        w={100}
        press={() => changePage(info.next)}
        disabled={info.next === null}
        bg={info.next === null ? colors.text_gray : undefined}
        fs={15}
      />
    </View>
  );
};

export default Pagination;
