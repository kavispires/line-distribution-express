import React from 'react';
import { render } from '@testing-library/react';
import Presets from '../Presets';

describe('components/Preset', () => {
  test('it renders', () => {
    const component = render(<Presets />);
    expect(component).toMatchSnapshot();
  });

  test('its title is correct', () => {
    const { getByTestId } = render(<Presets />);

    expect(getByTestId('presets-title')).toHaveTextContent('Presets');
  });

  test('its presets buttons are correct', () => {
    const { getByTestId } = render(<Presets />);
    console.log(getByTestId('presets-list'));
    expect(getByTestId('presets-list').child).toBe('Presets');
  });
});
