import React from 'react';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout, Row, Col, Card, Avatar, Icon} from 'antd';
const { Footer, Content, Header, Sider } = Layout;

const {Meta} = Card;

const Home = () => {
    return(
        <>
            <AppHeader/>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppSidebar/>
                    </Sider>
                    <Content>
                        <Row>
                            <Col span={6}>
                            </Col>
                            <Col span={12} style={{textAlign:"center"}}>
                                <Card
                                    style={{ marginTop: 15 }}
                                    actions={[
                                    <Icon type="setting" key="setting" />,
                                    <Icon type="edit" key="edit" />,
                                    <Icon type="ellipsis" key="ellipsis" />,
                                    ]}
                                >
                                    <Meta
                                         avatar={
                                            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                                          }
                                          title="Card title"
                                          description="This is the description"
                                    />
                                </Card>
                            </Col>
                            <Col span={6}>
                            </Col>
                        </Row>
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
        </>
    );
};

export default Home;