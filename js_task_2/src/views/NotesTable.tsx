import { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';

import { Note } from '../core/interfaces';
import { getActive, getArchive } from '../core/notes.slice';

import NoteRow from '../components/NoteRow';
import Table, { TableColumn } from '../components/Table';

const NotesTable = () => {
  const [isArchive, updateStatus] = useState(false);

  const active = useSelector(getActive);
  const archive = useSelector(getArchive);

  const columns: TableColumn[] = useMemo(
    () => [
      {
        title: '',
        className: 'logo',
      },
      {
        title: 'Name',
      },
      {
        title: 'Created',
      },
      {
        title: 'Category',
      },
      {
        title: 'Content',
      },
      {
        title: 'Dates',
      },
      {
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
      renderRow={(el: Note) => <NoteRow note={el} isArchive={isArchive} />}
      headClassName='list-head'
    />
  );
};

export default NotesTable;
