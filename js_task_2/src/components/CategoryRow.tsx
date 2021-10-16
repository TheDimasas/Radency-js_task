import { CategoryStatictic } from '../core/interfaces';
import Icon from './Icon';

interface CategoryRowProps {
  category: CategoryStatictic;
}

const CategoryRow: React.FC<CategoryRowProps> = ({ category }) => {
  return (
    <tr>
      <td className='logo'>
        <Icon category={category.name} />
      </td>
      <td>{category.name}</td>
      <td>{category.active}</td>
      <td>{category.archived}</td>
    </tr>
  );
};

export default CategoryRow;
