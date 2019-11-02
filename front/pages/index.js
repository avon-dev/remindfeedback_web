import React from 'react';
import AppHeader from '../components/AppHeader';
import { layoutCenter, backgroundWhite } from '../css/Common';
import { shadowBorder } from '../css/Index';
import {Row,Col,Layout, Button , Progress} from 'antd';

const { Footer, Content } = Layout;

const Home = () => {
    return(
        <>
            <AppHeader/>
            <Layout style={backgroundWhite} >
                <Content >
                    <Row style={layoutCenter}>
                        <Col span={8}></Col>
                        <Col span={8} style={shadowBorder}>
                            <div style={{textAlign:'center'}}>
                                <Button>테스트</Button>
                            </div>
                            <div style={{marginTop:'5em'}}>
                                <Progress percent={50} size='small' status='active'/>
                            </div>
                        </Col>
                        <Col span={8}></Col> 
                    </Row>
                </Content>
            </Layout>
        </>
    );
};

export default Home;