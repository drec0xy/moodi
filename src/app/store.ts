import { configureStore } from '@reduxjs/toolkit';
import chatstateSlice from 'moodi_bot/features/chatsState/chatstate-slice';

// Import the previously created search slice
import userQuerySlice from 'moodi_bot/features/userQuery/userQuery-slice';

// Create the store, adding the search slice to it
export const store = configureStore({
  reducer: {
     userQuerySlice,
     chatSlice: chatstateSlice
  },
});

// Export some helper types used to improve type-checking
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;