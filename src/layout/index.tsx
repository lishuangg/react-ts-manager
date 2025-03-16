import React, { useEffect } from 'react';
import { Layout, Watermark } from 'antd';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import SideMenu from '@/components/Menu';
import { Outlet } from 'react-router-dom';
import api from '@/api';
import styles from './index.module.less'
import storage from '@/utils/storage';

const { Content, Sider } = Layout;

const App: React.FC = () => {

  useEffect(() => {
    console.log('App');
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    const data = await api.getUserInfo();
    storage.set('userInfo', data)
    console.log('data', data);
  };

  return (
    <Watermark content="Ant Design">
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content className={styles.content}>
            <div className={styles.wrapper}>
              <Outlet></Outlet>
            </div>
            <NavFooter />
          </Content>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
