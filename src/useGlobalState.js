import { createGlobalState } from 'react-hooks-global-state';
import _ from 'lodash';

import COLORS from './database/colors.json';
import { SCREENS } from './utils/constants';

const initialState = {
  screen: SCREENS.HOME,
  palette: _.sortBy(COLORS, [(o) => o.hsb[0], (o) => o.hsb[1]]),
};

const { useGlobalState } = createGlobalState(initialState);

export default useGlobalState;
