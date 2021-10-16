import * as uuid from 'uuid';

import { Note, CategoryStatictic, NoteDto } from '../interfaces/interfaces';
import Notes from '../data/notes.data';
import { getCreatedDate, getDates } from '../helpers/helper';

const store: { Notes: Note[] } = {
  Notes,
};

class NotesRepository {
  createNote = (noteDto: NoteDto) => {
    const note: Note = {
      ...noteDto,
      id: uuid.v4(),
      created: getCreatedDate(),
      dates: getDates(noteDto.content),
      archived: false,
    };

    store.Notes = [...store.Notes, note];
    return note;
  };

  getAllNotes = () => store.Notes;

  getNote = (id: string) => {
    const note = store.Notes.find((note) => note.id === id);

    if (!note) {
      throw new Error('Note with this id was not found');
    }

    return note;
  };

  getStats = () => {
    return store.Notes.reduce<CategoryStatictic[]>((acc, note) => {
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
    }, []);
  };

  updateNote = (noteDto: NoteDto, id: string) => {
    const note = store.Notes.find((item) => item.id === id);

    if (note) {
      note.name = noteDto?.name || note.name;
      note.category = noteDto?.category || note.category;
      note.content = noteDto?.content || note.content;
      note.dates = getDates(note.content);
    } else throw new Error('Note with this id was not found');

    return note;
  };

  deleteNote = (id: string) => {
    const note = store.Notes.find((note) => note.id === id);

    if (!note) {
      throw new Error('Note with this id was not found');
    }
    store.Notes = store.Notes.filter((note) => note.id !== id);

    return note;
  };

  getActive = () => store.Notes.filter((item) => !item.archived);

  getArchive = () => store.Notes.filter((item) => item.archived);

  changeStatusNote = (id: string) => {
    const note = store.Notes.find((note) => note.id === id);

    if (note) {
      note.archived = !note.archived;
    } else throw new Error('Note with this id was not found');

    return note;
  };
}

export default new NotesRepository();
