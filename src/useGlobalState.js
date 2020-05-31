import { createGlobalState } from 'react-hooks-global-state';
import _ from 'lodash';

// Database files
import colorsJson from './database/colors.json';

import { buildPresets } from './utils';
import { SCREENS } from './utils/constants';

const initialState = {
  screen: SCREENS.HOME,
  palette: _.sortBy(colorsJson, [(o) => o.hsb[0], (o) => o.hsb[1]]),
  presets: buildPresets(),
  customPresets: [],
  activeGroup: null,
  activeBoxes: {},
  log: [],
};

const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
