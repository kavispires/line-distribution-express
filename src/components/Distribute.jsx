import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function Distribute() {
  // Global States
  const [activeGroup] = useGlobalState('activeGroup');
  console.log(activeGroup);

  const NOOP = () => console.log('NOOP');

  const total = Object.values(activeGroup.members).reduce((acc, member) => {
    return acc + member.duration;
  }, 0);

  return (
    <main className="content distribute">
      <h1>Distribute - {activeGroup.name}</h1>
      <nav className="distribute-nav">
        <button className="distribute-nav__button">Reset</button>
        <button className="distribute-nav__button">Results</button>
      </nav>
      <h3 className="current-action">-</h3>
      <ul className="progress-bar">
        {Object.values(activeGroup.members).map((member) => {
          const key = `bar-${member.id}`;
          const percentage = (100 * member.duration) / total;
          return (
            <li
              key={key}
              className="bar"
              style={{
                ...getBackgroundColor(member.color.hex, member.color.hsb[2]),
                width: `${Math.round(percentage)}%`,
              }}
              onClick={NOOP}
            >
              {percentage.toFixed(1)}%
            </li>
          );
        })}
      </ul>
      <ul className="boxes">
        {Object.values(activeGroup.members).map((member) => {
          const key = `box-${member.id}`;
          return (
            <li
              key={key}
              className={`box box--${activeGroup.boxSize}`}
              style={getBackgroundColor(member.color.hex, member.color.hsb[2])}
              onClick={NOOP}
            >
              <span className="box__key">{member.key}</span>
              <span className="box__name">{member.name}</span>
              <span className="box__duration">{member.duration}s</span>
            </li>
          );
        })}
      </ul>
      <ul className="log">[log]</ul>
    </main>
  );
}

export default Distribute;
