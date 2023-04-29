import { Button, Col, Divider, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AdvancedSearchForm } from './AdvancedForm';
import { alItems, flatJson, genSummaries, getPercent, summary } from './config';
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
  },
  step2: {
    '2item0': 1,
    '2item1': 1,
    '2item2': 1,
    '2item3': 1,
  },
  step3: {
    '3item1': 1,
    '3item2': 2,
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
  step7: {
    '7item0': 1,
    '7item1': 1,
    '7item2': 1,
  },
};

const Detail: React.FC = () => {
  const [values, setValues] = useState(() => flatJson(json));

  const navigate = useNavigate();

  const summmaries = useMemo(() => {
    return genSummaries(values, 8);
  }, [values]);

  const totalSummmaries = useMemo(() => {
    const K = 12 || 0; // TODO api 获取
    const Z = summary(['S', 'T', 'U'].map(x => summmaries[x]));
    const X = summary(['M', 'N', 'P', 'Q', 'R'].map(x => summmaries[x]));

    const V = summary([summmaries.N, summmaries.P]);
    const W = summary([X, -Z]);
    const Y = K / 12;
    const Q = summmaries['Q'];

    return {
      Q,
      V,
      K,
      W,
      X,
      Y,
      Z,
      ZX: getPercent(Z, X),
      VW: getPercent(V, W),
      QY: getPercent(Q, Y),
    };
  }, [summmaries]);

  console.log(summmaries, totalSummmaries);

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
                <div style={style}>投资资产(V=N+P):{totalSummmaries.V}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度总支出(K):{totalSummmaries.K}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>净资产(W=X-Z):{totalSummmaries.W}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>月度支出(Y=K/12):{totalSummmaries.Y}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>总资产(X=M+N+P+Q+R):{totalSummmaries.X}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>总负债(Z=S+T+U):{totalSummmaries.Z}</div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Divider orientation="left"> 分析指标</Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12}>
                <IndexDisplay txt="负债率(Z/X)" val={totalSummmaries.ZX} isWarning={totalSummmaries.ZX >= 20} />
              </Col>
              <Col span={12}>
                <div style={style}>{'参考值:<70%'}</div>
              </Col>
              <Col span={12}>
                <IndexDisplay txt="投资比率(V/W)" val={totalSummmaries.ZX} isWarning={totalSummmaries.ZX <= 50} />
              </Col>
              <Col span={12}>
                <div style={style}>{'参考值:>50%'}</div>
              </Col>
              <Col span={12}>
                <IndexDisplay
                  txt="流动性比率(Q/Y)"
                  val={totalSummmaries.QY}
                  isWarning={totalSummmaries.QY < 300 || totalSummmaries.QY > 600}
                />
              </Col>
              <Col span={12}>
                <div style={style}>{'参考值:3-6'}</div>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <AdvancedSearchForm
        formItems={alItems}
        initialValues={values}
        setValue={setValues}
        summaryEntries={Object.entries(summmaries)}
      />
    </div>
  );
};

export default Detail;
