import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/store/store';
import { submitLogin } from '@/api/login.api';

export interface CounterState {
  inputValue: string;
  status: 'idle' | 'loading' | 'failed';
}

const initialState: CounterState = {
  inputValue: '',
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const submitAsync = createAsyncThunk(
  'login/fetchCount',
  async () => {
    const response = await submitLogin();
    // The value we return becomes the `fulfilled` action payload
    console.log(444, response)
    return response.data;
  }
);

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    updateInputValue: (state, action: PayloadAction<string>) => {
      state.inputValue = action.payload;
    },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(submitAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(submitAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        // state.value += action.payload;
      });
  },
});

export const { updateInputValue } = loginSlice.actions;
export const selectInputValue = (state: RootState) => state.login.inputValue;


export default loginSlice.reducer;