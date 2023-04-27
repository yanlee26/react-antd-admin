import type { ColumnsType } from 'antd/es/table';

import { Space, Table, Tag } from 'antd';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  age: number;
  address: string;
  tags: string[];
}

const CommonTable: React.FC = ({ data, columns }) => <Table columns={columns} dataSource={data} />;

export default CommonTable;
