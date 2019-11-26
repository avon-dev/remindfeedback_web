import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col,} from 'antd';
import GetFeedBack from '../container/getFeedback';
import SetFeedBack from '../container/setFeedback';
import {FEEDBACK_READ_REQUEST} from '../reducers/feedback';

const main = () => {

    const dispatch = useDispatch();
    const { feedbackMode, isLoggedIn } = useSelector(state=> state.feedbackMode);
   
    useEffect(()=>{
        if(isLoggedIn){
            // jwt 토큰 만료 되었는지, 검사 필요
           dispatch({
               type:FEEDBACK_READ_REQUEST,
               data:localStorage.getItem('accessToken'),
           }) 
        }
    },[]);

// feedbackMode?'요청받은 피드백': '내 피드백'
    return(
        <>
            <Row>
                <Col span={6}/>
                <Col span={12}>
                    {feedbackMode?<GetFeedBack/>:<SetFeedBack/>}
                </Col>
                <Col span={6}/>
            </Row>
        </>
    )
}

export default main;