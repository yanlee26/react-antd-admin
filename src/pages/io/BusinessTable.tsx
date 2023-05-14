import type { FamilyItem } from '@/interface/family';
import type { ColumnsType } from 'antd/es/table';
import type { FC } from 'react';

import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

import { getFamilyIOList, getFamilyLAList } from '@/api/family';
import MyFormItem from '@/components/core/form-item';
import MySearch from '@/components/MySearch';
import { useCommonListPageFetch } from '@/hooks/useCommonListPageFetch';

export const BusinessTable: FC<{ isIO: boolean }> = ({ isIO = true }) => {
  const navigate = useNavigate();

  const { pagination, data, memoSetSearchParams, onResetSearchParams } = useCommonListPageFetch<any, any>(
    isIO ? getFamilyIOList : getFamilyLAList,
    {},
    { list: [], total: 0 },
  );

  const getDetails = (record: FamilyItem) => {
    navigate(`/${isIO ? 'io' : 'la'}/detail/${record.Mobile}`, {
      state: record,
    });
  };

  const columns: ColumnsType<FamilyItem> = [
    {
      title: '手机号',
      dataIndex: 'Mobile',
    },
    {
      title: '微信号',
      dataIndex: 'Wechat',
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
    memoSetSearchParams(values);
  };

  return (
    <div>
      <MySearch onSearch={onSearch} onReset={onResetSearchParams}>
        <MyFormItem label={'手机号'} type="input" name="mobile" />
        <MyFormItem label={'微信号'} type="input" name="wechat" />
      </MySearch>
      <Table
        scroll={{ x: 'max-content', y: 800 }}
        columns={columns}
        rowKey={'ID'}
        dataSource={data.list || []}
        pagination={pagination}
      />
    </div>
  );
};
