import React from 'react';
import Head from 'next/head';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';

const Home = () => {
    return(
        <>
            <Head>
                <title>RemindFeedBack</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.16.2/antd.css" />
            </Head>
            <AppTopbar>
                
            </AppTopbar>
            <AppSidebar>
                <div>Main</div>
            </AppSidebar>
        </>
    );
};

export default Home;