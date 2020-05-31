import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function DistributeProgressBar() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');

  const total = Object.values(activeGroup.members).reduce((acc, member) => {
    return acc + member.duration;
  }, 0);

  return (
    <ul className="progress-bar">
      {Object.values(activeGroup.members).map((member) => {
        const key = `bar-${member.id}`;
        const percentage = (100 * member.duration) / total;
        return (
          <li
            key={key}
            className="bar"
            style={{
              ...getBackgroundColor(member.color.hex, member.color.hsb[2]),
              width: `${Math.round(percentage)}%`,
            }}
          >
            {percentage.toFixed(1)}%
          </li>
        );
      })}
    </ul>
  );
}

export default DistributeProgressBar;
