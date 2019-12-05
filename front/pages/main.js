import React, { useEffect, useCallback } from 'react';
import axios from 'axios';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppMain from '../container/main';
import AppFooter from '../components/AppFooter';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
import { FEEDBACK_READ_REQUEST } from '../reducers/feedback';
import { useDispatch, useSelector } from 'react-redux';
import Router  from 'next/router';
import Error from 'next/error';
const { Footer, Content, Sider } = Layout;

const Main = () => {

    const dispatch = useDispatch();
    const {LoadedFeedbackErrorReason, feedback, hasMorePost  } = useSelector(state=>state.feedback);

    // if(LoadedFeedbackErrorReason.config.headers.Cookie===""){
    //     return <Error statusCode={LoadedFeedbackErrorReason.message}/>
    // }

    const onScroll = useCallback(()=>{
        if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
            const lastId = feedback[feedback.length - 1].index;
            if(hasMorePost){
                dispatch({
                    type:FEEDBACK_READ_REQUEST,
                    lastId,
                });
            }
        }
    },[hasMorePost, feedback.length]);

    // useEffect(()=>{
    //     window.addEventListener('scroll',onScroll);
    //     return() => {
    //         window.removeEventListener('scroll',onScroll);
    //     }
    // },[feedback.length]);

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
    const {feedback} = context.store.getState();
    const lastId = 0;

    if(context.isServer&&cookie){
        axios.defaults.headers.Cookie = cookie;
    }
    context.store.dispatch({
        type:FEEDBACK_READ_REQUEST,
        lastId,
    });
};

export default Main;