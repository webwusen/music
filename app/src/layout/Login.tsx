import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { login } from '@/api/layout';

interface Props {
  form: any;
}

interface value {
  username: string;
  password: string;
}

class Login extends React.Component<Props> {
  state = {
    show: false
  };
  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.form.validateFields((err: Boolean, values: value) => {
      if (!err) {
        console.log('Received values of form: ', values);
        login({
          email: values.username,
          password: values.password
        }).then((res: any) => {
          console.log(res);
        });
      }
    });
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={`login ${this.state.show ? 'show' : ''}`}>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Form.Item>
            {getFieldDecorator('username', {
              rules: [{ required: true, message: '请输入邮箱' }]
            })(
              <Input
                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder="Username"
                suffix="@163.com"
              />
            )}
          </Form.Item>
          <Form.Item>
            {getFieldDecorator('password', {
              rules: [{ required: true, message: '请输入密码!' }]
            })(
              <Input
                prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                type="password"
                placeholder="Password"
              />
            )}
          </Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Form>
      </div>
    );
  }
}
const WrappedRegistrationForm = Form.create()(Login);
export default WrappedRegistrationForm;