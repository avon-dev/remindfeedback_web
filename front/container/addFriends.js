import React from 'react';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row, Divider, Table, Pagination  } from 'antd';
import {formItemLayout} from '../css/Friends';

const {Text,Title} = Typography;
const {Content} = Layout;
const {Search} = Input;

const addFriends = ({addVisible,addHandleOk,addHandleCancel}) => {

    const columns = [
        {
            title: 'NO',
            dataIndex: 'number',
            key: 'number',
            align:'center',
        },
        {
            title: '이름',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: '이메일',
            key: 'email',
            dataIndex: 'email',
            render: email => <a>{email}</a>,
          },
          {
            title: '진행상황',
            dataIndex: 'ing',
            key: 'ing',
            align:'center',
            render: ing => (
                <Button type="danger">{ing}</Button>
            )
          },
        ]

        const data = [
            {
              key: '1',
              number: '1',
              name: 'AVON',
              email: 'test@naver.com',
              ing:'수락 안됨'
            },
            {
              key: '2',
              number: '2',
              name: '운동',
              email: 'test1@naver.com',
              ing:'수락 됨'
            },
            {
              key: '3',
              number: '3',
              name: "Test",
              email: 'test2@naver.com',
              ing:'수락 안됨'
            },
        ];

    const _onsubmit = () => {
        console.log('AddFriends onsubmit');
    }
    return(
        <>
            <Modal
                 key='addFriends'
                 title={
                    <div style={{textAlign:"center"}}><Title level={3}>친구 추가</Title></div>
                }
                visible={addVisible}
                onOk={addHandleOk}
                bodyStyle={{padding:0, borderTop:'#000000 solid 1px',borderBottom:'#000000 solid 1px',}}
                onCancel={addHandleCancel}
                centered={true}
                footer={[
                    <div style={{textAlign:'center'}}>
                        <Button key="back" onClick={addHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" onClick={addHandleOk} size='large' style={{width:'100%'}}>
                            <strong>친구 요청</strong>
                        </Button>
                    </div>
                ]}
            >
                <Content>
                    <Row>
                        <Form {...formItemLayout} onSubmit={_onsubmit} style={{marginTop:15}} >
                            <Form.Item label={<strong>이메일</strong>}>
                                <Col span={24} >
                                    <Search
                                        style={{width:'100%'}}
                                        placeholder="이메일을 검색하세요"
                                        enterButton="검색"
                                    />
                                </Col>
                            </Form.Item>
                        </Form>
                        <Divider style={{border:'#000000 solid 1px', marginBottom:10}} />
                        <Col span={24} style={{textAlign:'center'}}>
                           <Text><strong>내가 추가한 친구목록</strong></Text>
                           <Divider style={{border:'#000000 solid 1px',marginTop:10}} />     
                        </Col>
                        <Col span={24}>
                            <Table columns={columns} dataSource={data} pagination={<Pagination style={{textAlign:'center'}} />} />
                        </Col>
                    </Row>
                </Content>
            </Modal>
        </>
    );
};

export default addFriends;