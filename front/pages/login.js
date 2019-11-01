import React from 'react';
import {Layout} from 'antd';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppLogin from '../container/login';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
const { Footer, Content, Header } = Layout;

const login = () => {
    return(
        <>
            <AppHeader/>
            <Layout style={layout}>
                <Content style={backgroundWhite}>
                    <AppLogin/>
                </Content>
            </Layout>
            <Footer style={backgroundLightBlue}>
                <AppFooter/> 
            </Footer>
        </>
    )
}

export default login;