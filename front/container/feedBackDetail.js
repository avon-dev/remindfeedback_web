import React,{useEffect,useState} from 'react';
import { Row, Col, Divider, Typography, Button, Input  } from 'antd';
import FeedBackDetailLists from '../container/feedBackDetailList';
import FeedBackDetailComments from '../container/feedBackDetailComment';
import { useDispatch, useSelector } from 'react-redux';
const {Title, Text} = Typography;

const feedBackDetail = ({feedback_id}) => {

    const dispatch = useDispatch();
    const {feedback} = useSelector(state=>state.feedback);

    const [feedbackTitle, setFeedbackTitle] = useState('');

    useEffect(()=>{
        setFeedbackTitle(feedback.myFeedback.find((v,i)=>parseInt(v.id)===parseInt(feedback_id)).title);
    },[]);

    return(
        <>
            <Row>
                <Col span={1}/>
                <Col span={23} style={{textAlign:'center', marginTop:25, marginBottom:25}}>
                    <Title level={3}><strong>{feedbackTitle}</strong></Title>
                </Col>
                <Col span={1}/>
            </Row>
            <Row>
                <Col span={1}/>
                <Col span={22}>
                    <FeedBackDetailLists
                        feedback_id={feedback_id}
                    />
                        {/* <Col span={1} style={{textAlign:'center'}}>
                            <Divider type="vertical" style={{border:'2px solid black', height:'100vh',}} />
                        </Col> */}
                   <FeedBackDetailComments/>
                </Col>
            </Row>
        </>
    )
}

export default feedBackDetail;