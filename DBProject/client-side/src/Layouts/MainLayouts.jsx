import React from 'react';
import Header from '../components/Header/Header';
import Data from '../components/Data/Data';
import { Outlet } from 'react-router';

const MainLayouts = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayouts;