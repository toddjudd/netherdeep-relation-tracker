import { Route, Routes } from 'react-router-dom';

import { RivalTracker } from './RivalTracker';

export const RivalRoutes = () => {
  return (
    <Routes>
      <Route path='' element={<RivalTracker />} />
    </Routes>
  );
};
