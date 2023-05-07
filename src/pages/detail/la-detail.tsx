import { Button, Col, Divider, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AdvancedSearchForm } from './AdvancedForm';
import { alItems, flatJson, genSummaries, getPercent, notes, summary } from './config';
import { IndexDisplay, Info, style } from './IndexDisplay';

const Detail: React.FC = () => {
  const location = useLocation();
  const [values, setValues] = useState(() => flatJson(location.state.JsonData));

  const navigate = useNavigate();

  const summaries = useMemo(() => {
    return genSummaries(values, 8);
  }, [values]);

  const totalSummaries = useMemo(() => {
    const K = 12 || 0; // TODO api 获取
    const Z = summary(['S', 'T', 'U'].map(x => summaries[x]));
    const X = summary(['M', 'N', 'P', 'Q', 'R'].map(x => summaries[x]));

    const V = summary([summaries.N, summaries.P]);
    const W = summary([X, -Z]);
    const Y = K / 12;
    const Q = summaries['Q'];

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
  }, [summaries]);

  console.log(summaries, totalSummaries);

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
                <div style={style}>投资资产(V=N+P):{totalSummaries.V}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度总支出(K):{totalSummaries.K}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>净资产(W=X-Z):{totalSummaries.W}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>月度支出(Y=K/12):{totalSummaries.Y}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>总资产(X=M+N+P+Q+R):{totalSummaries.X}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>总负债(Z=S+T+U):{totalSummaries.Z}</div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Divider orientation="left"> 分析指标</Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12}>
                <IndexDisplay txt="负债率(Z/X)" val={totalSummaries.ZX} isWarning={+totalSummaries.ZX >= 20} />
              </Col>
              <Col span={12}>
                <Info tip={notes.la.ZX} txt={notes.la.zx} />
              </Col>
              <Col span={12}>
                <IndexDisplay txt="投资比率(V/W)" val={totalSummaries.ZX} isWarning={+totalSummaries.ZX <= 50} />
              </Col>
              <Col span={12}>
                <Info tip={notes.la.VW} txt={notes.la.vw} />
              </Col>
              <Col span={12}>
                <IndexDisplay
                  txt="流动性比率(Q/Y)"
                  val={totalSummaries.QY}
                  isWarning={+totalSummaries.QY < 300 || +totalSummaries.QY > 600}
                />
              </Col>
              <Col span={12}>
                <Info tip={notes.la.QY} txt={notes.la.qy} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <AdvancedSearchForm
        formItems={alItems}
        initialValues={values}
        setValue={setValues}
        summaryEntries={Object.entries(summaries)}
      />
    </div>
  );
};

export default Detail;
