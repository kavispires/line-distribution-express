import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

// Components
import Icon from './Icon';

function DistributeLogPill({ pill }) {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  const [log, setLog] = useGlobalState('log');

  const member = activeGroup.members[pill.memberId];

  return (
    <li className="pill" style={getBackgroundColor(member.color.hex, member.color.hsb[2])}>
      <button className="pill__icon-button">
        <Icon type="pencil" iconButton />
      </button>
      <button className="pill__icon-button">
        <Icon type="duplicate" iconButton />
      </button>
      <span className="pill__label">
        {member.name} <span className="pill__timestamp">({pill.duration}ms)</span>
      </span>
      <button className="pill__icon-button">
        <Icon type="trash" iconButton />
      </button>
    </li>
  );
}

export default DistributeLogPill;
