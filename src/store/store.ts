import { configureStore, createSlice } from '@reduxjs/toolkit';

// Create a dummy slice to avoid the warning
const dummySlice = createSlice({
  name: 'dummy',
  initialState: {},
  reducers: {},
});

export const store = configureStore({
  reducer: {
    dummy: dummySlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;