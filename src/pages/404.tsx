import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title="404"
      subTitle={'notfound'}
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          back
        </Button>
      }
    ></Result>
  );
};

export default NotFoundPage;
