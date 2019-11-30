import React from 'react';
import axios from 'axios';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppMain from '../container/main';
import AppFooter from '../components/AppFooter';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
import {FEEDBACK_READ_REQUEST} from '../reducers/feedback';
const { Footer, Content, Sider } = Layout;

const Main = () => {
    return(
        <>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppSidebar/>
                    </Sider>
                    <Content>
                        <AppMain/>
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
        </>
    );
};

Main.getInitialProps = async(context) => {

    const cookie = context.isServer?context.req.headers.cookie:'';
    axios.defaults.headers.Cookie = '';
    if(context.isServer&&cookie){
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type:FEEDBACK_READ_REQUEST,
    });
};

export default Main;