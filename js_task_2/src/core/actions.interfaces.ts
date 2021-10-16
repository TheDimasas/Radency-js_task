import { DialogMode } from './dialog.slice';

export interface CreateNoteActionPayload {
  name: string;
  category: string;
  content: string;
}

export interface UpdateNoteActionPayload {
  id: string;
  name: string;
  category: string;
  content: string;
}

export interface OpenModalActionPayload {
  noteId: string;
  mode: DialogMode;
}
