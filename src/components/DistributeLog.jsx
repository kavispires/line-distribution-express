import React, { useEffect } from 'react';

import useGlobalState from '../useGlobalState';

// Components
import DistributeLogPill from './DistributeLogPill';

function DistributeLog() {
  // Global States
  const [, setActiveGroup] = useGlobalState('activeGroup');
  const [log] = useGlobalState('log');

  // Calculate members durations whenever log changes
  useEffect(() => {
    const latestPill = log[log.length - 1] ?? {};

    const { duration = 0, memberId } = latestPill;

    if (memberId) {
      setActiveGroup((previousState) => previousState.addMemberDuration(memberId, duration));
    }
  }, [log, setActiveGroup]);

  return (
    <ul className="log">
      {[...log].reverse().map((pill) => (
        <DistributeLogPill pill={pill} key={pill.id} />
      ))}
    </ul>
  );
}

export default DistributeLog;
