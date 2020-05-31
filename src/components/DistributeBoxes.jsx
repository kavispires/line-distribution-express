import React, { useCallback, useEffect, useState } from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';
import { Pill } from '../utils/classes';

function DistributeBoxes() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  const [activeBoxes, setActiveBoxes] = useGlobalState('activeBoxes');
  const [, setLog] = useGlobalState('log');
  // Local States
  const [activeKeys, setActiveKeys] = useState({});

  const activateBox = useCallback(
    (memberId) => {
      setActiveBoxes((s) => ({ ...s, [memberId]: Date.now() }));
    },
    [setActiveBoxes]
  );

  const deactivateBox = useCallback(
    (memberId) => {
      const previousTimeStamp = activeBoxes[memberId];

      const duration = Date.now() - previousTimeStamp;

      setLog((pills) => [...pills, new Pill(memberId, duration)]);

      setActiveBoxes((s) => {
        const previousState = { ...s };
        delete previousState[memberId];
        return previousState;
      });
    },
    [setActiveBoxes, activeBoxes, setLog]
  );

  // Add BoxClick functionality
  const handleBoxClick = useCallback(
    (event) => {
      const id = event.target.id || event.target.parentNode.id;
      if (event.type === 'mousedown') {
        activateBox(id);
      } else {
        deactivateBox(id);
      }
    },
    [activateBox, deactivateBox]
  );

  // Add KeyPress functionality
  const handleKeyDown = useCallback(
    ({ key }) => {
      const memberId = activeGroup.getMemberIdByKey(key);

      if (memberId && activeKeys[key] === undefined) {
        setActiveKeys((s) => ({ ...s, [key]: true }));
        activateBox(memberId);
      }
    },
    [activeKeys, activeGroup, activateBox]
  );

  const handleKeyUp = useCallback(
    ({ key }) => {
      const memberId = activeGroup.getMemberIdByKey(key);

      if (memberId && activeKeys[key]) {
        setActiveKeys((s) => {
          const previousActiveKeys = { ...s };
          delete previousActiveKeys[key];
          return previousActiveKeys;
        });
        deactivateBox(memberId);
      }
    },
    [activeKeys, setActiveKeys, activeGroup, deactivateBox]
  );

  // Add Event Listeners on mount
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  });

  return (
    <ul className="boxes">
      {Object.values(activeGroup.members).map((member) => {
        const key = `box-${member.id}`;
        return (
          <li
            key={key}
            id={`box-id-${member.id}`}
            className={`box box--${activeGroup.boxSize}`}
            style={getBackgroundColor(member.color.hex, member.color.hsb[2])}
            onMouseDown={handleBoxClick}
            onMouseUp={handleBoxClick}
          >
            <span className="box__key">{member.key}</span>
            <span className="box__name">{member.name}</span>
            <span className="box__duration">{member.durationInSeconds}s</span>
          </li>
        );
      })}
    </ul>
  );
}

export default DistributeBoxes;
