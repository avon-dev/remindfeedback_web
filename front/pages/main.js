import React from 'react';
import Head from 'next/head';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppHeader from '../components/AppHeader';

const Home = () => {
    return(
        <>
            <AppHeader/>
            <AppTopbar>
                
            </AppTopbar>
            <AppSidebar>
                <div>Main</div>
            </AppSidebar>
        </>
    );
};

export default Home;