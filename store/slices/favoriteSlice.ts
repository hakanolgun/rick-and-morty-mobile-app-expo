import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {useAppSelector} from '../hookTypes';

interface IFavState {
  favs: string[];
}

const initialState: IFavState = {
  favs: [],
};

export const favSlice = createSlice({
  name: 'fav',
  initialState,
  reducers: {
    addFav: (state, action) => {
      state.favs = [action.payload, ...state.favs];
    },
    deleteFav: (state, action) => {
      state.favs = state.favs.filter(item => item !== action.payload);
    },
  },
});

export const useFavs = () => useAppSelector((s: RootState) => s.fav.favs);

export const {addFav, deleteFav} = favSlice.actions;

export default favSlice.reducer;
