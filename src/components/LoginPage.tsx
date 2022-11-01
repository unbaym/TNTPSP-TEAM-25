import React, { useRef, useState } from "react";
import { Button, Card, Col, Row, Image, Checkbox, Form, Input } from "antd";
import { Layout } from "antd";
import { DownloadOutlined } from '@ant-design/icons';
import type { SizeType } from 'antd/es/config-provider/SizeContext';
import { Link } from "react-router-dom";



const { Content } = Layout;

interface activePage {
    page: string;
  }

function LoginPage() {

    const onFinish = (values: any) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
      };

      const [size, setSize] = useState<SizeType>('large');

return (
    <div style={{ padding: "15px 15px 0px 15px", background: "#F6F6F6" }}>
    <Row>
      <Col span={2} />
      <Col span={10}>
        <Card
          bordered={false} style={{ backgroundColor: "#F6F6F6", height: 200, width: 700, borderWidth: "32px", marginRight: "10000px", }}>
          <Row>
          <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
          </Row>
          
          <br />
        </Card>
      </Col>

      <Col span={6}>
      <text style={{ fontSize: "50px", fontFamily: "serif", backgroundColor: "#F6F6F6", }}>
                  Welcome to Login Page
                </text>
      </Col>
      <Col span={6} >
      <Link to={"./Signup"}>
                    <li>Go to signup </li>
                </Link>
      </Col>
      
    </Row>
    <br />
  </div>
   
    
   
    );
}
export default LoginPage;