import { useSelector } from 'react-redux';

import CategoryRow from '../components/CategoryRow';
import Table, { TableColumn } from '../components/Table';
import { CategoryStatictic } from '../core/interfaces';
import { getStatistics } from '../core/notes.slice';

const columns: TableColumn[] = [
  {
    title: '',
    className: 'logo',
  },
  {
    title: 'Category',
  },
  {
    title: 'Active',
  },
  {
    title: 'Archived',
  },
];

const CategoriesTable = () => {
  const categories = useSelector(getStatistics);

  return (
    <Table
      columns={columns}
      data={categories}
      renderRow={(el: CategoryStatictic) => <CategoryRow category={el} />}
      headClassName='statistics-head'
    />
  );
};

export default CategoriesTable;
