import { useDispatch } from 'react-redux';

import { Note } from '../core/interfaces';
import { openDialog } from '../core/dialog.slice';
import { changeStatusNote, deleteNote } from '../core/notes.slice';

import Icon from './Icon';

interface NoteRowProps {
  note: Note;
  isArchive: boolean;
}

const NoteRow: React.FC<NoteRowProps> = ({ note, isArchive }) => {
  const dispatch = useDispatch();

  const archiveIcon = isArchive ? (
    <i className='bi bi-box-arrow-in-up'></i>
  ) : (
    <i className='bi bi-box-arrow-in-down'></i>
  );

  const openModal = () => {
    dispatch(openDialog({ mode: 'edit', noteId: note.id }));
  };

  return (
    <tr>
      <td className='logo'>
        <Icon category={note.category} />
      </td>
      <td>{note.name}</td>
      <td>{note.created}</td>
      <td>{note.category}</td>
      <td>{note.content}</td>
      <td>{note.dates}</td>
      <td className='icon' onClick={openModal}>
        <i className='bi bi-pencil-fill'></i>
      </td>
      <td className='icon' onClick={() => dispatch(changeStatusNote(note.id))}>
        {archiveIcon}
      </td>
      <td className='icon' onClick={() => dispatch(deleteNote(note.id))}>
        <i className='bi bi-trash-fill'></i>
      </td>
    </tr>
  );
};

export default NoteRow;
