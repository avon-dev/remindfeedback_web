import React, { useEffect, useCallback,useRef } from 'react';
import axios from 'axios';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppMain from '../container/main';
import AppFooter from '../components/AppFooter';
import { layouts,layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
import { FEEDBACK_READ_REQUEST } from '../reducers/feedback';
import { FEEDBACK_SUB_READ_REQUEST } from '../reducers/feedbackSubject';
import { useDispatch, useSelector } from 'react-redux';
import Router  from 'next/router';
import Error from 'next/error';
const { Footer, Content, Sider } = Layout;

const Main = () => {

    const dispatch = useDispatch();
    const {LoadedFeedbackErrorReason, feedback, hasMoreFeedback } = useSelector(state=>state.feedback);
    const {feedbackMode} = useSelector(state => state.feedbackMode);
    const countRef = useRef([]);
    // if(LoadedFeedbackErrorReason.config.headers.Cookie===""){
    //     return <Error statusCode={LoadedFeedbackErrorReason.message}/>
    // }
    const handleScroll = useCallback(() => {
            if(window.scrollY+document.documentElement.clientHeight > document.documentElement.scrollHeight - 300){
                if(hasMoreFeedback){
                    const lastId = feedback.myFeedback[feedback.myFeedback.length - 1].id;
                    const feedbackModes = feedbackMode;
                    if(!countRef.current.includes(lastId)){
                        dispatch({
                            type:FEEDBACK_READ_REQUEST,
                            data:{
                                lastId, feedbackModes
                            }
                        });
                        countRef.current.push(lastId);
                    }
            } 
        }
    },[feedback.myFeedback&&feedback.myFeedback.length,hasMoreFeedback&&hasMoreFeedback]);
    

    useEffect(()=>{
            window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll",handleScroll);
        };
    },[feedback.myFeedback&&feedback.myFeedback.length]);

    

    return(
        <>
            <Layout style={feedback.myFeedback&&feedback.myFeedback.length>=7?layouts:layout} >
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
    console.log("서버냐",context.isServer);
    const {feedbackMode} = context.store.getState();
    const feedbackModes = feedbackMode.feedbackMode;
    const lastId = 0;
    if(context.isServer){
        const cookies = context.req.headers.cookie;
        axios.defaults.headers.Cookie = cookies;
        // context.store.dispatch({
        //     type:FEEDBACK_READ_REQUEST,
        //     data:{
        //         feedbackModes,lastId
        //     }
        // });
        context.store.dispatch({
            type:FEEDBACK_SUB_READ_REQUEST
        })
        
    }else{
        // context.store.dispatch({
        //     type:FEEDBACK_READ_REQUEST,
        //     data:{
        //         feedbackModes,lastId
        //     }
        // });
        // context.store.dispatch({
        //     type:FEEDBACK_SUB_READ_REQUEST
        // });
    }
};

export default Main;