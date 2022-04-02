import { useContext } from 'react';

import { addPlayer, RivalContext } from '@/providers/RivalProvider';

import { Goals, Portrait, RelationTable, Title } from '../components';

export const RivalTracker = () => {
  const [rivals, dispatch] = useContext(RivalContext);
  const onClick = () => {
    dispatch(addPlayer({ playerName: 'player' }));
  };
  return (
    <div
      className={`max-h-screen max-w-screen grid grid-cols-${rivals.length} grid-rows-[minmax(0,1fr)_auto_auto_auto_auto] gap-1 p-1`}>
      {rivals.map(({ imgSrc, name, goals, relations }) => (
        <>
          <Portrait src={imgSrc} className='row-start-1' />
          <Title name={name} className='row-start-2' />
          <Goals goals={goals} className='row-start-3' />
          <RelationTable relations={relations} className='row-start-4' />
        </>
      ))}
      <div className='col-span-full'>
        <button
          className='p-2 bg-red-700 text-white rounded-md text-xs border-0'
          onClick={onClick}>
          Add Player ➕
        </button>
      </div>
    </div>
  );
};
