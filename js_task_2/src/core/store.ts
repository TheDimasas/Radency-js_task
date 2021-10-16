import { configureStore } from '@reduxjs/toolkit';

import notesReducer from './notes.slice';
import dialogReducer from './dialog.slice';

const store = configureStore({
  reducer: {
    notes: notesReducer,
    dialog: dialogReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
