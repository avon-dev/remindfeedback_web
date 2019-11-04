import React from 'react';
import AppHeader from '../components/AppHeader';
import { layoutCenter, backgroundWhite } from '../css/Common';
import { shadowBorder } from '../css/Index';
import {Row,Col,Layout, Typography , Progress} from 'antd';
import logoImg from '../img/logo1.png';
const { Footer, Content } = Layout;
const {Text} = Typography;

const Home = () => {
    return(
        <>
            <AppHeader/>
            <Layout style={backgroundWhite} >
                <Content >
                    <Row style={layoutCenter}>
                        <Col span={8}></Col>
                        <Col span={8} style={shadowBorder}>
                            <Col span={24} style={{textAlign:'center', marginBottom:5, padding:15}}>
                                <img src={logoImg} width='50%'/>
                            </Col>
                            <Col span={24} style={{textAlign:'center'}}>
                                <Text style={{fontSize:30, color:'#000000'}}><strong>RemindFeedback</strong></Text> 
                            </Col>
                            <Col span={24} style={{marginTop:'2em'}}>
                                <Progress percent={50} size='default' status='active'/>
                            </Col>
                        </Col>
                        <Col span={8}></Col> 
                    </Row>
                </Content>
            </Layout>
        </>
    );
};

export default Home;