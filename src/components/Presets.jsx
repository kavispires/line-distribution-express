import React, { useCallback } from 'react';

import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';
import { buildActiveGroup } from '../utils';

function Presets() {
  // Global States
  const [, setScreen] = useGlobalState('screen');
  const [activeGroup, setActiveGroup] = useGlobalState('activeGroup');
  const [presets] = useGlobalState('presets');
  const [customPresets] = useGlobalState('customPresets');
  const [, setLog] = useGlobalState('log');

  const activatePreset = useCallback(
    (event) => {
      const { id } = event.target;
      if (id && id !== activeGroup?.id) {
        setActiveGroup(buildActiveGroup(event.target.id));
        // Reset
        setLog([]);
      }
      setScreen(SCREENS.DISTRIBUTE);
    },
    [activeGroup, setScreen, setActiveGroup, setLog]
  );

  return (
    <main className="content preset">
      <h2>Presets</h2>
      <p>Select the group preset you want to use:</p>
      <ul className="presets-list">
        {presets.map((preset) => {
          return (
            <li key={preset.id} className="preset-item">
              <button className="preset-button" id={preset.id} onClick={activatePreset}>
                {preset.name} ({preset.groupSize} members)
              </button>
            </li>
          );
        })}
      </ul>
      <h3>Custom Presets</h3>

      {customPresets.length > 0 ? (
        <ul className="presets-list">
          {presets.map((preset) => {
            return (
              <li key={preset.id} className="ha">
                {preset.name} ({preset.groupSize})
              </li>
            );
          })}
        </ul>
      ) : (
        <p>You have no custom presets saved on this browser.</p>
      )}
    </main>
  );
}

export default Presets;
