import React from 'react';
import { AuthenticatedRoutesWrapper } from '@multiversx/sdk-dapp/wrappers';
import { useLocation } from 'react-router-dom';
import { routes, routeNames } from 'routes';
import { Header } from '../features/header';

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { search } = useLocation();
  return (
    <div className=' d-flex flex-column flex-fill wrapper'>
      <div className="page-wrapper">
        <Header />
        <main className='d-flex flex-column flex-grow-1'>
          <AuthenticatedRoutesWrapper
            routes={routes}
            unlockRoute={`${routeNames.unlock}${search}`}
          >
            {children}
          </AuthenticatedRoutesWrapper>
        </main>
      </div>
      <img src="/images/bg-1.png" width="1440" height="751" alt="Svg" className="bg-svg-1" />
      <img src="/images/bg-2.png" width="1440" height="674" alt="Svg" className="bg-svg-2" />
    </div>
  );
};
