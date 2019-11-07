import React from 'react';
import AppMypageSidebar from '../components/AppMypageSidebar';
import AppTopbar from '../components/AppTopbar';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppUpdatePassword from '../container/updatePassword';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
const { Footer, Content, Sider } = Layout;

const updatepassword = () => {
    return(
        <>
            <AppHeader/>
            <Layout style={layout} >
                <AppTopbar/>
                <Layout style={backgroundWhite}>
                    <Sider style={backgroundWhite}>
                        <AppMypageSidebar/>
                    </Sider>
                    <Content>
                        <AppUpdatePassword />
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
            
        </>
    );
};

export default updatepassword;