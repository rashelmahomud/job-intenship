import React from 'react';
import JobSearch from './JobSearch';
import NewSite from './NewSite';
import Banner from './page/Banner';
import RecommendadJob from './page/RecommendadJob';
import SearchBox from './SearchBox';

const Home = () => {
    return (
        <div className='mt-20 bg-red-50'>
            <Banner />
            <SearchBox />
            <RecommendadJob />
            <JobSearch />
            <NewSite />
        </div>
    );
};

export default Home;