import type { FC } from 'react';

import MyFormItem from '@/components/core/form-item';
import MySearch from '@/components/MySearch';

const SearchPage: FC = () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  return (
    <MySearch onSearch={onSearch}>
      <MyFormItem label={'手机号'} type="input" name="mobile" />
      <MyFormItem label={'微信号'} type="input" name="wechat" />
    </MySearch>
  );
};

export default SearchPage;
