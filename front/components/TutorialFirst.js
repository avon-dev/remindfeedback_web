import React, { useState } from 'react';
import { Row, Col, Typography, Button} from 'antd';
import {shadowBorder, layoutCenter} from '../css/tutorial';
import {backgroundWhite} from '../css/Common';
import logoImg from '../img/logo1.png';

const {Text} = Typography;

const TutorialFirst = () => {
    
    return(
        <>
            <Row style={layoutCenter}>
                <Col span={8}></Col>
                <Col span={8}>
                    <Col span={24} style={{textAlign:'center', marginBottom:5}}>
                        <img src={logoImg} width='50%'/>
                    </Col>
                    <Col span={24} style={{textAlign:'center'}}>
                        <Text style={{fontSize:20, color:'#ffffff'}}><strong>RemindFeedback</strong></Text> 
                    </Col>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row style={backgroundWhite}>
                <Col span={24} style={{textAlign:'center', padding:20}}>
                    <Text><strong>Remind Feedback에 오신 여러분들 <br/> 환영합니다.</strong></Text> 
                </Col>
            </Row>
        </>
    )
}

export default TutorialFirst;