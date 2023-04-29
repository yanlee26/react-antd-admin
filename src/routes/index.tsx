import type { FC } from 'react';
import type { RouteObject } from 'react-router';

import { lazy } from 'react';
import { Navigate } from 'react-router';
import { useRoutes } from 'react-router-dom';

import Dashboard from '@/pages/dashboard';
import LayoutPage from '@/pages/layout';
import LoginPage from '@/pages/login';

import WrapperRouteComponent from './config';

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '@/pages/404'));
const Io = lazy(() => import(/* webpackChunkName: "io'"*/ '@/pages/io'));
const La = lazy(() => import(/* webpackChunkName: "la"*/ '@/pages/la'));
const IODetail = lazy(() => import(/* webpackChunkName: "detail'"*/ '@/pages/detail/io-detail'));
const LADetail = lazy(() => import(/* webpackChunkName: "detail'"*/ '@/pages/detail/la-detail'));

const routeList: RouteObject[] = [
  {
    path: '/login',
    element: <WrapperRouteComponent element={<LoginPage />} titleId="title.login" />,
  },
  {
    path: '/',
    element: <WrapperRouteComponent element={<LayoutPage />} titleId="" />,
    children: [
      {
        path: '',
        element: <Navigate to="dashboard" />,
      },
      {
        path: 'dashboard',
        element: <WrapperRouteComponent element={<Dashboard />} titleId="title.dashboard" />,
      },
      {
        path: 'io',
        element: <WrapperRouteComponent element={<Io />} titleId="家庭收入支出管理" />,
      },
      {
        path: 'io/detail',
        element: <WrapperRouteComponent element={<IODetail />} titleId="家庭资产负债详情" />,
      },
      {
        path: 'la',
        element: <WrapperRouteComponent element={<La />} titleId="家庭资产负债管理" />,
      },
      {
        path: 'la/detail',
        element: <WrapperRouteComponent element={<LADetail />} titleId="家庭资产负债详情" />,
      },
      {
        path: '*',
        element: <WrapperRouteComponent element={<NotFound />} titleId="title.notFount" />,
      },
    ],
  },
];

const RenderRouter: FC = () => {
  const element = useRoutes(routeList);

  return element;
};

export default RenderRouter;
