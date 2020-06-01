import React from 'react';

import useGlobalState from '../useGlobalState';
import { getBackgroundColor } from '../utils';

function CreateColorPalette() {
  // Global States
  const [palette] = useGlobalState('palette');

  return (
    <main className="content create">
      <h3>Color Palette</h3>
      <ul className="color-palette">
        {palette.map((color) => {
          return (
            <li
              className="color"
              key={color.name}
              style={getBackgroundColor(color.hex, color.hsb[2])}
            >
              <span className="color__name">{color.name}</span>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default CreateColorPalette;
