import React, {useState} from 'react';
import { Row, Col, Form, Avatar, Empty, Typography, Icon, Button, Timeline, Input } from 'antd';

const {Text} = Typography;

const mypage = () => {

    const updateMypage = () => {
      console.log('updateMypage');
    }

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
                                    <Button style={{background:"#052749", color:"#FFFFFF"}}>프로필 사진 추가하기</Button>
                               </div>
                            </Empty>
                        </Col>
                      </Form.Item>
                      <Form.Item>
                        <Col span={24} style={{textAlign:'center'}}>
                            <Text style={{color:"#000000", fontSize:20}}><strong>test@naver.com</strong></Text>
                        </Col>
                      </Form.Item>
                      <Form.Item label={<strong>닉네임</strong>} colon={false}>
                        <Col span={24} style={{textAlign:'center', marginTop:5}}>
                           <Input
                              placeholder="닉네임을 입력해주세요"
                           />
                        </Col>
                      </Form.Item>
                      <Form.Item label={<strong>상태메세지</strong>} colon={false}>
                        <Col span={24} style={{textAlign:'center', marginTop:5}}>
                           <Input
                              placeholder="상태메시지를 입력해주세요"
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
        </>
    )
};

export default mypage;