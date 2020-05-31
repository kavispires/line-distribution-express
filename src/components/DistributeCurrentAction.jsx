import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function DistributeCurrentAction() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');

  return <h3 className="current-action">-</h3>;
}

export default DistributeCurrentAction;
