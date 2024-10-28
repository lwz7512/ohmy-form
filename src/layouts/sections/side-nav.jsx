import React, { useEffect, useRef, useState } from 'react';
import { ConfigProvider, Layout, Menu } from 'antd';
import {
  AppstoreAddOutlined,
  BranchesOutlined,
  BugOutlined,
  GithubOutlined,
  IdcardOutlined,
  InfoCircleOutlined,
  PieChartOutlined,
  ProductOutlined,
  SecurityScanOutlined,
  SnippetsOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Logo } from '@/components';
import { Link, useLocation } from 'react-router-dom';
import {
  COLOR,
  PATH_ABOUT,
  PATH_AUTH,
  PATH_CORPORATE,
  PATH_DASHBOARD,
  PATH_DOCS,
  PATH_ERROR,
  PATH_GITHUB,
  PATH_LANDING,
  PATH_SITEMAP,
  PATH_USER_PROFILE,
} from '@/constants';


const { Sider } = Layout;

// type MenuItem = Required<MenuProps>['items'][number];

/**
 * Compose an item
 * @param {React.ReactNode} label 
 * @param {React.Key} key 
 * @param {React.ReactNode | undefined} icon 
 * @param {MenuItem[] | undefined} children 
 * @param {string} type 
 * @returns {MenuItem}
 */
const getItem = (
  label,
  key,
  icon,
  children,
  type = 'group'
) => {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
};

/**
 * MenuProps['items']
 */
const items = [
  getItem('Dashboards', 'dashboards', <PieChartOutlined />, [
    getItem(<Link to={PATH_DASHBOARD.default}>Default</Link>, 'default', null),
    getItem(
      <Link to={PATH_DASHBOARD.projects}>Projects</Link>,
      'projects',
      null
    ),
    getItem(
      <Link to={PATH_DASHBOARD.ecommerce}>eCommerce</Link>,
      'ecommerce',
      null
    ),
    getItem(
      <Link to={PATH_DASHBOARD.marketing}>Marketing</Link>,
      'marketing',
      null
    ),
    getItem(<Link to={PATH_DASHBOARD.social}>Social</Link>, 'social', null),
    getItem(<Link to={PATH_DASHBOARD.bidding}>Bidding</Link>, 'bidding', null),
    getItem(
      <Link to={PATH_DASHBOARD.learning}>Learning</Link>,
      'learning',
      null
    ),
    getItem(
      <Link to={PATH_DASHBOARD.logistics}>Logistics</Link>,
      'logistics',
      null
    ),
  ]),
  getItem(
    <Link to={PATH_ABOUT.root}>About</Link>,
    'about',
    <InfoCircleOutlined />
  ),
  getItem(
    <Link to={PATH_SITEMAP.root}>Sitemap</Link>,
    'sitemap',
    <BranchesOutlined />
  ),

  getItem('Pages', 'pages', null, [], 'group'),

  getItem('Corporate', 'corporate', <IdcardOutlined />, [
    getItem(<Link to={PATH_CORPORATE.about}>About</Link>, 'about', null),
    getItem(<Link to={PATH_CORPORATE.team}>Team</Link>, 'team', null),
    getItem(<Link to={PATH_CORPORATE.faqs}>FAQ</Link>, 'faqs', null),
    getItem(
      <Link to={PATH_CORPORATE.contact}>Contact us</Link>,
      'contact us',
      null
    ),
    getItem(<Link to={PATH_CORPORATE.pricing}>Pricing</Link>, 'pricing', null),
    getItem(<Link to={PATH_CORPORATE.license}>License</Link>, 'license', null),
  ]),

  getItem('User profile', 'user-profile', <UserOutlined />, [
    getItem(
      <Link to={PATH_USER_PROFILE.details}>Details</Link>,
      'details',
      null
    ),
    getItem(
      <Link to={PATH_USER_PROFILE.preferences}>Preferences</Link>,
      'preferences',
      null
    ),
    getItem(
      <Link to={PATH_USER_PROFILE.personalInformation}>Information</Link>,
      'personal-information',
      null
    ),
    getItem(
      <Link to={PATH_USER_PROFILE.security}>Security</Link>,
      'security',
      null
    ),
    getItem(
      <Link to={PATH_USER_PROFILE.activity}>Activity</Link>,
      'activity',
      null
    ),
    getItem(
      <Link to={PATH_USER_PROFILE.action}>Actions</Link>,
      'actions',
      null
    ),
    getItem(<Link to={PATH_USER_PROFILE.help}>Help</Link>, 'help', null),
    getItem(
      <Link to={PATH_USER_PROFILE.feedback}>Feedback</Link>,
      'feedback',
      null
    ),
  ]),

  getItem('Authentication', 'authentication', <SecurityScanOutlined />, [
    getItem(<Link to={PATH_AUTH.signin}>Sign In</Link>, 'auth-signin', null),
    getItem(<Link to={PATH_AUTH.signup}>Sign Up</Link>, 'auth-signup', null),
    getItem(<Link to={PATH_AUTH.welcome}>Welcome</Link>, 'auth-welcome', null),
    getItem(
      <Link to={PATH_AUTH.verifyEmail}>Verify email</Link>,
      'auth-verify',
      null
    ),
    getItem(
      <Link to={PATH_AUTH.passwordReset}>Password reset</Link>,
      'auth-password-reset',
      null
    ),
    // getItem(<Link to={PATH_AUTH.passwordConfirm}>Passsword confirmation</Link>, 'auth-password-confirmation', null),
    getItem(
      <Link to={PATH_AUTH.accountDelete}>Account deleted</Link>,
      'auth-account-deactivation',
      null
    ),
  ]),

  getItem('Errors', 'errors', <BugOutlined />, [
    getItem(<Link to={PATH_ERROR.error400}>400</Link>, '400', null),
    getItem(<Link to={PATH_ERROR.error403}>403</Link>, '403', null),
    getItem(<Link to={PATH_ERROR.error404}>404</Link>, '404', null),
    getItem(<Link to={PATH_ERROR.error500}>500</Link>, '500', null),
    getItem(<Link to={PATH_ERROR.error503}>503</Link>, '503', null),
  ]),

  getItem('Help', 'help', null, [], 'group'),
  getItem(
    <Link to={PATH_DOCS.productRoadmap} target="_blank">
      Roadmap
    </Link>,
    'product-roadmap',
    <ProductOutlined />
  ),
  getItem(
    <Link to={PATH_DOCS.components} target="_blank">
      Components
    </Link>,
    'components',
    <AppstoreAddOutlined />
  ),
  getItem(
    <Link to={PATH_DOCS.help} target="_blank">
      Documentation
    </Link>,
    'documentation',
    <SnippetsOutlined />
  ),
  getItem(
    <Link to={PATH_GITHUB.repo} target="_blank">
      Give us a star
    </Link>,
    'give-us-a-star',
    <GithubOutlined />
  ),
];

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
