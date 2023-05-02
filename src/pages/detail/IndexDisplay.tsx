import { InfoCircleOutlined } from '@ant-design/icons';
import { Tooltip } from 'antd';

export function IndexDisplay({
  val,
  txt,
  isWarning = false,
}: {
  val: string | number;
  txt: string;
  isWarning: boolean;
}) {
  return (
    <div
      style={{
        ...style,
        color: isWarning ? '#f00' : '',
      }}
    >
      {txt}: {val}%
    </div>
  );
}

export const style: React.CSSProperties = { padding: '8px 0' };

export function Info({ tip, txt }: { tip: string; txt: string }) {
  return (
    <div
      style={{
        ...style,
      }}
    >
      <Tooltip title={tip}>
        <span style={{ paddingRight: 4 }}>{txt}</span>
        <InfoCircleOutlined />
      </Tooltip>
    </div>
  );
}
