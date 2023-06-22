import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUsers } from '../../api';

const initialState = {
  list: JSON.parse(localStorage.getItem('users')) || [],
  isLoading: false,
};


export const fetchUsersAsync = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetchUsers();
  return response;
});

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    list: JSON.parse(localStorage.getItem('users')) || [],
    isLoading: false,
  },
  reducers: {
    addUser: (state, action) => {
      state.list.push(action.payload);
    },
    deleteItem: (state, action) => {
      const itemId = action.payload;
      state.list = state.list.filter((user) => user.id !== itemId);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.list = action.payload;
      })
      .addCase(fetchUsersAsync.rejected, (state) => {
        state.isLoading = false;
      });
  },
});

export const { actions: usersActions, reducer: usersReducer } = usersSlice;
export const { addUser, deleteItem } = usersActions;

export default usersSlice.reducer;


