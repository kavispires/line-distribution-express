import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function DistributeProgressBar() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  const [distributionTotal] = useGlobalState('distributionTotal');

  return (
    <ul className="progress-bar">
      {Object.values(activeGroup.members).map((member) => {
        const key = `bar-${member.id}`;
        const percentage = member.duration > 0 ? (100 * member.duration) / distributionTotal : 0;
        return (
          <li
            key={key}
            className="bar"
            style={{
              ...getBackgroundColor(member.color.hex, member.color.hsb[2]),
              width: `${Math.round(percentage)}%`,
              transition: 'width 0.5s',
            }}
          >
            {percentage > 5 ? `${percentage.toFixed(1)}%` : ''}
          </li>
        );
      })}
    </ul>
  );
}

export default DistributeProgressBar;
