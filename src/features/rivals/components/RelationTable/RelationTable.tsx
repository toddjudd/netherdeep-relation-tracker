import clsx from 'clsx';
import { useMemo } from 'react';
import { Table } from 'react-bootstrap';
import { useTable } from 'react-table';

import { Relation } from '@/features/rivals';

import { CheckboxCell } from './CheckboxCell';

export type RelationTableProps = {
  relations: Relation[];
  className?: string;
};

export const RelationTable = ({ relations, className }: RelationTableProps) => {
  const data = useMemo(() => relations, [relations]);
  const columns = useMemo(
    () => [
      {
        Header: 'Player',
        accessor: 'player',
      },
      {
        Header: '😠',
        accessor: 'hostile',
      },
      {
        Header: '😐',
        accessor: 'indifferent',
      },
      {
        Header: '😀',
        accessor: 'friendly',
      },
    ],
    []
  );

  const defaultColumn = useMemo(
    () => ({
      Cell: CheckboxCell,
    }),
    []
  );
  const { getTableProps, headerGroups, prepareRow, rows, getTableBodyProps } =
    useTable({
      columns,
      defaultColumn,
      data,
    });
  return (
    <div className={clsx(className, 'text-sm')}>
      <Table
        striped
        bordered
        hover
        size='sm'
        responsive='sm'
        {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.getHeaderGroupProps().key}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  key={column.getHeaderProps().key}>
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.getRowProps().key}>
                {row.cells.map((cell) => {
                  return cell.render('Cell', { editable: true });
                })}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};
