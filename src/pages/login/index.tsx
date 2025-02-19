import type { LoginParams } from '@/interface/user/login';
import type { FC } from 'react';

import './index.less';

import { Button, Checkbox, Form, Input } from 'antd';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

import { formatSearch } from '@/utils/formatSearch';

import { loginAsync } from '../../stores/user.action';

const initialValues: LoginParams = {
  username: 'guest',
  password: 'guest',
  // remember: true
};

const LoginForm: FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const onFinished = async (form: LoginParams) => {
    const res = dispatch(await loginAsync(form));

    if (!!res) {
      const search = formatSearch(location.search);
      const from = search.from || { pathname: '/' };

      navigate(from);
    }
  };

  return (
    <div className="login-page">
      <Form<LoginParams> onFinish={onFinished} className="login-page-form" initialValues={initialValues}>
        <h2>REACT ANTD ADMIN</h2>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'enterUsernameMessage',
            },
          ]}
        >
          <Input placeholder={'username'} />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'enterPasswordMessage',
            },
          ]}
        >
          <Input type="password" placeholder={'password'} />
        </Form.Item>
        <Form.Item name="remember" valuePropName="checked">
          <Checkbox>rememberUser</Checkbox>
        </Form.Item>
        <Form.Item>
          <Button htmlType="submit" type="primary" className="login-page-form_button">
            login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginForm;
