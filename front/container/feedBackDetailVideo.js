import React,{useState,useRef} from 'react';
import Link from 'next/link';
import ReactPlayer from 'react-player';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row, } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import {formItemLayout} from '../css/Subject';


const {Content} = Layout;
const {Title} = Typography;


const feedBackDetailVideo = ({videoVisible,videoHandleCancel,videoHandleOk}) => {

    const [videoFile, setVideoFile] = useState();
    const [isready, setIsReady] = useState(false);
    const [isplay, setIsPlay] = useState(false);

    const handlePreviewFile = async(e) => {
        const file = e.target.files[0];
        console.log(file);
        await setVideoFile(URL.createObjectURL(file));
        await setIsReady(true);
    };
    
    const videoPlay = () => {
        setIsPlay(!isplay);
    }

    const _onsubmit = () => {

    };
    
    return(
        <>
            <Modal
                key='feedBackDetailVideo'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>동영상</Title></div>
                }
                visible={videoVisible}
                onOk={videoHandleOk}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={videoHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' onClick={videoHandleOk} style={{width:'100%'}}>
                            <Link href='/updatepassword' key='2'><a><strong>확인</strong></a></Link>
                        </Button>
                    </div>
                ]}
                onCancel={videoHandleCancel}
                centered={true}
            >
                <Content style={backgroundWhite}>
                    <Form  onSubmit={_onsubmit}>
                       <Row>
                            <Col span={24} >
                                <Form.Item label={<strong>제목</strong>} colon={false}>
                                    <Input
                                        placeholder="제목을 입력해주세요"
                                        suffix={<Icon type="edit" />}
                                    />
                                </Form.Item>
                            </Col>
                            <Col span={24}>
                                <Form.Item label={<strong>동영상 업로드</strong>} colon={false}>
                                    <Input
                                        suffix={<Icon type="video-camera"/>}
                                        type="file"
                                        name="videoFile"
                                        onChange={handlePreviewFile}
                                        accept="video/mp4, video/x-m4v, video/*"
                                    />
                                </Form.Item>
                            </Col>
                            {isready&&
                            <Col span={24}>
                                <Form.Item >
                                    <Col span={24}>
                                        <ReactPlayer
                                            playing={isplay}
                                            url={videoFile}
                                            width="100%"
                                            style={{textAlign:'center'}}
                                            playsinline={true}
                                        />
                                    </Col>
                                    <Col span={24} style={{textAlign:'center'}}>
                                        <Button type="primary" onClick={videoPlay}>플레이</Button>
                                    </Col>    
                                </Form.Item>
                            </Col>
                            }
                       </Row> 
                    </Form>
                </Content>
            </Modal>
        </>
    )
};

export default feedBackDetailVideo;
