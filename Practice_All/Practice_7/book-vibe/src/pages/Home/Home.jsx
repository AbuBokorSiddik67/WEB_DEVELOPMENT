import React from 'react';
import Books from '../Book/Books';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData();
    // console.log(data);

    return (

        <div>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
       
    );
};

export default Home;