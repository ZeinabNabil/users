import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
export const getUser = createAsyncThunk(
  "users/getUser",
  async (id, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`
      );
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    filteredUsers: null,
    user: null,
    isLoading: false,
    error: null,
  },
  reducers: {
    filterUsers: (state, { payload }) => {
      state.filteredUsers = state.users.filter((user) =>
        user.name.toLowerCase().includes(payload.toLowerCase())
      );
    },
  },
  extraReducers: {
    // getAllUsers
    [getAllUsers.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getAllUsers.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.users = action.payload;
      state.filteredUsers = action.payload;
    },
    [getAllUsers.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
    // getUser
    [getUser.pending]: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    [getUser.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.filteredUsers = state.users;
    },
    [getUser.rejected]: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const { filterUsers } = usersSlice.actions;

export default usersSlice.reducer;
