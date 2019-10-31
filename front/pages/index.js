import React from 'react';
import AppHeader from '../components/AppHeader';
import {Row,Col,Layout } from 'antd';

const { Footer, Content } = Layout;

const Home = () => {
    return(
        <>
            <AppHeader/>
            <Layout>
                <Content>Content</Content>
                <Footer>Footer</Footer>
            </Layout>
        </>
    );
};

export default Home;