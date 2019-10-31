import React from 'react';
import { Menu, Icon, Input, Typography, Row, Col } from 'antd';

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;


const AppTopbar = () => {
    return(
        <div>
          <Menu mode="horizontal">
            <Row>
            <Col span={3}>
                <Menu.Item key="mail" style={{textAlign:'center'}}>
                    <Icon type="home" style={{ fontSize: '30px'}} />
                </Menu.Item>
            </Col>
            <Col span={4}>
                <Menu.Item key="search" style={{textAlign:'center'}}>
                    <Search
                        placeholder="input search text"
                        enterButton="Search"
                        size=""
                    /> 
                </Menu.Item>
            </Col>
            <Col span={12}>
                <Menu.Item key="subject" style={{textAlign:'center'}}>
                    <Typography>
                        <Title type="secondary" level={2} style={{color:'blue'}}>RemindFeedBack</Title>
                    </Typography>
                </Menu.Item>
            </Col>
            <Col span={3}>
                <Menu.Item key="bell" style={{textAlign:'center'}}>
                    <Icon type="bell" style={{ fontSize: '30px'}} />
                </Menu.Item>
            </Col>
            </Row>
          </Menu>   
        </div>
    );
};

export default AppTopbar;