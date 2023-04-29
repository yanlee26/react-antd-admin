import { Button, Col, Divider, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AdvancedSearchForm } from './AdvancedForm';
import { flatJson, genSummaries, getPercent, ioItems, summary } from './config';
import { IndexDisplay, style } from './IndexDisplay';

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

const Detail: React.FC = () => {
  const [values, setValues] = useState(() => flatJson(json));

  const navigate = useNavigate();

  const summmaries = useMemo(() => {
    return genSummaries(values);
  }, [values]);

  const totalSummmaries = useMemo(() => {
    const H = summary([summmaries.A, summmaries.B, summmaries.C]);
    const K = summary([summmaries.D, summmaries.E, summmaries.F, summmaries.G]);
    const J = H - K;
    const D = summmaries.D;
    const B = summmaries.B;

    return {
      J,
      H,
      B,
      D,
      K,
      JK: getPercent(J, K),
      DK: getPercent(D, K),
      BK: getPercent(B, K),
    };
  }, [summmaries]);

  function goBack() {
    navigate(-1);
  }

  return (
    <div>
      <div className="content-header">
        <Button type="link" onClick={goBack}>
          返回
        </Button>
      </div>

      <div style={{ marginTop: 16, marginBottom: 16 }}>
        <Row gutter={24}>
          <Col className="bolder" span={12}>
            <Divider orientation="left"> 汇总(万元)</Divider>
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col className="bolder" span={12}>
                <div style={style}>年度结余(J=H-K):{totalSummmaries.J}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度总收入(H=A+B+C):{totalSummmaries.H}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度负债性支出(D):{totalSummmaries.D}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度总支出(K=D+E+F+G):{totalSummmaries.K}</div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Divider orientation="left"> 分析指标</Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12}>
                <IndexDisplay txt="结余比率(J/H)" val={totalSummmaries.JK} isWarning={totalSummmaries.JK <= 20} />
              </Col>
              <Col span={12}>
                <div style={style}>{'参考值:>20%'}</div>
              </Col>
              <Col span={12}>
                <IndexDisplay txt="财务负担比(D/K)" val={totalSummmaries.DK} isWarning={totalSummmaries.DK >= 40} />
              </Col>
              <Col span={12}>
                <div style={style}>{'参考值:<40%'}</div>
              </Col>
              <Col span={12}>
                <IndexDisplay txt="财务自由度(B/K)" val={totalSummmaries.BK} isWarning={totalSummmaries.BK < 100} />
              </Col>
              <Col span={12}>
                <div style={style}>{'参考值:>100%'}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <AdvancedSearchForm
        formItems={ioItems}
        initialValues={values}
        setValue={setValues}
        summaryEntries={Object.entries(summmaries)}
      />
    </div>
  );
};

export default Detail;
