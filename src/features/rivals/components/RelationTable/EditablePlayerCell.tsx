import { useContext, useEffect, useState } from 'react';
import { TableInstance } from 'react-table';

import {
  deletePlayer,
  editPlayer,
  RivalContext,
} from '@/providers/RivalProvider';

export type CheckboxCellProps<D extends object> = TableInstance<D> & {
  value: boolean | string;
};

export const EditablePlayerCell = <D extends object>({
  value: initialValue,
}: CheckboxCellProps<D>) => {
  const [, dispatch] = useContext(RivalContext);
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState<string>(initialValue.toString());
  const [editable, setEditable] = useState<boolean>(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onDelete = () => {
    dispatch(
      deletePlayer({
        playerName: initialValue.toString(),
      })
    );
  };

  const onClick = () => {
    setEditable(true);
  };

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    setEditable(false);
    dispatch(
      editPlayer({ playerName: initialValue.toString(), playerNewName: value })
    );
  };

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue.toString());
  }, [initialValue]);

  if (!editable) return <td onClick={onClick}>{value}</td>;

  return (
    <td className='flex justify-between'>
      <input
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        title='Edit Player Name'
      />
      <span className='cursor-pointer' title='Delete Player' onClick={onDelete}>
        ❌
      </span>
    </td>
  );
};
