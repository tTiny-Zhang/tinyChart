import React, { useCallback, useState, lazy, useMemo } from 'react';
import { Button, Layout, Menu } from 'antd';
import { items } from './item';

import style from './style.less';
import { GithubOutlined } from '@ant-design/icons';
import Overview from '@/pages/Overview';
import Echarts from '@/pages/Echarts';
import G2 from '@/pages/G2';
import G6 from '@/pages/G6';
import X6 from '@/pages/X6';
import Todo from '@/pages/Todo';

const { Header, Content, Footer } = Layout;

const componentsList: Record<string, any> = {
  overview: <Overview />,
  echarts: <Echarts />,
  g2: <G2 />,
  g6: <G6 />,
  x6: <X6 />,
  todo: <Todo />,
};

const Layouts: React.FC<any> = ({ children }) => {
  const [selectedKeys, setSelectedKeys] = useState<string[]>(['overview']);

  const onClick = useCallback(({ key: pathname }) => {
    setSelectedKeys([pathname]);
  }, []);

  const renderChildren = useMemo(() => {
    const current = selectedKeys[0];

    return componentsList[current];
  }, [selectedKeys]);

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
        <div className="site-layout-content">{renderChildren}</div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Made with by tTiny</Footer>
    </Layout>
  );
};
export default Layouts;
