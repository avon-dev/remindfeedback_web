import React from 'react';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row } from 'antd';

const {Text,Title} = Typography;
const {Content} = Layout;

const requestFriends = ({requestVisible,requestHandleOk,requestHandleCancel}) => {
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
                centered={true}
                footer={[
                    <div style={{textAlign:'center'}}>
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
                    
                </Content>
            </Modal>
        </>
    );
};

export default requestFriends;