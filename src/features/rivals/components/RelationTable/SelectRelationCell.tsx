import { useContext, useEffect, useState } from 'react';
import { TableInstance } from 'react-table';

import { RivalContext, selectRelation } from '@/providers/RivalProvider';

export type SelectRelationCellProps<D extends object> = TableInstance<D> & {
  value: boolean | string;
};

export const SelectRelationCell = <D extends object>({
  row,
  cell,
  value: initialValue,
}: SelectRelationCellProps<D>) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);
  const [, dispatch] = useContext(RivalContext);

  const onClick = () => {
    console.log({ initialValue, orig: row.original, cell });
    if (typeof initialValue === 'boolean') {
      dispatch(
        selectRelation({
          rivalName: row.original.character,
          playerName: row.original.player,
          type: cell.column.id,
        })
      );
    }
  };

  // If the initialValue is changed externall, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (value && typeof value === 'boolean')
    return (
      <td className='cursor-pointer' onClick={onClick}>
        🌕
      </td>
    );
  return (
    <td
      className='cursor-pointer'
      title={`Set Relation ${cell.column.id}`}
      onClick={onClick}>
      {value || '🌑'}
    </td>
  );
};
