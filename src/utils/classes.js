import _ from 'lodash';

// Constants
import { KEYS, CATEGORIES } from './constants';
import { generatePillId } from './index';

export class Pill {
  constructor(memberId, duration, category = CATEGORIES.LINE, clonedFrom = null) {
    this.id = generatePillId();
    this.memberId = memberId;
    this.duration = duration;
    this.category = category;
    this.clonedFrom = clonedFrom;
  }
}

export class Member {
  constructor(id, name, key, color) {
    this.id = id;
    this.name = name;
    this.key = key;
    this.color = color;
    this.duration = 0;
  }

  get durationInSeconds() {
    return Number(Number(this.duration / 1000).toFixed(1));
  }

  addDuration(duration) {
    this.duration += duration;
  }

  subtractDuration(duration) {
    this.duration -= duration;
  }

  resetDuration() {
    this.duration = 0;
  }
}

export class Group {
  constructor(id, name, memberIds) {
    this.id = id;
    this.name = name;
    this.memberIds = memberIds;
    this.members = {};

    this._keyMemberDict = {};
    this._total = 0;
  }

  get total() {
    return this._total;
  }

  get max() {
    return Object.values(this.members).reduce((acc, member) => {
      if (acc < member.duration) return member.duration;
      return acc;
    }, 0);
  }

  get groupSize() {
    return Object.keys(this.members).length || this.memberdIds.length || 5;
  }

  get boxSize() {
    if (this.groupSize <= 5) return this.groupSize;
    if (this.groupSize <= 7) return 3;
    if (this.groupSize <= 8) return 4;
    if (this.groupSize <= 10) return 5;
    if (this.groupSize <= 12) return 4;
    if (this.groupSize <= 15) return 1;
    if (this.groupSize <= 16) return 4;
    return 5;
  }

  setMembers(membersDB, colorsDB) {
    this.members = this.memberIds.reduce((acc, memberId, index) => {
      const member = membersDB[memberId];
      const color = _.find(colorsDB, (o) => o.name === member.color);

      acc[memberId] = new Member(memberId, member.name, KEYS[index], color);

      return acc;
    }, {});

    this._keyMemberDict = Object.values(this.members).reduce((acc, member) => {
      acc[member.key] = member.id;
      return acc;
    }, {});

    return this;
  }

  getMemberIdByKey(key) {
    return this._keyMemberDict[key];
  }

  getMemberPercentage(memberId) {
    const member = this.members[memberId];
    const percentage = member.duration > 0 ? (100 * member.duration) / this.total : 0;
    return Number(percentage.toFixed(1));
  }

  getMemberRelativePercentage(memberId) {
    const member = this.members[memberId];
    const percentage = member.duration > 0 ? (100 * member.duration) / this.max : 0;
    return Math.round(percentage);
  }

  getMembersRanked() {
    return Object.values(this.members).sort((a, b) => b.duration - a.duration);
  }

  addMemberDuration(memberId, duration) {
    this._total += duration;

    this.members[memberId].addDuration(duration);
    return this;
  }

  subtractMemberDuration(memberId, duration) {
    console.log('==BEFORE==');
    console.log(this.members[memberId].duration);
    console.log('total', this._total);
    console.log(JSON.parse(JSON.stringify(this)));

    this._total -= duration;

    this.members[memberId].subtractDuration(duration);

    console.log('==AFTER==');
    console.log(this.members[memberId].duration);
    console.log('total', this._total);
    console.log(JSON.parse(JSON.stringify(this)));
    return this;
  }

  resetMemberDuration(memberId) {
    this._total -= this.members[memberId].duration;

    this.members[memberId].resetDuration();
    return this;
  }
}
