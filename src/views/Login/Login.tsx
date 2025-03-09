import { useState } from 'react';
import { Button, Form, Input, message, App } from 'antd';
import styles from './index.module.less';
import api from '@/api';
import { Login } from '@/types/api';
import storage from '@/utils/storage';
export default function LoginFC() {
  // const { message } = App.useApp();

  const [loading, setLoading] = useState(false);

  const onFinish = async (values: Login.params) => {
    setLoading(true);
    const data: any = await api.login(values);
    if (data.code !== 0) {
      return message.error('登录失败');
    }
    setLoading(false);
    console.log('values', values);
    storage.set('token', data);
    message.success('登录成功');
    const params = new URLSearchParams(location.search);
    location.href = params.get('callback') || '/welcome';
  };
  return (
    <div className={styles.login}>
      <div className={styles.loginWrapper}>
        <div className={styles.title}>系统登录</div>
        <Form name="basic" initialValues={{ remember: true }} onFinish={onFinish} autoComplete="off">
          <Form.Item name="userName" rules={[{ required: true, message: 'Please input your username!' }]}>
            <Input />
          </Form.Item>

          <Form.Item name="userPwd" rules={[{ required: true, message: 'Please input your password!' }]}>
            <Input.Password />
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" block htmlType="submit" loading={loading}>
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
