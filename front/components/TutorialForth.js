import React, { useState } from 'react';
import { Row, Col, Typography} from 'antd';
import {layoutCenter2} from '../css/tutorial';
import {backgroundWhite, backgroundLightBlue} from '../css/Common';
import logoImg from '../img/logo1.png';

const {Text} = Typography;

const TutorialForth = () => {
    
    return(
        <>
            <Row style={layoutCenter2}>
                <Col span={8}></Col>
                <Col span={8}>
                    <Col span={24} style={{textAlign:'center', marginBottom:5}}>
                        <img src={logoImg} width='50%'/>
                    </Col>
                </Col>
                <Col span={8}></Col>
            </Row>
            <Row style={backgroundLightBlue}>
                <Col span={24} style={{textAlign:'center', padding:20}}>
                    <Text style={{color:"#FFFFFF"}}><strong>나만의 조언자를 등록하여 <br/> 다양한 의견들을 공유해 보세요</strong></Text> 
                </Col>
            </Row>
        </>
    )
}

export default TutorialForth;