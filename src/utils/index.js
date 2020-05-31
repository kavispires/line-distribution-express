import _ from 'lodash';

// Database files
import colorsJson from '../database/colors.json';
import groupsJson from '../database/groups.json';
import membersJson from '../database/members.json';

// Constants
import { KEYS } from './constants';

export const getBackgroundColor = (hex = '#585818', luminance = 100) => {
  return {
    backgroundColor: hex,
    color: luminance > 55 ? '#000000' : '#FFFFFF',
  };
};

export const getForegroundColor = (hex = '#585818') => {
  return {
    color: hex,
  };
};

export const buildPresets = () => {
  const presetList = Object.entries(groupsJson).map(([groupId, groupData]) => {
    const members = groupData.members.map((memberId) => {
      return { ...membersJson[memberId] };
    });

    return {
      id: groupId,
      name: groupData.name,
      groupSize: members.length,
      members,
    };
  });

  return _.sortBy(presetList, [(o) => o.name]);
};

export const buildKeyMemberDict = (activeGroup) => {
  return Object.values(activeGroup.members).reduce((acc, member) => {
    acc[member.key] = member.id;
    return acc;
  }, {});
};

const getBoxSize = (groupSize) => {
  if (groupSize <= 5) return groupSize;
  if (groupSize <= 7) return 3;
  if (groupSize <= 8) return 4;
  if (groupSize <= 10) return 5;
  if (groupSize <= 12) return 4;
  if (groupSize <= 15) return 1;
  if (groupSize <= 16) return 4;
  return 5;
};

export const buildActiveGroup = (groupId) => {
  const group = groupsJson[groupId];
  const groupSize = group.members.length;

  const members = group.members.reduce((acc, memberId, index) => {
    const member = membersJson[memberId];

    const color = _.find(colorsJson, (o) => o.name === member.color);

    acc[memberId] = {
      ...member,
      color,
      id: memberId,
      key: KEYS[index],
      duration: 0,
    };

    return acc;
  }, {});

  return {
    id: groupId,
    ...group,
    members,
    groupSize,
    boxSize: getBoxSize(groupSize),
  };
};

export const extractMemberIdFromBox = (boxId) => {
  const prefix = 'box-id-';
  return boxId.substring(prefix.length);
};

export const generatePillId = (() => {
  let lastNum = 0;

  return () => {
    lastNum++;
    return `p${lastNum}`;
  };
})();

export const updateMemberDuration = (group, memberId, value) => ({
  ...group,
  members: {
    ...group.members,
    [memberId]: {
      ...group.members[memberId],
      duration: group.members[memberId].duration + value,
    },
  },
});
