import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
};

export const viewState = createSlice({
  name: 'viewState',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      console.log(action);
      state.loading = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { setLoading } = viewState.actions;

export default viewState.reducer;
