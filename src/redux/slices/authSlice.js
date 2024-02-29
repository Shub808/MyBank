import {createSlice} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  isLoggedIn: false,
  userToken: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.isLoggedIn = true;
      state.userToken = action.payload;
      AsyncStorage.setItem('userToken', action.payload);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.userToken = null;
      AsyncStorage.removeItem('userToken');
    },
  },
});

export const {loginSuccess, logout} = authSlice.actions;

export default authSlice.reducer;
