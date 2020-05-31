import React from 'react';

import useGlobalState from '../useGlobalState';

// Components
import DistributeCurrentAction from './DistributeCurrentAction';
import DistributeProgressBar from './DistributeProgressBar';
import DistributeBoxes from './DistributeBoxes';
import DistributeLog from './DistributeLog';

function Distribute() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');

  return (
    <main className="content distribute">
      <h1>Distribute - {activeGroup.name}</h1>
      <nav className="distribute-nav">
        <button className="distribute-nav__button">Reset</button>
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
