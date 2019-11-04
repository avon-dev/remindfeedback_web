import React from 'react';
import { Row, Col, Card, Avatar, Icon, message, Menu, Dropdown, Button, Breadcrumb} from 'antd';
import { contentsBoder, subjectBtn } from '../css/Main';
const {Meta} = Card;

const main = () => {

    const text = ['하하하','호호호','후후후','키키키'];

    const mainItem = text.map((data)=> <Card
                        style={{ marginTop: 15, background:'#FFFF00' }}
                        actions={[
                        <Icon type="setting" key="setting" />,
                        <Icon type="edit" key="edit" />,
                        <Icon type="ellipsis" key="ellipsis" />,
                        ]}
                    >
                        <Meta
                            avatar={
                            <Avatar icon="user" />
                            }
                            title="제목"
                            description={data}
                        />
                    </Card>)

    const handleMenuClick = (e) => {
        message.info(e.target.name);
    }       

    const menu = (
        <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
            <Icon type="user" />
            <strong>AVON</strong>
        </Menu.Item>
        <Menu.Item key="2">
            <Icon type="user" />
            <strong>운동</strong>
        </Menu.Item>
        </Menu>
    );   

    return(
        <>
            <Row>
                <Col span={6}>
                </Col>
                <Col span={12} style={contentsBoder}>
                    <Col span={24} style={{marginTop:15, textAlign:'center'}}>
                        <Dropdown overlay={menu}>
                            <Button 
                                style={subjectBtn}
                                size='large'
                            > <strong>주제선택</strong> <Icon type="down" />
                            </Button>
                        </Dropdown>
                    </Col>
                    <Col span={24} style={{marginTop:20, textAlign:'right'}}> 
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">
                                <Icon type="home" /><span>분류1</span>
                            </Breadcrumb.Item >
                            <Breadcrumb.Item href="#">
                                <Icon type="home" /><span>분류2</span>
                            </Breadcrumb.Item>
                            <Breadcrumb.Item href="#">
                                <Icon type="home" /><span>분류3</span>
                            </Breadcrumb.Item>
                        </Breadcrumb>
                    </Col> 
                    <div>
                        <Button
                            type="primary"
                            icon="loading"
                            shape="round"
                        ><strong> 진행중</strong></Button>
                    </div>
                    <div>
                        {mainItem}  
                    </div>
                    
                </Col>
                <Col span={6}>
                </Col>
            </Row>
        </>
    )
}

export default main;