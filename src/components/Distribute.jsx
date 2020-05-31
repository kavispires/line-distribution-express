import React, { useCallback } from 'react';

import useGlobalState from '../useGlobalState';

// Components
import DistributeCurrentAction from './DistributeCurrentAction';
import DistributeProgressBar from './DistributeProgressBar';
import DistributeBoxes from './DistributeBoxes';
import DistributeLog from './DistributeLog';
import { buildActiveGroup } from '../utils';

function Distribute() {
  // Global States
  const [activeGroup, setActiveGroup] = useGlobalState('activeGroup');
  const [, setLog] = useGlobalState('log');
  const [, setDistributionTotal] = useGlobalState('distributionTotal');

  const handleReset = useCallback(() => {
    setLog([]);
    setDistributionTotal(0);
    setActiveGroup((actvG) => buildActiveGroup(actvG.id));
  }, [setLog, setDistributionTotal, setActiveGroup]);

  return (
    <main className="content distribute">
      <h1>Distribute - {activeGroup.name}</h1>
      <nav className="distribute-nav">
        <button className="distribute-nav__button" onClick={handleReset}>
          Reset
        </button>
        <button className="distribute-nav__button">Results</button>
      </nav>
      <DistributeCurrentAction />
      <DistributeProgressBar />
      <DistributeBoxes />
      <DistributeLog />
    </main>
  );
}

export default Distribute;
