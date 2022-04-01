import { Rivals as RivalsData } from '@/config';

import { Goals, Portrait, RelationTable, Title } from '../components';

export const RivalTracker = () => {
  return (
    <div
      className={`max-h-screen max-w-screen grid grid-cols-${RivalsData.length} grid-rows-[minmax(0,1fr)_auto_auto_minmax(0,1fr)] `}>
      {RivalsData.map(({ imgSrc, name, goals, relations }) => (
        <>
          <Portrait src={imgSrc} className='row-start-1' />
          <Title name={name} className='row-start-2' />
          <Goals goals={goals} className='row-start-3' />
          <RelationTable relations={relations} className='row-start-4' />
        </>
      ))}
    </div>
  );
};
