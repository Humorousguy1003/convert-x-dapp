import React from 'react';
import { Link } from 'react-router-dom';
import { routes, routeNames } from '../../routes';

export const Header = () => {
    return (
        <header className='header'>
            <div className="container-fluid">
                <div className="header-left">
                    <Link to={routeNames.home}>
                        <img className="logo-light" src="/images/logo.png" width="58" height="58" alt="Main Logo" />
                    </Link>
                    <div className="menu-btns">
                        <Link to="#" className="menu-btn convert-btn active">CONVERT</Link>
                        <Link to="#" className="menu-btn tokens-btn">TOKENS</Link>
                        <Link to="#" className="menu-btn pools-btn">POOLS</Link>
                    </div>
                    <div className="menu-dropdown">
                        <Link to="#" className="nav-dropdown-bar">
                            <span className="circle"></span>
                            <span className="circle"></span>
                            <span className="circle"></span>
                        </Link>
                        <div className="dropdown-box">
                            <Link to="#" className="hidden">CONVERT</Link>
                            <Link to="#" className="hidden">TOKENS</Link>
                            <Link to="#" className="hidden">POOLS</Link>
                            <Link to="#">
                                {/* <img src="/images/svgs/" /> */}
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="header-right text-white">
                    <div className="d-flex align-items-center">
                        <img src="/images/multiverse.png" width="30" height="30" alt="Muliverse Image" />
                        MuliversX
                    </div>
                    <Link to="#" className="wallet-btn btn btn-gradient text-white">Connect Wallet</Link>
                </div>
            </div>
        </header>
    );
};