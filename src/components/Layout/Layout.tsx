import React, { useCallback, useState } from 'react';
import { Button, Layout, Menu } from 'antd';
import { items } from './item';
import { useLocation, history } from 'umi';

import style from './style.less';
import { useDebounceEffect } from 'ahooks';
import { GithubOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const Layouts: React.FC<any> = ({ children }) => {
  const { query = {}, pathname = '' } = useLocation() as any;
  const [selectedKeys, setSelectedKeys] = useState<string[]>([
    '/tinyChart/overview',
  ]);

  const onClick = useCallback(({ key: pathname }) => {
    history.push({
      pathname,
      query,
    });
  }, []);
  console.log(pathname);

  useDebounceEffect(
    () => {
      if (!pathname || pathname === '/') {
        history.push('/tinyChart/overview');
        // setSelectedKeys([pathname]);
      }
      if (pathname) {
        setSelectedKeys([pathname]);
      }
    },
    [pathname],
    { wait: 1 },
  );

  return (
    <Layout className="layout">
      <Header className={style.header}>
        <Menu
          onClick={onClick}
          selectedKeys={selectedKeys}
          theme="dark"
          mode="horizontal"
          items={items}
          className={style.menu}
        />
        <Button
          type="dashed"
          icon={<GithubOutlined />}
          href="https://github.com/tTiny-Zhang"
        />
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content">{children}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Made with by tTiny</Footer>
    </Layout>
  );
};
export default Layouts;
