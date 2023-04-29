import type { ColProps } from 'antd/es/col';
import type { FC } from 'react';

interface ColCardProps {
  metaName: string;
  metaCount: string;
  body: React.ReactNode;
  footer: React.ReactNode;
  loading: boolean;
}

interface TrendProps {
  wow: string;
  dod: string;
  style?: React.CSSProperties;
}

const Overview: FC<{ loading: boolean }> = ({ loading }) => {
  return 'hi';
};

export default Overview;
