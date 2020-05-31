import _ from 'lodash';

// Database files
import colorsJson from '../database/colors.json';
import groupsJson from '../database/groups.json';
import membersJson from '../database/members.json';

// Classes
import { Group } from './classes';

export const getBackgroundColor = (hex = '#b5b59e', luminance = 100) => {
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

export const buildActiveGroup = (groupId) => {
  const group = groupsJson[groupId];

  const newGroup = new Group(groupId, group.name, group.members);

  newGroup.setMembers(membersJson, colorsJson);

  return newGroup;
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
