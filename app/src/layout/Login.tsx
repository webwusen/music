import React from 'react';
import { Form, Icon, Input, Button } from 'antd';
import { login } from '@/api/layout';

interface ShowFunc {
  (show: boolean): void;
}

interface Props {
  form: any;
  show: boolean;
  showFunc: ShowFunc;
}

interface value {
  username: string;
  password: string;
}

const Login: React.FC<Props> = (props: Props) => {

  const { getFieldDecorator } = props.form;

  return (
    <div className={`login ${props.show ? 'show' : ''}`}>
      <div className="login-close" onClick={() => handlerShow(props)}>
        <Icon type="close" />
      </div>
      <Form onSubmit={(event) => handleSubmit(props, event)} className="login-form">
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
    </div >
  );
};

function handleSubmit(prop: Props, e: any) {
  e.preventDefault();
  prop.form.validateFields((err: Boolean, values: value) => {
    if (!err) {
      login({
        email: values.username,
        password: values.password
      }).then((res: any) => {
        console.log(res);
      });
    }
  });
}

function handlerShow(prop: Props) {
  prop.showFunc(!prop.show);
}

const WrappedRegistrationForm = Form.create<Props>()(Login);
export default WrappedRegistrationForm;