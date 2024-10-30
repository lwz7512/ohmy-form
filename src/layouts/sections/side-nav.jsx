import React, { useEffect, useRef, useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';

import { Logo } from '@/components';
import { useLocation } from 'react-router-dom';
import {
  COLOR,
  PATH_LANDING,
} from '@/constants';

import { items } from '@/config/menu-items';

const { Sider } = Layout;

const rootSubmenuKeys = ['dashboards', 'corporate', 'user-profile'];

// type SideNavProps = SiderProps;

const SideNav = ({ ...others }) => {
  const nodeRef = useRef(null);
  const { pathname } = useLocation();
  const [openKeys, setOpenKeys] = useState(['']);
  const [current, setCurrent] = useState('');

  /**
   * click handler: MenuProps['onClick']
   * @param {Event} e 
   */
  const onClick = (e) => {
    console.log('click ', e);
  };

  /**
   * MenuProps['onOpenChange']
   * @param {string[]} keys 
   */
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (latestOpenKey && rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };

  useEffect(() => {
    const paths = pathname.split('/');
    setOpenKeys(paths);
    setCurrent(paths[paths.length - 1]);
  }, [pathname]);

  return (
    <Sider ref={nodeRef} breakpoint="lg" collapsedWidth="0" {...others}>
      <Logo
        color="blue"
        asLink
        href={PATH_LANDING.root}
        justify="center"
        gap="small"
        imgSize={{ h: 28, w: 28 }}
        style={{ padding: '1rem 0' }}
      />
      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemBg: 'none',
              itemSelectedBg: COLOR['100'],
              itemHoverBg: COLOR['50'],
              itemSelectedColor: COLOR['600'],
            },
          },
        }}
      >
        <Menu
          mode="inline"
          items={items}
          onClick={onClick}
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          selectedKeys={[current]}
          style={{ border: 'none' }}
        />
      </ConfigProvider>
    </Sider>
  );
};

export default SideNav;
