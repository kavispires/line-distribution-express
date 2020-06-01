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
  const [, setLog] = useGlobalState('log');
  const [, setActivePill] = useGlobalState('activePill');

  const handleEditPill = useCallback(() => {
    setActivePill(pill);
  }, [pill, setActivePill]);

  const handleDuplicatePill = useCallback(
    (event) => {
      const duplicatedPill = new Pill('', pill.duration, pill.category, pill.id);
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

  return (
    <li
      className={`pill ${copiedPillClassModifier}`}
      style={getBackgroundColor(member?.color?.hex, member?.color?.hsb[2])}
    >
      <span className="pill__icon pill__icon--category">
        <Icon type="default" />
      </span>

      {member?.name ? (
        <span className="pill__label">
          {member?.name ?? '[Assign]'} <span className="pill__timestamp">({pill.duration}ms)</span>
        </span>
      ) : (
        <span className="pill__label">
          <button className="pill__assign-button" onClick={handleEditPill}>
            [Assign]
          </button>
          <span className="pill__timestamp">({pill.duration}ms)</span>
        </span>
      )}

      <button className="pill__icon pill__icon--button" onClick={handleEditPill}>
        <Icon type="pencil" iconButton />
      </button>
      <button className="pill__icon pill__icon--button" onClick={handleDuplicatePill}>
        <Icon type="duplicate" iconButton />
      </button>
      <button className="pill__icon pill__icon--button" onClick={handleDeletePill}>
        <Icon type="trash" iconButton />
      </button>
    </li>
  );
}

export default DistributeLogPill;
