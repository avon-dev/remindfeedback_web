import React from 'react';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row, Divider, Table, Pagination  } from 'antd';
import {formItemLayout} from '../css/Friends';

const {Group} = Button;
const {Text,Title} = Typography;
const {Content} = Layout;
const {Search} = Input;

const requestFriends = ({requestVisible,requestHandleOk,requestHandleCancel}) => {

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
            title: '친구요청',
            dataIndex: 'ing',
            key: 'ing',
            align:'center',
            render: ing => (
                <>
                    <Group>
                        <Button type="primary">수락</Button>
                        <Button type="danger">{ing}</Button>
                    </Group>
                </>
            )
          },
        ]

        const data = [
            {
              key: '1',
              number: '1',
              name: 'AVON',
              email: 'test@naver.com',
              ing:'거절'
            },
            {
              key: '2',
              number: '2',
              name: '운동',
              email: 'test1@naver.com',
              ing:'거절'
            },
            {
              key: '3',
              number: '3',
              name: "Test",
              email: 'test2@naver.com',
              ing:'거절'
            },
        ];

    const _onsubmit = () => {
        console.log('RequestFriends_onsubmit');
    }    

    return(
        <>
            <Modal
                 key='addFriends'
                 title={
                    <div style={{textAlign:"center"}}><Title level={3}>친구 요청</Title></div>
                }
                visible={requestVisible}
                onOk={requestHandleOk}
                onCancel={requestHandleCancel}
                bodyStyle={{padding:0, borderTop:'#000000 solid 1px',borderBottom:'#000000 solid 1px',}}
                centered={true}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={requestHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" onClick={requestHandleOk} size='large' style={{width:'100%'}}>
                            <strong>친구 추가</strong>
                        </Button>
                    </div>
                ]}
            >
                <Content>
                    <Row>
                        <Divider style={{border:'#000000 solid 1px', marginBottom:10}} />
                            <Col span={24} style={{textAlign:'center'}}>
                                <Text><strong>나에게 온 친구 요청 목록</strong></Text>
                                <Divider style={{border:'#000000 solid 1px',marginTop:10}} />     
                            </Col>
                        <Form {...formItemLayout} onSubmit={_onsubmit} style={{marginTop:15}} >
                            <Col span={24}>
                                <Table columns={columns} dataSource={data} pagination={<Pagination style={{textAlign:'center'}} />} />
                            </Col>
                        </Form>
                    </Row>
                </Content>
            </Modal>
        </>
    );
};

export default requestFriends;