import React from 'react';
import AppHeader from '../components/AppHeader';
import {Row,Col,Layout, Button , Progress} from 'antd';

const { Footer, Content } = Layout;

const Logo = {
    height:'100vh', 
    width:'auto',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',

}
const Home = () => {
    return(
        <>
            <AppHeader/>
            <Layout style={{background:'white'}} >
                <Content >
                    <Row style={Logo}>
                        <Col span={8}></Col>
                        <Col span={8}>
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