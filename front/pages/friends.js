import React from 'react';
import AppSidebar from '../components/AppSidebar';
import AppTopbar from '../components/AppTopbar';
import AppFriends from '../container/friends';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
import { Layout } from 'antd';
const { Footer, Content, Sider } = Layout;

const friends = () => {
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
                        <AppFriends/>
                    </Content>
                </Layout>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>
            
        </>
    );
};

export default friends;