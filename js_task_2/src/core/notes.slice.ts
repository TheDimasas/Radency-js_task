import { createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit';

import { CategoryStatictic, Note } from './interfaces';
import {
  CreateNoteActionPayload,
  UpdateNoteActionPayload,
} from './actions.interfaces';
import { Notes } from './data';
import { RootState } from './store';
import { getCreatedDate, getDates } from './helper';

interface NotesState {
  notes: Note[];
}

const initialState: NotesState = {
  notes: Notes,
};

export const notesSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<Note[]>) => {
      state.notes = action.payload;
    },
    createNote: (state, action: PayloadAction<CreateNoteActionPayload>) => {
      const note: Note = {
        ...action.payload,
        id: Date.now().toString(),
        created: getCreatedDate(),
        dates: getDates(action.payload.content),
        archived: false,
      };
      state.notes.push(note);
    },
    updateNote: (state, action: PayloadAction<UpdateNoteActionPayload>) => {
      const note = state.notes.find((item) => item.id === action.payload.id);

      if (note) {
        note.name = action.payload.name;
        note.category = action.payload.category;
        note.content = action.payload.content;
        note.dates = getDates(note.content);
      }
    },
    deleteNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
    },
    changeStatusNote: (state, action: PayloadAction<string>) => {
      const note = state.notes.find((note) => note.id === action.payload);

      if (note) {
        note.archived = !note.archived;
      }
    },
  },
});

export const {
  setNotes,
  createNote,
  updateNote,
  deleteNote,
  changeStatusNote,
} = notesSlice.actions;

export const selectNotes = (state: RootState) => state.notes.notes;

export const selectNote = (id: string) =>
  createSelector(selectNotes, (notes) => notes.find((item) => item.id === id));

export const selectActive = createSelector(selectNotes, (notes) =>
  notes.filter((item) => !item.archived)
);

export const selectArchive = createSelector(selectNotes, (notes) =>
  notes.filter((item) => item.archived)
);

export const selectStatistic = createSelector(selectNotes, (notes) =>
  notes.reduce<CategoryStatictic[]>((acc, note) => {
    const category = acc.find((cat) => cat.name === note.category);

    if (!category) {
      return [
        ...acc,
        {
          name: note.category,
          active: note.archived ? 0 : 1,
          archived: note.archived ? 1 : 0,
        },
      ];
    }

    note.archived ? category.archived++ : category.active++;
    return acc;
  }, [])
);

export default notesSlice.reducer;
