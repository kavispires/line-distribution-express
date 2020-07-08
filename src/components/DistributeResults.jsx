import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

// Components
import Icon from './Icon';

function DistributeResults({ activateResults }) {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');

  return (
    <div className="overlay">
      <div className="distribute-results">
        <h1>
          <Icon type="pie-chart" inline /> Raking
        </h1>
        <ul className="ranking">
          {activeGroup.getMembersRanked().map((member, index) => {
            const position = index + 1;
            return (
              <li className="ranking__item" key={`rank-member-${member.id}`}>
                <span className="position">{position}</span>
                <div className="rank-bar">
                  <span
                    className="rank-bar__color-bar"
                    style={{
                      ...getBackgroundColor(member.color.hex, member.color.hsb[2]),
                      width: `${Math.round(activeGroup.getMemberRelativePercentage(member.id))}%`,
                      transition: 'width 0.5s',
                    }}
                  />
                  <span className="rank-bar__info">
                    {member.name}{' '}
                    <span className="rank-bar__numbers">
                      {activeGroup.getMemberPercentage(member.id)}% ({member.durationInSeconds}s)
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="action-items">
          <button className="action-items__button" onClick={activateResults}>
            Cancel
          </button>
        </ul>
      </div>
    </div>
  );
}

export default DistributeResults;
