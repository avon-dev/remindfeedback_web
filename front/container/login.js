import React, { useState , useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { layoutCenter } from '../css/Common';
import { loginBtn, loginApple, loginFacebook, loginGoogle, loginKakao, shadowBorder } from '../css/Login';
import Link from 'next/link';
import logoImg from '../img/logo1.png';
import {LOG_IN_REQUEST, MOVE_TO_SIGNUP} from '../reducers/user';
import { FEEDBACK_READ_REQUEST } from '../reducers/feedback';
import { FEEDBACK_SUB_READ_REQUEST } from '../reducers/feedbackSubject';
import Router from 'next/router';

const {Text} = Typography;

const login = () => {

    const dispatch = useDispatch();

    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    
    const { me,isLoggedIn,isLoggingIn,logInErrorReason,hasMessage } = useSelector(state=>state.user);
    const { isLoadedFeedback } = useSelector(state=>state.feedback);
    const {feedbackMode} = useSelector(state => state.feedbackMode);

    const _onsubmit = useCallback((e) => {
        e.preventDefault();
        dispatch({
            type:LOG_IN_REQUEST,
            data:{
                email,password
            }
        });
        dispatch({
            type:MOVE_TO_SIGNUP
        });
    },[email,password]);

    useEffect(()=>{
        const feedbackModes = feedbackMode;
        const lastId = 0;
        if(isLoggedIn){
            
            dispatch({
                type:FEEDBACK_READ_REQUEST,
                data:{
                    feedbackModes,lastId
                }
            });
            dispatch({
                type:FEEDBACK_SUB_READ_REQUEST
            });
            alert('메인페이지로 이동합니다.');
            Router.push('/main');  
        }
    },[isLoggedIn&&isLoggedIn]);

    useEffect(()=>{
        if(hasMessage){
            alert(me.msg);
            dispatch({
                type:MOVE_TO_SIGNUP
            });
        }
    },[hasMessage&&hasMessage]);

    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value);
    }

    const handleSignUp = async(e) => {
        e.preventDefault();
        await dispatch({
            type:MOVE_TO_SIGNUP
        });
        await Router.push('/signup');
    }

    return(
        <>
            <Row style={layoutCenter}>
                <Col span={9}></Col>
                <Col span={6} style={shadowBorder}>
                    <Col span={24} style={{textAlign:'center', marginBottom:5}}>
                                <img src={logoImg} width='25%'/>
                    </Col>
                    <Col span={24} style={{textAlign:'center', marginBottom:5}}>
                        <Text style={{fontSize:20, color:'#000000'}}><strong>RemindFeedback</strong></Text> 
                    </Col>
                    <Form onSubmit={_onsubmit} className='login-form'>
                        <label htmlFor="user-email"><strong>이메일</strong></label>
                       <Form.Item>
                            <Input
                                prefix={<Icon type="user" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                                value={me.email?me.email:email}
                                onChange={handleEmail}
                                required
                            />
                       </Form.Item>
                        <label htmlFor="user-password"><strong>비밀번호</strong></label>
                       <Form.Item>
                            <Input
                                prefix={<Icon type="lock" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={handlePassword}
                                required
                            />
                       </Form.Item>
                       {/* <Form.Item>
                            <Checkbox><strong>Remember me</strong></Checkbox>
                       </Form.Item> */}
                       <Form.Item style={{textAlign:'center'}}>
                           <Col span={24}>
                                <Button type="primary" htmlType="submit" size="large" className="login-form-button" style={loginBtn} loading={isLoggingIn}>
                                    <strong>로그인</strong>
                                </Button>
                           </Col>
                       </Form.Item>
                       <hr/>
                       {/* <Form.Item style={{textAlign:'center'}}>
                            <Col span={24}>
                                <Button type="danger" size="large" htmlType="submit" className="login-form-button" style={loginApple} icon="apple">
                                       <strong>Log in with Apple</strong> 
                                </Button>
                           </Col>
                           <Col span={24}>
                                <Button type="primary" size="large" htmlType="submit" className="login-form-button" style={loginGoogle} icon="google">
                                    <strong>Log in with Google</strong> 
                                </Button>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" size="large" htmlType="submit" className="login-form-button" style={loginKakao}>
                                    <strong>Log in with kakao</strong> 
                                </Button>
                            </Col>
                            <Col span={24}>
                                <Button type="primary" size="large" htmlType="submit" className="login-form-button" style={loginFacebook} icon="facebook">
                                    <strong>Log in with Facebook</strong> 
                                </Button>
                            </Col>
                       </Form.Item> */}
                    </Form>
                    <div style={{textAlign:'center'}}>
                        <span>계정이 없으신가요? </span><Button type="ghost" style={{border:"white"}} onClick={handleSignUp} ><strong>시작하기</strong></Button>
                    </div> 
                </Col>
                <Col span={9}></Col>
            </Row>
        </>
    )
}

export default login;