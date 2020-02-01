import React from 'react';
import axios from 'axios';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppSubject from '../container/subjects';
import AppFooter from '../components/AppFooter';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
import {FEEDBACK_SUB_READ_REQUEST} from '../reducers/feedbackSubject';
const { Footer, Content, Sider } = Layout;

const subject = () => {
    return(
        <>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppSidebar/>
                    </Sider>
                    <Content>
                        <AppSubject/>
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
            
        </>
    );
};

subject.getInitialProps = async(context) => {
    console.log("서버냐",context.isServer);
    if(context.isServer){
        const cookie = context.req.headers.cookie;
        axios.defaults.headers.Cookie = cookie;
        context.store.dispatch({
            type:FEEDBACK_SUB_READ_REQUEST
        })
    }else{
        context.store.dispatch({
            type:FEEDBACK_SUB_READ_REQUEST
        })
    }
};

export default subject;