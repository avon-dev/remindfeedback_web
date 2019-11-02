import React from 'react';
import {Row, Col, Form, Icon, Input, Button, Checkbox, Typography } from 'antd';
import { layoutCenter } from '../css/Common';
import { signUpBtn, shadowBorder } from '../css/Signup';
import Link from 'next/link';


const {Title, Text} = Typography;

const signup = () => {

    const signUpFormName = [
            {
                name:'이메일 주소',
                iconType:'smile',
                placeholderName:'Email',
            },
            {
                name:'이름',
                iconType:'user',
                placeholderName:'Name',
            },
           {
                name:'비밀번호',
                iconType:'lock',
                placeholderName:'Password',
            },
            {
                name:'비밀번호 확인',
                iconType:'lock',
                placeholderName:'Repassword',
            },
    ]

    const signUpForm = signUpFormName.map((data,index)=><div style={{padding:5}}>  
                                                        <label htmlFor="user-email" style={{fontWeight:'bold'}}>{data.name}</label>
                                                        <div style={{marginTop:5}}>
                                                            <Input
                                                                prefix={<Icon type={data.iconType} style={{ color: 'rgba(0,0,0,.25)' }} />}
                                                                placeholder={data.placeholderName}
                                                            />
                                                        </div>
                                                    </div>)
    const _onsubmit = () => {

    }


    return(
        <>
            <Row style={layoutCenter}>
                <Col span={8}></Col>
                <Col span={8} style={shadowBorder}>
                    <div style={{textAlign:'center'}}>
                        <Title>회원가입</Title>
                    </div>
                    <div style={{textAlign:'center'}}>
                        <Text type="danger" style={{fontWeight:'bold'}}>Remind Feedback</Text><Text> 에 오신 것을 환영합니다. <br/> 회원가입을 통해 서비스를 이용하실 수 있습니다.</Text>
                    </div>
                    <Form onSubmit={_onsubmit} className='signUp-form'>
                        {signUpForm}
                        <Col span={24} style={{marginTop:15}}>
                            <Checkbox style={{fontWeight:'bold'}}>서비스 이용약관, 개인정보 수집 및 이용, 중요한 약관에 모두 동의합니다.</Checkbox>
                        </Col>
                        <Col span={24} style={{marginTop:15}}>
                            <Button size="large" htmlType="submit" className="signup-form-button" style={signUpBtn}>
                                회원가입
                            </Button>
                        </Col>
                    </Form>
                    <Col span={24} style={{marginTop:15, textAlign:'center'}}>
                        <span>계정을 이미 가지고 있으신가요? </span><Link href="/login" ><a><strong>로그인</strong></a></Link>
                    </Col>  
                </Col>
                <Col span={8}></Col>
            </Row>
        </>
    )
};

export default signup;
