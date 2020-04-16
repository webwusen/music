import React, { useState } from 'react';
import { Form, Icon, Input, Button, message, Spin } from 'antd';
import { login } from '@/api/layout';

interface ShowFunc {
  (show: boolean): void;
}

interface SetInfoFunc {
  (info: any): void;
}

interface Props {
  form: any;
  show: boolean;
  showFunc: ShowFunc;
  setInfoFunc: SetInfoFunc
}

interface value {
  username: string;
  password: string;
}

const Login: React.FC<Props> = (props: Props) => {

  const { getFieldDecorator } = props.form;
  const [loading, setLoad] = useState(false);

  return (
    <div className={`login ${props.show ? 'show' : ''}`}>
      <div className="login-close" onClick={() => handlerShow(props)}>
        <Icon type="close" />
      </div>
      <Form onSubmit={(event) => handleSubmit(props, event, setLoad)} className="login-form">
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
        <Spin spinning={loading}>
          <Button type="primary" htmlType="submit" className="login-form-button">
            登录
          </Button>
        </Spin>
      </Form>
    </div >
  );
};

function handleSubmit(prop: Props, e: any, cb: Function) {
  e.preventDefault();
  prop.form.validateFields((err: Boolean, values: value) => {
    if (!err) {
      cb(true);
      login({
        email: values.username += '@163.com',
        password: values.password
      }).then((res: any) => {
        cb(false);
        if (res.code === 200) {
          message.success('登录成功')
          localStorage.setItem('userInfo', JSON.stringify(res.account));
          handlerSetInfo(prop, res.account)
          handlerShow(prop);
        } else {
          message.success('登录失败')
        }
      });
    }
  });
}

function handlerShow(prop: Props) {
  prop.showFunc(!prop.show);
}
function handlerSetInfo(prop: Props, data: any) {
  prop.setInfoFunc(data);
}
const WrappedRegistrationForm = Form.create<Props>()(Login);
export default WrappedRegistrationForm;