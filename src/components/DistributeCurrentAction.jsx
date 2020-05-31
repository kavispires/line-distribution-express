import React from 'react';

import useGlobalState from '../useGlobalState';
import { extractMemberIdFromBox } from '../utils';

const buildSentence = (activeBoxes, membersObj) => {
  const { length } = activeBoxes;

  if (length === 0) return '-';

  const members = activeBoxes
    .map((boxId) => {
      const memberId = boxId.startsWith('box-') ? extractMemberIdFromBox(boxId) : boxId;
      return membersObj[memberId]?.name ?? 'Unknown';
    })
    .sort();

  if (length === 1) {
    return `${members[0]} is singing.`;
  }

  return `${members.join(', ')} are singing`;
};

function DistributeCurrentAction() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  const [activeBoxes] = useGlobalState('activeBoxes');

  return (
    <h3 className="current-action">
      {buildSentence(Object.keys(activeBoxes), activeGroup.members)}
    </h3>
  );
}

export default DistributeCurrentAction;
