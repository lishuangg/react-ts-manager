import { MenuFoldOutlined } from '@ant-design/icons';
import { Breadcrumb, Dropdown, MenuProps, Switch } from 'antd';
import store from '@/store';
import styles from './index.module.less';
import storage from '@/utils/storage';
const NavHeader = () => {
  const userInfo = store.userInfo;
  const breadList = [
    {
      title: '首页'
    },
    {
      title: '工作台'
    }
  ];

  const items: MenuProps['items'] = [
    {
      key: 'email',
      label: '邮箱：' + userInfo.userEmail
    },
    {
      key: 'logout',
      label: '退出'
    }
  ];

const onClick: MenuProps['onClick'] = (e) => {
    if (e.key === 'logout') {
      storage.remove('token');
      window.location.href = '/login?callback=' + encodeURIComponent(window.location.href);
    }
  };

  return (
    <div className={styles.navHeader}>
      <div className={styles.left}>
        <MenuFoldOutlined />
        <Breadcrumb items={breadList} style={{marginLeft: '10px'}} />
      </div>
      <div className={styles.right}>
        <Switch checkedChildren="暗黑" unCheckedChildren="默认" style={{marginRight: '10px'}}/>
        <Dropdown menu={{ items, onClick }} trigger={['click']}>
          <span className={styles.userName}>{userInfo.userName}</span>
        </Dropdown>
      </div>
    </div>
  );
};

export default NavHeader;
