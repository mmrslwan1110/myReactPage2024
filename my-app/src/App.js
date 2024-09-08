import logo from './logo.svg';
import './App.css';
import { UserOutlined } from '@ant-design/icons';
import { Card, Form, Input, Button } from 'antd'
function App() {
  return (
    <div className="login">
    <Card className="login-container">
      <img className="login-logo" src={logo} alt="" />
      {/* 登录表单 */}
      <Form>
        <Form.Item>
          <Input size="large" placeholder="请输入手机号" />
        </Form.Item>
        <Form.Item>
          <Input size="large" placeholder="请输入验证码" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" size="large" block>
            登录
          </Button>
        </Form.Item>
      </Form>
    </Card>
  </div>
  )
}





export default App;
