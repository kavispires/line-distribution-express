import React, { useCallback } from 'react';
import _ from 'lodash';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';
import { Pill } from '../utils/classes';

// Components
import Icon from './Icon';

function DistributeLogPill({ pill }) {
  // Global States
  const [activeGroup, setActiveGroup] = useGlobalState('activeGroup');
  const [log, setLog] = useGlobalState('log');

  const handleEditPill = useCallback(() => {
    console.log('EDIT', pill.id);
  }, [pill.id]);

  const handleDuplicatePill = useCallback(
    (event) => {
      const duplicatedPill = new Pill(null, pill.duration, pill.category, pill.id);
      setLog((ps) => [...ps, duplicatedPill]);
    },
    [pill, setLog]
  );

  const handleDeletePill = useCallback(() => {
    // Remove duration from member
    setActiveGroup((previousState) =>
      previousState.subtractMemberDuration(pill.memberId, pill.duration)
    );

    setLog((ps) => _.remove([...ps], (n) => n.id !== pill.id));
  }, [setLog, pill, setActiveGroup]);

  const member = activeGroup.members[pill.memberId];

  const copiedPillClassModifier = Boolean(pill.cloneFrom) ? 'pill--copy' : '';

  console.log(activeGroup);

  return (
    <li
      className={`pill ${copiedPillClassModifier}`}
      style={getBackgroundColor(member?.color?.hex, member?.color?.hsb[2])}
    >
      <button className="pill__icon-button" onClick={handleEditPill}>
        <Icon type="pencil" iconButton />
      </button>
      <button className="pill__icon-button" onClick={handleDuplicatePill}>
        <Icon type="duplicate" iconButton />
      </button>
      <span className="pill__label">
        {member?.name ?? '[Assign]'} <span className="pill__timestamp">({pill.duration}ms)</span>
      </span>
      <button className="pill__icon-button" onClick={handleDeletePill}>
        <Icon type="trash" iconButton />
      </button>
    </li>
  );
}

export default DistributeLogPill;
