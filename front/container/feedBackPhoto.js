import React,{useState, useCallback, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row, Upload } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import {formItemLayout} from '../css/FeedbackDetail';
import {FRIENDS_PROFILE_ADD_REQUEST} from '../reducers/friends';
import {FEEDBACK_ITEM_ADD_REQUEST} from '../reducers/feedback';
import {UPDATE_USER_REQUEST} from '../reducers/user';

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

const feedBackPhoto = ({photoVisible,photoHandleCancel,mode, name}) => {

    const dispatch = useDispatch();

    const [previewVisible, setpreviewVisible] = useState(false);
    const [previewImage, setpreviewImage] = useState('');
    const [title, setTitle] = useState('');
    const [number, setNumber] = useState([]);
    const [portrait, setPortrait] = useState();

    const handlePreview = async(file) => {
        console.log('handlePreview', file);
        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
          }
          await setpreviewImage(file.url || file.preview); 
          await setpreviewVisible(true);
          
    };

    const uploadButton = (
        <Button disabled={number.length==1?true:false}>
            <Icon type="upload" /> Upload
        </Button>
    );

    const handleCancel = () => {
        setpreviewVisible(false);
    }

    const handlePreviewFile = (file) => getBase64(file);
    
    const handleCheck = (e) => {
        setNumber('1');
        console.log(e);
        setPortrait(e);
    }

    const handleRemove = () => {
        setNumber([]);
    }

    const up = <Upload
                    action="https://www.mocky.io/v2/5cc8019d300000980a055e76"         
                    listType="picture" 
                    onPreview={handlePreview}
                    previewFile={handlePreviewFile}
                    onRemove={handleRemove}
                    beforeUpload={handleCheck}   
                >
                {uploadButton}   
                </Upload>

    const handleTitle = (e) => {
        setTitle(e.target.value);
    }

    const _onsubmit = async() => {
        if(mode===FRIENDS_PROFILE_ADD_REQUEST){
            dispatch({
                type: FRIENDS_PROFILE_ADD_REQUEST,
                data:{
                    title,
                }
            });
        }else if(mode===UPDATE_USER_REQUEST){
            if(!title){
                return alert('제목을 입력해 주세요');
            }
            if(!portrait){
                return alert('사진을 선택해 주세요');
            }
            const formData = new FormData();
            console.log(portrait);
            formData.append('portrait',portrait, title);
            dispatch({
                type: UPDATE_USER_REQUEST,
                data:formData,
            });
        }else{
            dispatch({
                type: FEEDBACK_ITEM_ADD_REQUEST,
                data:{
                    title,name
                }
            });
        };
    };
       
    return(
        <>
            <Modal
                key='feedBackPhoto'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>사진</Title></div>
                }
                visible={photoVisible}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={photoHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' onClick={_onsubmit} style={{width:'100%'}}>
                            <strong>추가</strong>
                        </Button>
                    </div>
                ]}
                onCancel={photoHandleCancel}
                centered={true}
            >
                <Content style={backgroundWhite}>
                    <Form {...formItemLayout} >
                       <Row>
                            <Col span={24}>
                                <Form.Item label={<strong>제목</strong>} >
                                    <Input
                                        placeholder="제목을 입력해주세요"
                                        prefix={<Icon type="edit" />}
                                        value={title}
                                        onChange={handleTitle}
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

export default feedBackPhoto;
