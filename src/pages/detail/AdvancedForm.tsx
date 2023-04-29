import { Col, Collapse, Form, Input, Row } from 'antd';

const { Panel } = Collapse;

type AdvancedSearchFormParams = {
  initialValues?: object;
  name?: string;
  summaryEntries: [string, number][];
  setValue: (o: object) => void;
  formItems: any[];
};

export const AdvancedSearchForm = ({
  formItems,
  name = 'io',
  summaryEntries,
  initialValues = {},
  setValue,
}: AdvancedSearchFormParams) => {
  const onChange = (val: object, all: object) => {
    setValue(all);
  };

  return (
    <Form name={name} initialValues={initialValues} onValuesChange={onChange}>
      <Collapse defaultActiveKey={['0']}>
        {formItems.map((panel, idx) => (
          <Panel
            header={
              <div className="bolder">{panel.title + `(${summaryEntries[idx][0]} = ${summaryEntries[idx][1]})`}</div>
            }
            key={idx}
            forceRender
          >
            <Row gutter={24}>
              {panel.items?.map((item: any, i: number) => (
                <Col span={8} key={i}>
                  <Form.Item name={`${idx}item${i}`} label={item.label}>
                    <Input type="number" />
                  </Form.Item>
                </Col>
              ))}
            </Row>
          </Panel>
        ))}
      </Collapse>
    </Form>
  );
};
