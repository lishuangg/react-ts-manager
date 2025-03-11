import React, { useEffect } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme, Watermark } from 'antd';
import NavHeader from '@/components/NavHeader';
import NavFooter from '@/components/NavFooter';
import SideMenu from '@/components/Menu';

const { Header, Content, Footer, Sider } = Layout;

const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`
}));

const App: React.FC = () => {
  const {
    token: { colorBgContainer, borderRadiusLG }
  } = theme.useToken();

  // 模拟水印无法删除的原理
  useEffect(() => {
    const dom = document.getElementById('content') as HTMLDivElement;
    // MutationObserver 接口提供了监视对 DOM 树所做更改的能力。它被设计为旧的 Mutation Events 功能的替代品，该功能是 DOM3 Events 规范的一部分。
    const observer = new MutationObserver(function (mutationsList, observer) {
      console.log('mutationsList', mutationsList);
      observer.disconnect(); // 停止观察 避免无限循环
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          console.log('A child node has been added or removed.');
          const span = document.createElement('span');
          span.innerText = 'hello';
          dom.appendChild(span);
          observer.observe(dom, config); // 重新开始观察
        }
      }
    });
    const config = { attributes: true, childList: true, subtree: true };
    observer.observe(dom, config);
  }, []);

  return (
    <Watermark content="Ant Design">
      <Layout>
        <Sider>
          <SideMenu />
        </Sider>
        <Layout>
          <NavHeader />
          <Content style={{ margin: '24px 16px 0' }}>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG
              }}
              id="content"
            >
              <span>content</span>
            </div>
          </Content>
          <NavFooter/>
        </Layout>
      </Layout>
    </Watermark>
  );
};

export default App;
