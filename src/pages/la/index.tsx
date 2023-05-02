import type { FC } from 'react';

import { BusinessTable } from '../io/BusinessTable';

const La: FC = () => {
  return (
    <div>
      <BusinessTable isIO={false} />
    </div>
  );
};

export default La;
