import React, { useCallback } from 'react';
import logo from '../images/ld-express-logo.svg';

import useGlobalState from '../useGlobalState';
import { SCREENS } from '../utils/constants';

function Header() {
  const [screen, setScreen] = useGlobalState('screen');

  const goToPresets = useCallback(() => {
    if (screen !== SCREENS.PRESETS) {
      setScreen(SCREENS.PRESETS);
    }
  }, [setScreen, screen]);

  const goToCreate = useCallback(() => {
    if (screen !== SCREENS.CREATE) {
      setScreen(SCREENS.CREATE);
    }
  }, [setScreen, screen]);

  return (
    <header className="header">
      <button className="header__btn" onClick={goToPresets}>
        Presets
      </button>
      <img src={logo} className="header__logo" alt="logo" />
      <button className="header__btn" onClick={goToCreate}>
        Create
      </button>
    </header>
  );
}

export default Header;
