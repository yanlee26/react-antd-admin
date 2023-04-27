import type { FC } from 'react';

import { Button, Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import CommonTable from '../components/commonTable';

const data: DataType[] = [
  {
    key: '1',
    mobile: '99123456789',
    income: 100,
  },
  {
    key: '2',
    mobile: '8123456789',
    income: 422,
  },
  {
    key: '3',
    mobile: '6123456789',
    income: 312,
  },
];

const La: FC = () => {
  const navigate = useNavigate();

  const getDetails = record => {
    console.log('record', record);
    navigate('/la/detail');
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

export default La;

//   return (
//     <div className="guide-page ">
//       <div className="innerText">
//         <CommonTable data={data} columns={columns}>
//       </div>
//     </div>
//   );
// };

// export default GuidePage;
