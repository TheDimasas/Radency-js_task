import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Note } from '../core/interfaces';
import { selectActive, selectArchive } from '../core/notes.slice';

import NoteRow from '../components/NoteRow';
import Table, { TableColumn } from '../components/Table';

const NotesTable = () => {
  const [isArchive, updateStatus] = useState(false);

  const active = useSelector(selectActive);
  const archive = useSelector(selectArchive);

  const columns: TableColumn[] = useMemo(
    () => [
      {
        id: '1',
        title: '',
        className: 'logo',
      },
      {
        id: '2',
        title: 'Name',
      },
      {
        id: '3',
        title: 'Created',
      },
      {
        id: '4',
        title: 'Category',
      },
      {
        id: '5',
        title: 'Content',
      },
      {
        id: '6',
        title: 'Dates',
      },
      {
        id: '7',
        title: (
          <div onClick={() => updateStatus((isArchive) => !isArchive)}>
            <i className='bi bi-arrow-repeat'></i>
            {isArchive ? 'Archive' : 'Active'} Notes
          </div>
        ),
        className: 'toggle',
        colSpan: 3,
      },
    ],
    [isArchive]
  );

  return (
    <Table
      columns={columns}
      data={isArchive ? archive : active}
      renderRow={(el: Note) => (
        <NoteRow key={el.id} note={el} isArchive={isArchive} />
      )}
      headClassName='list-head'
    />
  );
};

export default NotesTable;
