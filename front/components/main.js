import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col,} from 'antd';
import GetFeedBack from '../container/getFeedback';
import SetFeedBack from '../container/setFeedback';

const main = () => {

    const { feedbackMode } = useSelector(state=> state.feedbackMode);
   
feedbackMode?'요청받은 피드백': '내 피드백'
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