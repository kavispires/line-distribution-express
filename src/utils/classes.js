import { generatePillId } from './index';

export class Pill {
  constructor(memberId, duration, category = 'LINE', clonedFrom = null) {
    this.id = generatePillId();
    this.memberId = memberId;
    this.duration = duration;
    this.category = category;
    this.clonedFrom = clonedFrom;
  }
}
