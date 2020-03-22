import React from "react";
import {
  Row,
  Col,
  Breadcrumb,
  Drawer,
  Button,
  Typography,
  Avatar,
  Popover,
  Popconfirm
} from "antd";

const { Title, Text } = Typography;

const font = {
  color: "#FFFFFF",
  fontSize: 10
};

const Term = ({ onClose, drawer, description, title }) => {
  return (
    <>
      <Drawer
        title={<Title level={4}>{title}</Title>}
        placement="right"
        closable={true}
        onClose={onClose}
        visible={drawer}
        mask={true}
        width={"50%"}
      >
        {description}
      </Drawer>
    </>
  );
};

export default Term;
