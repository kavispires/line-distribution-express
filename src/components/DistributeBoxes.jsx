import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function DistributeBoxes() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');

  // Add BoxClick functionality

  // Add KeyPress functionality

  const NOOP = () => console.log('NOOP');

  return (
    <ul className="boxes">
      {Object.values(activeGroup.members).map((member) => {
        const key = `box-${member.id}`;
        return (
          <li
            key={key}
            className={`box box--${activeGroup.boxSize}`}
            style={getBackgroundColor(member.color.hex, member.color.hsb[2])}
            onClick={NOOP}
          >
            <span className="box__key">{member.key}</span>
            <span className="box__name">{member.name}</span>
            <span className="box__duration">{member.duration}s</span>
          </li>
        );
      })}
    </ul>
  );
}

export default DistributeBoxes;
