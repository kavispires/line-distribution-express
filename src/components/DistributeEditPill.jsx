import React, { useCallback, useState } from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';
import { CATEGORIES, CATEGORIES_ICONS } from '../utils/constants';

// Components
import Icon from './Icon';

function DistributeEditPill() {
  // Global States
  const [activeGroup, setActiveGroup] = useGlobalState('activeGroup');
  const [, setLog] = useGlobalState('log');
  const [activePill, setActivePill] = useGlobalState('activePill');
  // LocalState
  const [originalPillValues] = useState([activePill.memberId, activePill.duration]);

  const handleCancel = useCallback(() => {
    setActivePill(null);
  }, [setActivePill]);

  const handleSave = useCallback(() => {
    setLog((currentLogs) => {
      return currentLogs.map((pill) => {
        if (pill.id === activePill.id) {
          return { ...activePill };
        }

        return pill;
      });
    });

    setActiveGroup((previousState) => {
      if (originalPillValues[0]) {
        previousState.subtractMemberDuration(originalPillValues[0], originalPillValues[1]);
      }
      return previousState.addMemberDuration(activePill.memberId, activePill.duration);
    });

    setActivePill(null);
  }, [activePill, originalPillValues, setLog, setActivePill, setActiveGroup]);

  const handleUpdateCategory = useCallback(
    (event) => {
      setActivePill((currentActivePill) => ({
        ...currentActivePill,
        category: event.target.value,
      }));
    },
    [setActivePill]
  );

  const handleUpdateMember = useCallback(
    (event) => {
      setActivePill((currentActivePill) => ({
        ...currentActivePill,
        memberId: event.target.value,
      }));
    },
    [setActivePill]
  );

  const handleUpdateDuration = useCallback(
    (event) => {
      setActivePill((currentActivePill) => ({
        ...currentActivePill,
        duration: +event.target.value,
      }));
    },
    [setActivePill]
  );

  const member = activeGroup.members[activePill.memberId] || {};

  return (
    <div className="overlay">
      <div className="edit-widget">
        <h3>Edit Pill</h3>
        <div
          className="pill-demo"
          style={getBackgroundColor(member?.color?.hex, member?.color?.hsb[2])}
        >
          <span className="pill-demo__category-icon">
            <Icon type={CATEGORIES_ICONS[activePill.category]} size="30" />
          </span>
          <span className="pill-demo__info">
            <span className="pill-demo__name"> {member?.name ?? '?'} </span>
            <span className="pill-demo__timestamp">({activePill.duration}ms)</span>
          </span>
        </div>

        <label htmlFor="category">Song Part</label>
        <select
          name="category"
          id="category"
          onChange={handleUpdateCategory}
          value={activePill.category}
        >
          {Object.values(CATEGORIES).map((category) => {
            return (
              <option key={category} value={category}>
                {category}
              </option>
            );
          })}
        </select>

        <label htmlFor="member">Member</label>
        <select name="member" id="member" onChange={handleUpdateMember} value={activePill.memberId}>
          <option value="" disabled>
            [Assign member]
          </option>
          {Object.values(activeGroup.members).map((member) => {
            return (
              <option key={`select-${member.id}`} value={member.id}>
                {member.name}
              </option>
            );
          })}
        </select>

        <label htmlFor="member">Duration</label>
        <input type="number" min="0" onChange={handleUpdateDuration} value={activePill.duration} />

        <div className="edit-widget__buttons">
          <button className="edit-widget__button" onClick={handleCancel}>
            Cancel
          </button>
          <button
            className="edit-widget__button"
            onClick={handleSave}
            disabled={!Boolean(activePill.memberId)}
          >
            <Icon type="floppy-disc" inline /> Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default DistributeEditPill;
