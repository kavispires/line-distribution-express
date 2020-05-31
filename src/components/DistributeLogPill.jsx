import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function DistributeLogPill({ pill }) {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  const [log, setLog] = useGlobalState('log');

  const member = activeGroup.members[pill.memberId];

  return (
    <li className="pill" style={getBackgroundColor(member.color.hex, member.color.hsb[2])}>
      <button className="pill_icon-button">D</button>
      <button className="pill_icon-button">E</button>
      <span className="pill__label">
        {member.name} <span className="pill__timestamp">({pill.duration}ms)</span>
      </span>
      <button className="pill_icon-button">T</button>
    </li>
  );
}

export default DistributeLogPill;
