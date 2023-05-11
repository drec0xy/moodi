import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Define the state of the slice as an object
interface queryState {
  queryText: string;
}

// Define an initial state
const initialState: queryState = {
    queryText: '',
};

// Create a slice containing the configuration of the state
// and the reducers functions
const querySlice = createSlice({
  name: 'userQuery',
  initialState,
  reducers: {
    getQueryText(state, action: PayloadAction<string>) {
      state.queryText = action.payload.toLowerCase();
    },
  },
});

// Export each reducers function defined in createSlice
export const { getQueryText } = querySlice.actions;

// Export default the slice reducer
export default querySlice.reducer;