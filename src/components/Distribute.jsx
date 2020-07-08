import React, { useCallback, useState } from 'react';

import useGlobalState from '../useGlobalState';
import { buildActiveGroup } from '../utils';

// Components
import DistributeCurrentAction from './DistributeCurrentAction';
import DistributeProgressBar from './DistributeProgressBar';
import DistributeBoxes from './DistributeBoxes';
import DistributeLog from './DistributeLog';
import DistributeEditPill from './DistributeEditPill';
import DistributeResults from './DistributeResults';
import Icon from './Icon';

function Distribute() {
  // Global States
  const [activeGroup, setActiveGroup] = useGlobalState('activeGroup');
  const [log, setLog] = useGlobalState('log');
  const [activePill] = useGlobalState('activePill');
  // Local States
  const [isResultsActive, setIsResultsActive] = useState(false);

  const handleActivateResults = useCallback(() => {
    console.log('UES!');
    setIsResultsActive(!isResultsActive);
  }, [isResultsActive, setIsResultsActive]);

  const handleReset = useCallback(() => {
    setLog([]);
    setActiveGroup((previousActiveGroup) => buildActiveGroup(previousActiveGroup.id));
  }, [setLog, setActiveGroup]);

  return (
    <main className="content distribute">
      <h1>Distribute - {activeGroup.name}</h1>
      <nav className="distribute-nav">
        <button className="distribute-nav__button" onClick={handleReset}>
          <Icon type="refresh" inline /> Reset
        </button>
        <button
          className="distribute-nav__button"
          onClick={handleActivateResults}
          disabled={!Boolean(activeGroup) || !Boolean(log.length)}
        >
          <Icon type="pie-chart" inline /> Results
        </button>
      </nav>
      <DistributeCurrentAction />
      <DistributeProgressBar />
      <DistributeBoxes />
      <DistributeLog />
      {Boolean(activePill) && <DistributeEditPill />}
      {isResultsActive && <DistributeResults activateResults={handleActivateResults} />}
    </main>
  );
}

export default Distribute;
