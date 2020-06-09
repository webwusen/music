import React, { useState } from 'react';
import { Icon, Button, message, Checkbox } from 'antd';
import { MailOutlined, LockOutlined, InfoCircleOutlined } from '@ant-design/icons';
import { login, getUserSubcount } from '@/api/layout';
import styles from '@/layout/index.module.less';
import loginBg from '@/assets/images/bg_login.png';
import { localStorageSet } from '@/utils/localStorage';

interface ShowFunc {
  (show: boolean): void;
}

interface SetInfoFunc {
  (info: any): void;
}

interface Props {
  show: boolean;
  showFunc: ShowFunc;
  setInfoFunc: SetInfoFunc
}

interface value {
  username: string;
  password: string;
}

const Login: React.FC<Props> = (props: Props) => {
  const [loading, setLoad] = useState(false);
  const [username, setUname] = useState('');
  const [password, setPass] = useState('');
  const [remember, setRem] = useState(false);
  const [tipsMsg, setTip] = useState('');

  // 登录页面显示隐藏
  const handlerShow = () => {
    props.showFunc(!props.show);
  }

  // 用户名数据双向绑定
  const usernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUname(e.target.value)
  }

  // 密码数据双向绑定
  const passwordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value)
  }

  // 记住密码
  const onRememberChange = (e: any) => {
    setRem(e.target.value)
  }

  // 登录
  const handleSubmit = async () => {
    if (username === '') {
      setTip('请输入用户名')
      return
    }
    if (password === '') {
      setTip('请输入密码')
      return
    }
    setLoad(true);
    try {
      const loginInfo = await login({
        email: username + '@163.com',
        password: password
      });
      setLoad(false);
      message.success('登录成功')
      localStorageSet('userInfo', loginInfo.account)
      localStorageSet('token', loginInfo.token)
      localStorageSet('cookie', loginInfo.cookie)
      props.setInfoFunc(loginInfo.account)
      // const userDetail = await getUerDetail(loginInfo.account.id);
      const userSubcount = await getUserSubcount();
      localStorageSet('userSubcount', userSubcount)
      console.log(userSubcount)
      handlerShow()
    } catch (e) {
      setLoad(false);
    }
  }

  return (
    <div className={`${styles['login']} ${props.show ? styles['show'] : ''}`}>
      <div className={`${styles['login-title']}`}>Login</div>
      <div className={`${styles['login-close']} noselect`} onClick={handlerShow}>
        <Icon type="close" />
      </div>
      <div className={`${styles['login-bg']} noselect`}>
        <img src={loginBg} alt="" />
      </div>
      <div className={`${styles['login-form']}`}>
        <div className={`${styles['login-form-box']}`}>
          <div className={`${styles['login-form-item']} ${styles['form-item-bdr']}`}>
            <MailOutlined />
            <input className={`${styles['username']}`} onChange={usernameChange} placeholder="邮箱账号" />
            <div className={`${styles['form-item-tip']}`}>@163.com</div>
          </div>
          <div className={`${styles['login-form-item']}`}>
            <LockOutlined />
            <input className={`${styles['password']}`} onChange={passwordChange} placeholder="密码" type="password" />
          </div>
        </div>
        <div className={`${styles['remember-item']}`}>
          <Checkbox checked={remember} onChange={onRememberChange}>记住密码</Checkbox>
          <div className={`${styles['login-tip-message']} ${tipsMsg !== '' ? styles['active'] : ''}`}><InfoCircleOutlined />&nbsp;{tipsMsg}</div>
        </div>
        <Button type="primary" htmlType="submit" loading={loading} className={`${styles['login-form-button']}`} onClick={handleSubmit}>
          登录
        </Button>
      </div>
    </div >
  );
};

export default Login;