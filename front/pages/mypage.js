import React from 'react';
import axios from 'axios';
import AppMypageSidebar from '../components/AppMypageSidebar';
import AppTopbar from '../components/AppTopbar';
import AppFooter from '../components/AppFooter';
import AppMypage from '../container/mypage';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
import {LOAD_USER_REQUEST} from '../reducers/user';

const { Footer, Content, Sider } = Layout;

const mypage = () => {
    return(
        <>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppMypageSidebar/>
                    </Sider>
                    <Content>
                        <AppMypage />
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
            
        </>
    );
};

mypage.getInitialProps = async(context) => {
    console.log("서버냐",context.isServer);
    if(context.isServer){
        const cookie = context.req.headers.cookie;
        axios.defaults.headers.Cookie = cookie;
        context.store.dispatch({
            type:LOAD_USER_REQUEST,
        });
    }else{
        context.store.dispatch({
            type:LOAD_USER_REQUEST,
        });
    }
};

export default mypage;