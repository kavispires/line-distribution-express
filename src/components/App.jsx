import React from 'react';

import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';

import Header from './Header';
import Home from './Home';
import Create from './Create';
import Presets from './Presets';
import Distribute from './Distribute';

const ScreenComponents = {
  [SCREENS.CREATE]: <Create />,
  [SCREENS.DISTRIBUTE]: <Distribute />,
  [SCREENS.HOME]: <Home />,
  [SCREENS.PRESETS]: <Presets />,
};

function App() {
  // Global States
  const [screen] = useGlobalState('screen');

  return (
    <div className="container">
      <Header />
      {ScreenComponents[screen]}
    </div>
  );
}

export default App;
