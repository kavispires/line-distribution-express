import React, { useEffect } from 'react';

import useGlobalState from '../useGlobalState';

// Components
import DistributeLogPill from './DistributeLogPill';

function DistributeLog() {
  // Global States
  const [, setActiveGroup] = useGlobalState('activeGroup');
  const [log] = useGlobalState('log');
  const [, setDistributionTotal] = useGlobalState('distributionTotal');

  // Calculate members durations whenever log changes
  useEffect(() => {
    const latestPill = log[log.length - 1] ?? {};

    const { duration = 0, memberId } = latestPill;

    if (memberId) {
      setActiveGroup((activeG) => ({
        ...activeG,
        members: {
          ...activeG.members,
          [memberId]: {
            ...activeG.members[memberId],
            duration: activeG.members[memberId].duration + duration,
          },
        },
      }));

      // Add to total
      setDistributionTotal((s) => s + duration);
    }
  }, [log, setActiveGroup, setDistributionTotal]);

  return (
    <ul className="log">
      {log.map((pill) => (
        <DistributeLogPill pill={pill} key={pill.id} />
      ))}
    </ul>
  );
}

export default DistributeLog;
