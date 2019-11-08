import React,{useState, useEffect} from 'react';
import Link from 'next/link';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row, Upload } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import {formItemLayout} from '../css/FeedbackDetail';

import logo1 from '../img/logo1.png';
import logo2 from '../img/logo2.png';
import logo5 from '../img/logo5.png';
import logo4 from '../img/logo4.png';
import logo6 from '../img/logo6.png';

const {Content} = Layout;
const {Title} = Typography;

const getBase64 = (file) => {
    console.log('getBase64');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

const feedBackDetailPhoto = ({photoVisible,photoHandleCancel,photoHandleOk}) => {

    const [previewVisible, setpreviewVisible] = useState(false);
    const [previewImage, setpreviewImage] = useState('');

    const handlePreview = async(file) => {
        console.log('handlePreview', file);
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
          }
          await setpreviewImage(file.url || file.preview); 
          await setpreviewVisible(true);
          
    };

    const uploadButton = (
        <Button >
            <Icon type="upload" /> Upload
        </Button>
    );

    const handleCancel = () => {
        setpreviewVisible(false);
    }

    const handlePreviewFile = file => getBase64(file);

    const up = <Upload
                    action='//jsonplaceholder.typicode.com/posts/'           
                    listType="picture" 
                    onPreview={handlePreview}
                    previewFile={handlePreviewFile}
                    
                >
                {uploadButton}   
                </Upload>

    const _onsubmit = () => {
        console.log('feedBackDetailPhoto_onsubmit');
    };
       
    return(
        <>
            <Modal
                key='feedBackDetailPhoto'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>사진</Title></div>
                }
                visible={photoVisible}
                onOk={photoHandleOk}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={photoHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large'  style={{width:'100%'}}>
                            <strong>확인</strong>
                        </Button>
                    </div>
                ]}
                onCancel={photoHandleCancel}
                centered={true}
            >
                <Content style={backgroundWhite}>
                    <Form {...formItemLayout} onSubmit={_onsubmit}>
                       <Row>
                            <Col span={24}>
                                <Form.Item label={<strong>제목</strong>} >
                                    <Input
                                        placeholder="제목을 입력해주세요"
                                        prefix={<Icon type="edit" />}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label={<strong>사진 업로드</strong>} >
                                    {up}
                                </Form.Item>
                            </Col>
                       </Row> 
                    </Form>
                </Content>
            </Modal>
            <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                <img alt="test" style={{ width: '100%' }} src={previewImage} />
            </Modal>
        </>
    )
};

export default feedBackDetailPhoto;
