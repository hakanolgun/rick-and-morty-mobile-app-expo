import {createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';
import {useAppSelector} from '../hookTypes';

interface IState {
  expoPushToken: string;
  notification: any;
}

const initialState: IState = {
  expoPushToken: '',
  notification: undefined,
};

export const notifySlice = createSlice({
  name: 'notify',
  initialState,
  reducers: {
    changeToken: (state, action) => {
      state.expoPushToken = action.payload;
    },
    setNotification: (state, action) => {
      state.notification = action.payload;
    },
  },
});

export const usePushToken = () => useAppSelector((s: RootState) => s.notify.expoPushToken);
export const useReceivedNotify = () => useAppSelector((s: RootState) => s.notify.notification);

export const {changeToken, setNotification} = notifySlice.actions;

export default notifySlice.reducer;
