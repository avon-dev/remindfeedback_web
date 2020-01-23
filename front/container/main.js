import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col,} from 'antd';
import GetFeedBack from '../container/getFeedback';
import SetFeedBack from '../container/setFeedback';


const main = () => {

    const dispatch = useDispatch();
    const { feedbackMode, isLoggedIn } = useSelector(state=> state.feedbackMode);
    const { feedback } = useSelector(state=> state.feedback);
    
// feedbackMode?'요청받은 피드백': '내 피드백'
    return(
        <>
            <Row>
                <Col span={6}/>
                <Col span={12}>
                <SetFeedBack 
                        myFeedback={feedback.myFeedback}
                     />
                    {/* {feedbackMode?
                    <GetFeedBack 
                        requestedFeedback={feedback.yourFeedback} 
                    />
                    :<SetFeedBack 
                        myFeedback={feedback.myFeedback}
                     />} */}
                </Col>
                <Col span={6}/>
            </Row>
        </>
    )
}

export default main;
