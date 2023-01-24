import React from 'react';
import NewSite from './NewSite';
import Banner from './page/Banner';
import SearchBox from './SearchBox';

const Home = () => {
    return (
        <div className='mt-20 bg-red-50'>
            <Banner />
            <SearchBox />
            <NewSite />
        </div>
    );
};

export default Home;