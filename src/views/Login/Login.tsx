import { Button, Form, Input, message, App } from 'antd';
import styles from './index.module.less';
import api from '@/api';
import { Login } from '@/types/api';
import storage from '@/utils/storage';
export default function LoginFC() {
  const { message } = App.useApp();
  const onFinish = async (values: Login.params) => {
    const data = await api.login(values)
    console.log('values', values);
    console.log('data', data);
    storage.set('token', data)
    message.success('登录成功')
    const params = new URLSearchParams(location.search);
    location.href = params.get('callback')  || '/welcome'
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
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}
