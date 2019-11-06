import React from 'react';
import { Row, Col, Divider, Typography, Button, Breadcrumb, Icon, Card, Comment, Tooltip, Avatar, Input, Form } from 'antd';
import moment from 'moment';
import FeedBackDetailLists from '../container/feedBackDetailList';
import FeedBackDetailComments from '../container/feedBackDetailComment';

const { TextArea } = Input;
const {Title, Text} = Typography;
const {Group} = Button;

const feedBackDetail = () => {

    return(
        <>
            <Row>
                <Col span={1}></Col>
                <Col span={23} style={{textAlign:'center', marginTop:25, marginBottom:25}}>
                    <Title level={3}><strong>피드백 제목</strong></Title>
                </Col>
            </Row>
            <Row>
                <Col span={1}></Col>
                <Col span={23}>
                    <FeedBackDetailLists/>
                        <Col span={1} style={{textAlign:'center'}}>
                            <Divider type="vertical" style={{border:'1px solid black', height:'100vh'}} />
                        </Col>
                   <FeedBackDetailComments/>
                </Col>
            </Row>
        </>
    )
}

export default feedBackDetail;