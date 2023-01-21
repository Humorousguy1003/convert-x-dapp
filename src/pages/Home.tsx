import * as React from 'react';
import { Link } from 'react-router-dom';
import { AuthRedirectWrapper } from 'components';
import { dAppName } from 'config';
import { routeNames } from 'routes';

const HomePage = () => {
  return (
    <div className='d-flex flex-fill align-items-center container'>
      <div className="home-box">
        <h3 className="home-title">
          C
          <img src="/images/convert.png" width="23" height="26" alt="Convert image" />
          nvert
        </h3>
        <p style={{ color: '#4E535F' }}>Trade token in an instant</p>
        <img src="/images/vector-1.png" alt="Vector image" width="188" height="4" style={{ width: '39.4%' }} />
        <p className="text-right">
          <img src="/images/svgs/settings.svg" />
        </p>
        <div className="token-box">
          <Link to="#" className="token-list">Select Token</Link>
          <div className="token-amount">0.00</div>
        </div>
        <img src="/images/svgs/vector-3.svg" />
        <div className="token-box">
          <Link to="#" className="token-list">Select Token</Link>
          <div className="token-amount">0.00</div>
        </div>
        <Link to="#" className="wallet-btn w-100 btn btn-gradient text-white">Connect Wallet</Link>
      </div>
    </div>
  );
};

export const Home = () => (
  <AuthRedirectWrapper>
    <HomePage />
  </AuthRedirectWrapper>
);
