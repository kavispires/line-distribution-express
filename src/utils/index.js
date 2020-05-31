import _ from 'lodash';

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

export const buildPresets = (groupsObj, membersObj) => {
  const presetList = Object.entries(groupsObj).map(([groupId, groupData]) => {
    const members = groupData.members.map((memberId) => {
      return { ...membersObj[memberId] };
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
