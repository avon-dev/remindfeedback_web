import React from 'react';
import { Modal, Layout, Form, Input, Dropdown, Menu, Icon, Button, Col, Typography, DatePicker  } from 'antd';
import { backgroundWhite, backgroundLightBlue} from '../css/Common';
import { subjectBtn, formBoder, formItemLayout } from '../css/Main';
const { Search } = Input;
const {Content} = Layout;
const {Title} = Typography;

const addFeedback = ({visible,handleCancel,handleOk}) => {
        
    

    const menuClick = (e) => {
        message.info(e.target.name);
    }  

    const item = (
        <div>
            <Menu onClick={menuClick}>
                <Menu.Item key="1">
                    <Icon type="user" />
                    <strong>AVON</strong>
                </Menu.Item>
                <Menu.Item key="2">
                    <Icon type="user" />
                    <strong>운동</strong>
                </Menu.Item>
            </Menu>
        </div>
    );
    
    const _onSubmit = (e) => {

    }

    const _dateOnChange = () =>  {

    }
    
    return(
        <>  
           <Modal
                title={
                    <div style={{textAlign:"center"}}><Title level={3}>새로운 피드백</Title></div>
                }
                visible={visible}
                onOk={handleOk}
                footer={[
                    <div style={{textAlign:'center'}}>
                        <Button key="back" onClick={handleCancel} style={{display:'none'}}>
                            <strong>취소</strong>
                        </Button>,
                        <Button key="submit" type="primary" onClick={handleOk} size='large' style={{width:'100%'}}>
                            <strong>피드백 생성</strong>
                        </Button>
                    </div>
                ]}
                onCancel={handleCancel}
                centered={true}
                >
                <Content style={backgroundWhite}>
                    <Form  {...formItemLayout} onSubmit={_onSubmit}>
                        <Form.Item label={<strong>피드백 주제선택</strong>} style={formBoder}>
                            <Dropdown overlay={item} trigger={['click']}>
                                <Col span={24}>
                                    <Button 
                                        style={{width:'100%'}}
                                    > <strong>피드백 주제선택</strong> 
                                    <Icon type="down" />
                                    </Button>
                                </Col>
                            </Dropdown>
                        </Form.Item>
                        <Form.Item label={<strong>피드백 제목</strong>} style={formBoder}>
                            <Input
                                prefix={<Icon type='home' style={{ color: 'rgba(0,0,0,.25)' }} />}
                                placeholder="피드백 제목"
                            />
                        </Form.Item>
                        <Form.Item label={<strong>피드백 날짜</strong>} style={formBoder}>
                            <Col span={24}>
                                <DatePicker
                                    style={{width:'100%'}}
                                    onChange={_dateOnChange}
                                    placeholder="날짜 선택" 
                                />
                            </Col>   
                        </Form.Item>
                        <Form.Item label={<strong>피드백 조언자</strong>} style={formBoder}>
                            <Col span={24}>
                                <Search
                                    style={{width:'100%'}}
                                    placeholder="조언자 이름을 입력하세요"
                                    enterButton="검색"
                                />
                            </Col>   
                        </Form.Item>
                    </Form>
                </Content>
            </Modal>  
        </>
    )
};

export default addFeedback;