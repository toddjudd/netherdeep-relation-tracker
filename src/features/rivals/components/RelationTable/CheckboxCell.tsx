import { useEffect, useState } from 'react';
import { TableInstance } from 'react-table';

export type CheckboxCellProps<D extends object> = TableInstance<D> & {
  value: boolean | string;
};

export const CheckboxCell = <D extends object>({
  value: initialValue,
}: CheckboxCellProps<D>) => {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue);

  const onClick = () => {
    if (typeof value === 'boolean') {
      setValue(!value);
    }
  };

  // If the initialValue is changed externall, sync it up with our state
  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  if (value && typeof value === 'boolean')
    return (
      <td className='cursor-pointer' onClick={onClick}>
        ✔
      </td>
    );
  return (
    <td className='cursor-pointer' onClick={onClick}>
      {value || '⚪'}
    </td>
  );
};
