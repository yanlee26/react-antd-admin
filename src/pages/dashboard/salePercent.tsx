import type { FC } from 'react';

import { useState } from 'react';
import { useSelector } from 'react-redux';

type DataType = 'all' | 'online' | 'offline';

interface Values {
  name: {
    zh_CN: string;
    en_US: string;
  };
  value: number;
}

const SalePercent: FC<{ loading: boolean }> = ({ loading }) => {
  const [dataType, setDataType] = useState<DataType>('all');
  const { locale } = useSelector(state => state.user);

  return 'hi';
};

export default SalePercent;
