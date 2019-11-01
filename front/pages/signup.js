import React from 'react';
import {Layout} from 'antd';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';
import AppSignUp from '../container/signup';
import { layout, backgroundWhite, backgroundLightBlue } from '../css/Common';
const { Footer, Content, Header } = Layout;

const signup = () => {

    

    return(
        <>
           <AppHeader/>
            <Layout style={layout}>
                <Content style={backgroundWhite}>
                    <AppSignUp/>
                </Content>
                <Footer style={backgroundLightBlue}>
                    <AppFooter/>
                </Footer>
            </Layout>  
        </>
    )
};

export default signup;
