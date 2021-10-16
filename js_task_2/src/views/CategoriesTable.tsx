import { useSelector } from 'react-redux';

import CategoryRow from '../components/CategoryRow';
import Table, { TableColumn } from '../components/Table';
import { CategoryStatictic } from '../core/interfaces';
import { selectStatistic } from '../core/notes.slice';

const columns: TableColumn[] = [
  {
    id: '1',
    title: '',
    className: 'logo',
  },
  {
    id: '2',
    title: 'Category',
  },
  {
    id: '3',
    title: 'Active',
  },
  {
    id: '4',
    title: 'Archived',
  },
];

const CategoriesTable = () => {
  const categories = useSelector(selectStatistic);

  return (
    <Table
      columns={columns}
      data={categories}
      renderRow={(el: CategoryStatictic) => (
        <CategoryRow key={el.name} category={el} />
      )}
      headClassName='statistics-head'
    />
  );
};

export default CategoriesTable;
