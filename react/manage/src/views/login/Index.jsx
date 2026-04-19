import { Card } from "antd"
import logo from '../../assets/logo.png'
import './index.css'
import { useNavigate } from 'react-router-dom';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input, Flex } from 'antd';

function Login() {

    const navigate = useNavigate()

    const onFinish = values => {
        console.log('Received values of form: ', values);
        navigate('/layout')
    };

    return (
        <div className='login'>
            <Card className='logn_container'>
                <div className='logn_content'>
                    <div className='logn_left'>
                        <img className='logn_logo' src={logo} alt="" />
                    </div>
                    <div className='logn_right'>
                        <Form
                            name="login"
                            initialValues={{ remember: true }}
                            style={{ maxWidth: 360 }}
                            onFinish={onFinish}
                        >
                            <Form.Item
                                name="username"
                                rules={[{ required: true, message: '请输入用户名!' }]}
                            >
                                <Input prefix={<UserOutlined />} placeholder="用户名:" />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                rules={[{ required: true, message: '请输入密码!' }]}
                            >
                                <Input prefix={<LockOutlined />} type="password" placeholder="密码:" />
                            </Form.Item>
                            <Form.Item>
                                <Flex justify="space-between" align="center">
                                    <Form.Item name="remember" valuePropName="checked" noStyle>
                                        <Checkbox>记住我</Checkbox>
                                    </Form.Item>
                                    <a href="#">忘记密码</a>
                                </Flex>
                            </Form.Item>
                            <Form.Item>
                                <Button block type="primary" htmlType="submit" >
                                    登录
                                </Button>
                                <a href="">注册账号</a>
                            </Form.Item>
                        </Form>
                    </div>
                </div>
            </Card>
        </div>
    )
}

export default Login