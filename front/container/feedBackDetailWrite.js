import React,{useState} from 'react';
import { Modal, Layout, Form, Input, Icon, Button, Col, Typography, Row } from 'antd';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';


const {Content} = Layout;
const {Title} = Typography;

const feedBackDetailWrite = ({writeVisible,writeHandleCancel,writeHandleOk}) => {

    const [contents, setContents] = useState();

    const _onsubmit = () => {
        console.log(contents);
    };

    const handleChange = (event ,editor) => {
        setContents(editor.data);
    }

    return(
        <>
            <Modal
                key='feedBackDetailWrite'
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>글쓰기</Title></div>
                }
                visible={writeVisible}
                onOk={writeHandleOk}
                footer={[
                    <div key="add" style={{textAlign:'center'}}>
                        <Button key="back" onClick={writeHandleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" size='large' style={{width:'100%'}}>
                            <strong>추가</strong>
                        </Button>
                    </div>
                ]}
                onCancel={writeHandleCancel}
                centered={true}
            >
                <Content style={backgroundWhite}>
                    <Form onSubmit={_onsubmit}>
                       <Row>
                            <Col span={24}>
                                <Form.Item >
                                    <CKEditor
                                        editor={ClassicEditor}
                                        onChange={handleChange}
                                    />
                                </Form.Item>
                            </Col>
                       </Row> 
                    </Form>
                </Content>
            </Modal>
        </>
    )
};

export default feedBackDetailWrite;
