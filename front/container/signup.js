import React,{useCallback, useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Row, Col, Form, Icon, Input, Button, Checkbox, Typography, Alert  } from 'antd';
import { layoutCenter } from '../css/Common';
import { signUpBtn, shadowBorder } from '../css/Signup';
import Router from 'next/router';
import Link from 'next/link';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { MOVE_TO_SIGNUP } from '../reducers/user';

const {Title, Text} = Typography;

const signup = () => {

    const dispatch = useDispatch();
    const {isSigningUp,me,isSignedUp,hasMessage} = useSelector(state => state.user);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [re_password, setRe_password] = useState('');
    const [nickname, setNickname] = useState('');
    const [term, setTerm] = useState(false);
    const [termError, setTermError] = useState(false);

    const emailForm = <div style={{padding:5}}>  
                            <label htmlFor="user-email" style={{fontWeight:'bold'}}>이메일</label>
                            <div style={{marginTop:5}}>
                                <Input
                                    type='text'
                                    name='email'
                                    value={email}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    suffix={<Icon type='smile'
                                    style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Email을 기입해주세요'
                                    required
                                />
                            </div>
                        </div>
    const nicknameForm = <div style={{padding:5}}>  
                            <label htmlFor="user-nickname" style={{fontWeight:'bold'}}>닉네임</label>
                            <div style={{marginTop:5}}>
                                <Input
                                    type='text'
                                    name='nickname'
                                    value={nickname}
                                    onChange={(e)=>setNickname(e.target.value)}
                                    suffix={<Icon type='user'
                                    style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Nickname을 기입해주세요'
                                    required
                                />
                            </div>
                        </div>      
     const passwordForm = <div style={{padding:5}}>  
                            <label htmlFor="user-password" style={{fontWeight:'bold'}}>비밀번호</label>
                            <div style={{marginTop:5}}>
                                <Input
                                    type='password'
                                    name='password'
                                    value={password}
                                    onChange={(e)=>setPassword(e.target.value)}
                                    suffix={<Icon type='lock'
                                    style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Password를 기입해주세요'
                                    required
                                />
                            </div>
                        </div>
    const re_passwordForm = <div style={{padding:5}}>  
                            <label htmlFor="user-re_password" style={{fontWeight:'bold'}}>비밀번호 재입력</label>
                            <div style={{marginTop:5}}>
                                <Input
                                    type='password'
                                    name='re_password'
                                    value={re_password}
                                    onChange={(e)=>setRe_password(e.target.value)}
                                    suffix={<Icon type='lock'
                                    style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder='Password를 한번 더 기입해주세요'
                                    required
                                />
                            </div>
                        </div>

      const onChangeTerm = useCallback((e) => {
        setTermError(false);
        setTerm(e.target.checked);
      }, []);

     useEffect(() => {
        if (!hasMessage&&isSignedUp) {
          alert(me.msg);
          Router.push('/login');
        }
      }, [isSignedUp&&isSignedUp]);
      
      useEffect(() => {
        if (hasMessage) {
          alert(me.msg);
          setEmail('');
          setNickname('');
          setPassword('');
          setRe_password('');
          setTerm(false);
          dispatch({
              type:MOVE_TO_SIGNUP
          });
        }
      }, [hasMessage&&hasMessage])
         
    const _onSubmit = useCallback((e) => {
        e.preventDefault();
        
        if(password!==re_password){
            alert('비밀번호가 다릅니다.');
            setPassword('');
            setRe_password('');
            return;
        }
        if(!term){
            alert('약관동의를 클릭해주세요');
            return setTermError(true);
        }
        dispatch({
            type:SIGN_UP_REQUEST,
            data:{
                email,password,nickname,
            },
        });
    },[email,password,nickname,term,re_password]);


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
                    <Form onSubmit={_onSubmit} className='signUp-form'>
                            {emailForm}
                            {nicknameForm}
                            {passwordForm}
                            {re_passwordForm}
                        <Col span={24} style={{marginTop:15}}>
                            <Checkbox style={{fontWeight:'bold'}} onChange={onChangeTerm}>서비스 이용약관, 개인정보 수집 및 이용, 중요한 약관에 모두 동의합니다.</Checkbox>
                        </Col>
                        <Col span={24} style={{marginTop:15}}>
                            <Button size="large" htmlType="submit" className="signup-form-button" style={signUpBtn} loading={isSigningUp}>
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
