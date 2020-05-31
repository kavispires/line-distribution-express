import React from 'react';

import useGlobalState from '../useGlobalState';

// Components
import DistributeCurrentAction from './DistributeCurrentAction';
import DistributeProgressBar from './DistributeProgressBar';
import DistributeBoxes from './DistributeBoxes';

function Distribute() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  console.log(activeGroup);

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
      <ul className="log">[log]</ul>
    </main>
  );
}

export default Distribute;
