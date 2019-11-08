import React from 'react';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppMain from '../container/main';
import AppFooter from '../components/AppFooter';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
const { Footer, Content, Sider } = Layout;

const Main = () => {
    return(
        <>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppSidebar/>
                    </Sider>
                    <Content>
                        <AppMain/>
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
            
        </>
    );
};

export default Main;