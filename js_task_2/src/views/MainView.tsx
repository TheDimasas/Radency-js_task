import NotesTable from '../views/NotesTable';
import CategoriesTable from '../views/CategoriesTable';

import Dialog from '../components/Dialog';
import { useDispatch } from 'react-redux';
import { openDialog } from '../core/dialog.slice';

const MainView: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <div className='App'>
      <NotesTable />
      <div className='wrapper'>
        <button
          onClick={() => dispatch(openDialog({ mode: 'create', noteId: '' }))}
        >
          Create Note
        </button>
      </div>
      <Dialog />
      <CategoriesTable />
    </div>
  );
};

export default MainView;
