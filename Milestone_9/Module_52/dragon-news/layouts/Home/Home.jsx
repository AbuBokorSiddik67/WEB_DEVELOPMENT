import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <header>
                <nav>
                    <Header></Header>
                    <Outlet></Outlet>
                </nav>
            </header>
            <main></main>
        </div>
    );
};

export default Home;