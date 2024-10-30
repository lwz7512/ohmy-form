import { Link, } from 'react-router-dom';

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

import {
  PATH_ABOUT,
  PATH_AUTH,
  PATH_CORPORATE,
  PATH_DASHBOARD,
  PATH_DOCS,
  PATH_ERROR,
  PATH_GITHUB,
  PATH_SITEMAP,
  PATH_USER_PROFILE,
  DEMO_PATHS,
} from '@/constants';



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
  icon = null,
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
 * type MenuItem = Required<MenuProps>['items'][number];
 * @type {MenuItem[]}
 */
export const items = [
  getItem('Demos', 'demos', <PieChartOutlined />, [
    getItem(<Link to={PATH_DASHBOARD.default}>Default</Link>, 'default', null),
    getItem(
      <Link to={DEMO_PATHS.demo1}>Form Sum</Link>,
      'demo1',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo2}>Form Select Cascade</Link>,
      'demo2',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo3}>Form Watch</Link>,
      'demo3',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo4}>Dyna load script</Link>,
      'demo4',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo5}>Dyna script from DB</Link>,
      'demo5',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo6}>Demo 06:</Link>,
      'demo6',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo7}>Demo 07:</Link>,
      'demo7',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo8}>Demo 08:</Link>,
      'demo8',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo9}>Demo 09:</Link>,
      'demo9',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo10}>Demo 10:</Link>,
      'demo10',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo11}>Demo 11:</Link>,
      'demo11',
    ),
    getItem(
      <Link to={DEMO_PATHS.demo12}>Demo 12:</Link>,
      'demo12',
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
    // FIXME: cause error with line: 96
    // getItem(<Link to={PATH_CORPORATE.about}>About</Link>, 'about', null),
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
