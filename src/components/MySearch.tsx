import type { MyFormProps } from '@/components/core/form';

import { css } from '@emotion/react';

import MyButton from '@/components/basic/button';
import MyForm from '@/components/core/form';

interface SearchProps<T> extends MyFormProps<T> {
  onSearch: (values: T) => void;
}

const BaseSearch = <T extends object>(props: SearchProps<T>) => {
  const { children, onSearch, ...rest } = props;
  const [form] = MyForm.useForm<T>();

  const onSubmit = async () => {
    const values = await form.validateFields();

    if (values) {
      onSearch(values);
    }
  };

  return (
    <div css={styles}>
      <MyForm {...rest} form={form} layout="inline">
        {children}
        <MyForm.Item>
          <MyButton type="primary" onClick={onSubmit}>
            搜索
          </MyButton>

          <MyButton onClick={() => form.resetFields()}>重置</MyButton>
        </MyForm.Item>
      </MyForm>
    </div>
  );
};

const MySearch = Object.assign(BaseSearch, {
  Item: MyForm.Item,
});

export default MySearch;

const styles = css`
  padding: 20px;
  .ant-form-item {
    margin-bottom: 20px;
  }
`;
