import { Button, Col, Divider, Row } from 'antd';
import { useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { AdvancedSearchForm } from './AdvancedForm';
import { flatJson, genSummaries, getPercent, ioItems, notes, summary } from './config';
import { IndexDisplay, Info, style } from './IndexDisplay';

const Detail: React.FC = () => {
  const location = useLocation();

  const [values, setValues] = useState(() => flatJson(location.state.sheetData));

  const navigate = useNavigate();

  const summaries = useMemo(() => {
    return genSummaries(values);
  }, [values]);

  const totalSummaries = useMemo(() => {
    const H = summary([summaries.A, summaries.B, summaries.C]);
    const K = summary([summaries.D, summaries.E, summaries.F, summaries.G]);
    const J = H - K;
    const D = summaries.D;
    const B = summaries.B;

    return {
      J,
      H,
      B,
      D,
      K,
      JH: getPercent(J, H),
      DH: getPercent(D, H),
      BK: getPercent(B, K),
    };
  }, [summaries]);

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
                <div style={style}>年度结余(J=H-K):{totalSummaries.J}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度总收入(H=A+B+C):{totalSummaries.H}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度负债性支出(D):{totalSummaries.D}</div>
              </Col>
              <Col className="bolder" span={12}>
                <div style={style}>年度总支出(K=D+E+F+G):{totalSummaries.K}</div>
              </Col>
            </Row>
          </Col>
          <Col span={12}>
            <Divider orientation="left"> 分析指标</Divider>

            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
              <Col span={12}>
                <IndexDisplay txt="结余比率(J/H)" val={totalSummaries.JH} isWarning={+totalSummaries.JH <= 20} />
              </Col>
              <Col span={12}>
                <Info tip={notes.io.JH} txt={notes.io.jh} />
              </Col>
              <Col span={12}>
                <IndexDisplay txt="财务负担比(D/H)" val={totalSummaries.DH} isWarning={+totalSummaries.DH >= 40} />
              </Col>
              <Col span={12}>
                <Info tip={notes.io.DH} txt={notes.io.dh} />
              </Col>
              <Col span={12}>
                <IndexDisplay txt="财务自由度(B/K)" val={totalSummaries.BK} isWarning={+totalSummaries.BK < 100} />
              </Col>
              <Col span={12}>
                <Info tip={notes.io.BK} txt={notes.io.bk} />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <AdvancedSearchForm
        formItems={ioItems}
        initialValues={values}
        setValue={setValues}
        summaryEntries={Object.entries(summaries)}
      />
    </div>
  );
};

export default Detail;
