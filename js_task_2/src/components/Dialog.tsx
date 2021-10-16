import { FormEvent, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {
  closeDialog,
  selectIsOpen,
  selectMode,
  selectNoteId,
} from '../core/dialog.slice';
import { createNote, selectNote, updateNote } from '../core/notes.slice';

const Dialog: React.FC = () => {
  const [error, setError] = useState('');
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useDispatch();

  const isOpen = useSelector(selectIsOpen);
  const mode = useSelector(selectMode);
  const noteId = useSelector(selectNoteId);
  const note = useSelector(selectNote(noteId));
  // HTMLDialogElement is deprecated(experimental)
  const dialogRef = useRef<any>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
      if (mode === 'edit' && note) {
        setName(note.name);
        setCategory(note.category);
        setContent(note.content);
      }
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen, note, mode]);

  const resetForm = () => {
    dispatch(closeDialog());
    setError('');
    setName('');
    setCategory('');
    setContent('');
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const formData = { name, category: category || 'Task', content };

    if (!formData.name.trim() || !formData.content.trim()) {
      setError('Please fill the form.');
      return;
    }

    if (mode === 'edit') {
      dispatch(updateNote({ ...formData, id: noteId }));
    } else {
      dispatch(createNote({ ...formData }));
    }

    resetForm();
  };

  return (
    <dialog ref={dialogRef} className='dialog'>
      <form
        method='dialog'
        className='form'
        onSubmit={handleSubmit}
        onChange={() => {
          setError('');
        }}
      >
        <label htmlFor='name'>Note name:</label>
        <input
          value={name}
          name='name'
          id='name'
          autoComplete='off'
          required
          onChange={(e) => setName(e.target.value)}
        />
        <section>
          <p>
            <label htmlFor='category'>Choose category:</label>
            <select
              value={category}
              id='category'
              name='category'
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value='Task'>Task</option>
              <option value='Random Thought'>Random Thought</option>
              <option value='Idea'>Idea</option>
              <option value='Quote'>Quote</option>
            </select>
          </p>
        </section>
        <p>Note content:</p>
        <textarea
          name='content'
          id='content'
          wrap='soft'
          maxLength={200}
          cols={40}
          rows={5}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <p className='error-message'>{error}</p>
        <menu>
          <button className='cancel' type='reset' onClick={resetForm}>
            Cancel
          </button>
          <button className='submit' type='submit'>
            Confirm
          </button>
        </menu>
      </form>
    </dialog>
  );
};

export default Dialog;
