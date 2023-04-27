import type { MenuList } from '@/interface/layout/menu.interface';

import { intercepter, mock } from '../config';

const mockMenuList: MenuList = [
  {
    code: 'dashboard',
    label: '首页',
    icon: 'dashboard',
    path: '/dashboard',
  },
  {
    code: 'io',
    label: '家庭收入支出管理',
    icon: 'documentation',
    path: '/io',
    // children: [
    //   {
    //     code: 'ioDetail',
    //     label: '家庭资产负债管理详情',
    //     path: '/io/details',
    //   },
    // ],
  },
  {
    code: 'la',
    label: '家庭资产负债管理',
    icon: 'guide',
    path: '/la',
    // children: [
    //   {
    //     code: 'laDetail',
    //     label: '家庭资产负债管理详情',
    //     path: '/la/details',
    //   },
    // ],
  },
  /*{
    code: 'permission',
    label: {
      zh_CN: '权限',
      en_US: 'Permission',
    },
    icon: 'permission',
    path: '/permission',
    children: [
      {
        code: 'routePermission',
        label: {
          zh_CN: '路由权限',
          en_US: 'Route Permission',
        },
        path: '/permission/route',
      },
      {
        code: 'notFound',
        label: {
          zh_CN: '404',
          en_US: '404',
        },
        path: '/permission/404',
      },
    ],
  },
    */
];

mock.mock('/user/menu', 'get', intercepter(mockMenuList));
