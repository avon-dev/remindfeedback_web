import React from 'react';
import { Menu, Icon, Input, Typography, Row, Col, Avatar } from 'antd';

const { Title, Paragraph, Text } = Typography;


const { Search } = Input;

const MenuItem = {
    textAlign:'center',
    top:0,
    left:0,
    right:0,
    bottom:0,
}

const commonStyle = {
    color: '#ffffff',
    fontSize:25,
    textAlign:'center',
}

const AppTopbar = () => {

    return(
        <div>
          <Menu mode="horizontal"  style={{backgroundColor:'#0B4E92'}} >
            <Row>
            <Col span={2}>
                <Menu.Item key="home" style={MenuItem}>
                    <Icon type="home" style={commonStyle}/>
                </Menu.Item>
            </Col>
            <Col span={4}>
                <Menu.Item key="search" style={MenuItem} >
                    <Search
                        placeholder="input search text"
                        style={{ width: 200 }}
                    /> 
                </Menu.Item>
            </Col>
            <Col span={12}>
                <Menu.Item key="subject" style={MenuItem}>
                    <Typography>
                        <Title style={commonStyle}>RemindFeedBack</Title>
                    </Typography>
                </Menu.Item>
            </Col>
            <Col span={3}></Col>
            <Col span={1}>
                <Menu.Item key="bell" style={MenuItem} >
                    <Icon type="bell" style={commonStyle}/>
                </Menu.Item>
            </Col>
            <Col span={1}>
                <Menu.Item key="user" style={MenuItem}>
                    <Avatar icon="user" style={commonStyle}/>
                </Menu.Item>
            </Col>
            <Col span={1}>
                <Menu.Item key="setting" style={MenuItem} >
                    <Icon type="setting" style={commonStyle}/>
                </Menu.Item>
            </Col>
            </Row>
          </Menu>  
        </div>
    );
};

export default AppTopbar;