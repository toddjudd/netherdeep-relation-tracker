import * as React from 'react';
import Button from 'react-bootstrap/Button';
import { ErrorBoundary } from 'react-error-boundary';
import { BrowserRouter as Router } from 'react-router-dom';

import { RivalProvider } from '@/providers/RivalProvider';

const ErrorFallback = () => {
  return (
    <div
      className='text-red-500 w-screen h-screen flex flex-col justify-center items-center'
      role='alert'>
      <h2 className='text-lg font-semibold'>Ooops, something went wrong :( </h2>
      <Button
        className='mt-4'
        onClick={() => window.location.assign(window.location.origin)}>
        Refresh
      </Button>
    </div>
  );
};

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Router basename={process.env.PUBLIC_URL}>
        <RivalProvider>{children}</RivalProvider>
      </Router>
    </ErrorBoundary>
  );
};