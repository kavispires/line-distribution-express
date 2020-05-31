import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function DistributeProgressBar() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');

  return (
    <ul className="progress-bar">
      {Object.values(activeGroup.members).map((member) => {
        const key = `bar-${member.id}`;
        const percentage = activeGroup.getMemberPercentage(member.id);
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
            {percentage > 5 ? `${percentage}%` : ''}
          </li>
        );
      })}
    </ul>
  );
}

export default DistributeProgressBar;
