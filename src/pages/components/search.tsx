import type { FC } from 'react';

import MyFormItem from '@/components/core/form-item';

const SearchPage: FC = () => {
  const onSearch = (values: any) => {
    console.log(values);
  };

  const nameLabel = 'name';

  return (
    <div>
      <MyFormItem label={nameLabel} type="input" name="name" />
    </div>
  );
};

export default SearchPage;
