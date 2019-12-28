import React from 'react';
import axios from 'axios';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppFeedbackDetail from '../container/feedBackDetail';
import AppFooter from '../components/AppFooter';
import { FEEDBACK_ITEM_READ_REQUEST, FEEDBACK_READ_REQUEST} from '../reducers/feedback';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
const { Footer, Content, Sider } = Layout;

const feedbackdetail = ({feedback_id}) => {
    return(
        <>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppSidebar/>
                    </Sider>
                    <Content>
                        <AppFeedbackDetail
                            feedback_id={feedback_id}
                        />
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
            
        </>
    );
};

feedbackdetail.getInitialProps = async(context) => {
    console.log("서버냐",context.isServer);
    if(context.isServer){
        const {feedbackMode} = context.store.getState();
        const feedbackModes = feedbackMode.feedbackMode;
        const lastId = 0;
        const cookie = context.req.headers.cookie;
        axios.defaults.headers.Cookie = cookie;
        context.store.dispatch({
            type:FEEDBACK_ITEM_READ_REQUEST,
            data:parseInt(context.query.id),
        });
        context.store.dispatch({
            type:FEEDBACK_READ_REQUEST,
            data:{
                lastId, feedbackModes
            }
        });
        return {feedback_id: parseInt(context.query.id)};
    }else{
        console.log(context.query);
        context.store.dispatch({
            type:FEEDBACK_ITEM_READ_REQUEST,
            data:parseInt(context.query.id),
        });
        return {feedback_id: parseInt(context.query.id)};
    }
};

export default feedbackdetail;