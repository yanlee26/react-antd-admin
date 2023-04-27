import type { FC } from 'react';

import MySearch from '@/components/business/search';
import MyFormItem from '@/components/core/form-item';
import { useLocale } from '@/locales';

const SearchPage: FC = () => {
  const { formatMessage } = useLocale();

  const onSearch = (values: any) => {
    console.log(values);
  };

  const nameLabel = formatMessage({ id: 'component.search.mobile' });
  const sexLabel = formatMessage({ id: 'component.search.sex' });
  const maleLabel = formatMessage({ id: 'component.search.male' });
  const femaleLabel = formatMessage({ id: 'component.search.female' });

  return (
    <MySearch onSearch={onSearch}>
      <MyFormItem label={nameLabel} type="input" name="name" />
    </MySearch>
  );
};

export default SearchPage;
