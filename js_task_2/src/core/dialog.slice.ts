import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OpenModalActionPayload } from './actions.interfaces';

import { RootState } from './store';

export type DialogMode = 'create' | 'edit';

interface DialogState {
  isOpen: boolean;
  mode: DialogMode;
  noteId: string;
}

const initialState: DialogState = {
  isOpen: false,
  mode: 'create',
  noteId: '',
};

export const dialogSlice = createSlice({
  name: 'dialog',
  initialState,
  reducers: {
    openDialog: (state, action: PayloadAction<OpenModalActionPayload>) => {
      state.isOpen = true;
      state.mode = action.payload.mode;
      state.noteId = action.payload.noteId;
    },
    closeDialog: (state) => {
      state.isOpen = false;
    },
  },
});

export const { openDialog, closeDialog } = dialogSlice.actions;

export const selectDialog = (state: RootState) => state.dialog;

export const selectIsOpen = createSelector(
  selectDialog,
  (dialog) => dialog.isOpen
);

export const selectMode = createSelector(selectDialog, (dialog) => dialog.mode);

export const selectNoteId = createSelector(
  selectDialog,
  (dialog) => dialog.noteId
);

export default dialogSlice.reducer;
