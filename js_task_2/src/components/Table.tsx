export interface TableColumn {
  title: string | JSX.Element;
  className?: string;
  id?: string;
  colSpan?: number;
}

export interface TableProps {
  columns: TableColumn[];
  data: any[];
  renderRow: (el: any) => JSX.Element;
  headClassName?: string;
}

const Table: React.FC<TableProps> = ({
  columns,
  data,
  renderRow,
  headClassName,
}) => {
  return (
    <table>
      <thead className={headClassName}>
        <tr>
          {columns.map((col) => (
            <th id={col.id} className={col.className} colSpan={col.colSpan}>
              {col.title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{data.map((el: any) => renderRow(el))}</tbody>
    </table>
  );
};

export default Table;
