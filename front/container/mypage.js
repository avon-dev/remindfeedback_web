import React, {useState,useEffect,useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Form, Avatar, Empty, Typography, Icon, Button, Timeline, Input } from 'antd';
import AppPhoto from '../container/feedBackPhoto';
import {UPDATE_USER_REQUEST} from '../reducers/user';


const {Text} = Typography;

const mypage = () => {

    const dispatch = useDispatch();
    const {me,message} = useSelector(state=>state.user);

    const [nickname, setNickname] = useState('');
    const [introduction, setIntro] = useState('');
    const [photoVisible, setPhotoVisible] = useState(false);
    
     // 사진
    const popUpPhoto = () => {
        setPhotoVisible(true);
    }

    const photoHandleCancel = () => {
        setPhotoVisible(false);
    }

    const handleData = (e) => {
      if(e.target.name==="NICKNAME"){
        setNickname(e.target.value);
      }else if(e.target.name==="INTRO"){
        setIntro(e.target.value);
      }else{
        console.log('Default');
      }
    }

    const updateMypage = useCallback((e) => {
      // 서버 단에서 수정 필요 
      e.preventDefault();
      const formData = new FormData();
      formData.append('nickname',nickname);
      formData.append('introduction',introduction);
      dispatch({
          type:UPDATE_USER_REQUEST,
          data:formData,
      });
    },[nickname,introduction]);

    useEffect(()=>{
      if(me.nickname){
        setNickname(me.nickname);
      }
      if(me.introduction){
        setIntro(me.introduction);
      }
    },[me&&me]);

    useEffect(()=>{
      if(message){
        alert(message);
      }
    },[message&&message]);

    return(
        <>
            <Row>
                <Col span={3}/>
                <Col span={12} style={{marginTop:20}}>
                    <Form onSubmit={updateMypage}>
                      <Form.Item>
                        <Col span={24} style={{textAlign:'center'}}>
                            <Empty
                                image={<Avatar style={{width: "20vh", height:'20vh', marginTop:15}}>
                                          <Icon type="user" style={{fontSize: "20vh"}} />
                                       </Avatar>
                                        }   
                            >
                               <div>
                                    <Button style={{background:"#052749", color:"#FFFFFF"}} onClick={popUpPhoto}>프로필 사진 추가하기</Button>
                               </div>
                            </Empty>
                        </Col>
                      </Form.Item>
                      <Form.Item>
                        <Col span={24} style={{textAlign:'center'}}>
                                      <Text style={{color:"#000000", fontSize:20}}><strong>{me.email}</strong></Text>
                        </Col>
                      </Form.Item>
                      <Form.Item label={<strong>닉네임</strong>} colon={false}>
                        <Col span={24} style={{textAlign:'center', marginTop:5}}>
                           <Input
                              name="NICKNAME"
                              placeholder="닉네임을 입력해주세요"
                              value={nickname}
                              onChange={handleData}
                              key="mypage-nickname"
                           />
                        </Col>
                      </Form.Item>
                      <Form.Item label={<strong>상태메세지</strong>} colon={false}>
                        <Col span={24} style={{textAlign:'center', marginTop:5}}>
                           <Input
                              name="INTRO"
                              placeholder="상태메시지를 입력해주세요"
                              value={introduction}
                              onChange={handleData}
                              key="mypage-intro"
                           />
                        </Col>
                      </Form.Item>  
                      <Col span={24} style={{textAlign:'right', marginBottom:15}}>
                          <Button htmlType="submit" type="primary" style={{width:"100%"}} size="large" ><strong>SAVE</strong></Button>
                      </Col>
                    </Form> 
                </Col>
                <Col span={9} style={{marginTop:20}}>
                  <Col span={24} style={{textAlign:'center', marginBottom:20, fontSize:25}}>
                    <Text code ><strong>Timeline</strong></Text>
                  </Col>
                  <Col span={24}>
                    <Timeline mode="alternate">
                        <Timeline.Item color="blue"><strong>회원가입</strong> 2019-09-01</Timeline.Item>
                        <Timeline.Item color="blue"><strong>게시물 생성</strong> 2019-10-01</Timeline.Item>
                        <Timeline.Item color="green"><strong>게시물 수정</strong> 2019-11-01</Timeline.Item>
                        <Timeline.Item color="red"><strong>게시물 삭제</strong> 2019-12-01</Timeline.Item>
                    </Timeline> 
                   </Col>                      
                </Col>
            </Row>
            <div>
              <AppPhoto
                 photoVisible={photoVisible}   
                 photoHandleCancel={photoHandleCancel}
                 mode={UPDATE_USER_REQUEST}           
              />                  
            </div>
        </>
    )
};



export default mypage;