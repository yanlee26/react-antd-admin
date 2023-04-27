import type { FC } from 'react';

import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import CommonTable from '../components/commonTable';

const data: DataType[] = [
  {
    key: '1',
    mobile: '123456789',
    income: 32,
  },
  {
    key: '2',
    mobile: '123456789',
    income: 42,
  },
  {
    key: '3',
    mobile: '123456789',
    income: 32,
  },
];

const Io: FC = () => {
  const navigate = useNavigate();

  const getDetails = record => {
    console.log('record', record);
    navigate('/io/detail');
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '电话号码',
      dataIndex: 'mobile',
      key: 'mobile',
      // render: text => <a>{text}</a>,
    },
    {
      title: '家庭收支',
      dataIndex: 'income',
      key: 'income',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" onClick={() => getDetails(record)}>
          <Button type="link" size="small">
            Details
          </Button>
        </Space>
      ),
    },
  ];

  return <CommonTable data={data} columns={columns} />;
};

export default Io;
