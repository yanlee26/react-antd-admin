import type { DataType } from '@/types';
import type { ColumnsType } from 'antd/es/table';
import type { FC } from 'react';

import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

import MyFormItem from '@/components/core/form-item';
import MySearch from '@/components/MySearch';

const json = {
  step0: {
    '0item0': 2,
    '0item1': 2,
    '0item2': 1,
    '0item3': 1,
  },
  step1: {
    '1item0': 1,
    '1item1': 1,
    '1item2': 1,
    '1item3': 2,
    '1item4': 1,
  },
  step2: {
    '2item0': 1,
  },
  step3: {
    '3item1': 1,
    '3item2': 1,
    '3item3': 1,
  },
  step4: {
    '4item0': 3,
    '4item1': 1,
    '4item2': 1,
  },
  step5: {
    '5item0': 3,
    '5item1': 1,
    '5item2': 1,
  },
  step6: {
    '6item0': 1,
    '6item1': 1,
  },
};
const data: DataType[] = [
  {
    mobile: '123456789',
    wechat: 'wechat1',
    sheetData: json,
  },
  {
    mobile: '123456789',
    wechat: 'wechat1',
    sheetData: json,
  },
  {
    mobile: '123456789',
    wechat: 'wechat1',
    sheetData: json,
  },
];

export const BusinessTable: FC<{ isIO: boolean }> = ({ isIO = true }) => {
  const navigate = useNavigate();

  const getDetails = (record: DataType) => {
    navigate('/io/detail', {
      state: record,
    });
  };

  const columns: ColumnsType<DataType> = [
    {
      title: '手机号',
      dataIndex: 'mobile',
    },
    {
      title: '微信号',
      dataIndex: 'wechat',
    },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle" onClick={() => getDetails(record)}>
          <Button type="link" size="small">
            查看
          </Button>
        </Space>
      ),
    },
  ];

  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <div>
      <MySearch onSearch={onSearch}>
        <MyFormItem label={'手机号'} type="input" name="mobile" />
        <MyFormItem label={'微信号'} type="input" name="wechat" />
      </MySearch>
      <Table columns={columns} dataSource={data} />
    </div>
  );
};
