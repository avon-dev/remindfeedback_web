import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { layoutCenter } from '../css/Common';
import { loginBtn, loginApple, loginFacebook, loginGoogle, loginKakao, shadowBorder } from '../css/login';
import Link from 'next/link';
import logoImg from '../img/logo1.png';

const {Text} = Typography;

const login = () => {

    const dispatch = useDispatch();
    
    const { me } = useSelector(state=>state.user);

    const _onsubmit = (e) => {
        e.preventDefault();
        
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
                                value={me.email}
                                prefix={<Icon type="user" 
                                style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="Email"
                            />
                       </Form.Item>
                        <label htmlFor="user-password"><strong>비밀번호</strong></label>
                       <Form.Item>
                            <Input
                                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                type="password"
                                placeholder="Password"
                            />
                       </Form.Item>
                       <Form.Item>
                            <Checkbox><strong>Remember me</strong></Checkbox>
                       </Form.Item>
                       <Form.Item style={{textAlign:'center'}}>
                           <Col span={24}>
                                <Button type="primary" size="large" className="login-form-button" style={loginBtn}>
                                    <Link href="/main" ><a><strong>로그인</strong></a></Link>
                                </Button>
                           </Col>
                       </Form.Item>
                       <hr/>
                       <Form.Item style={{textAlign:'center'}}>
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
                       </Form.Item>
                    </Form>
                    <div style={{textAlign:'center'}}>
                        <span>계정이 없으신가요? </span><Link href="/signup" ><a><strong>시작하기</strong></a></Link>
                    </div> 
                </Col>
                <Col span={9}></Col>
            </Row>
        </>
    )
}

export default login;