import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { HomePage } from './HomePage';

const setupComponent = () =>
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>
  );

describe('Tests on HomePage', () => {
  test('should render the component', () => {
    setupComponent();
    expect(screen.getByLabelText('home-page')).toBeTruthy();
  });

  test('should render LeftHomeSidebar component', () => {
    setupComponent();
    expect(screen.getByLabelText('left-home-sidebar')).toBeTruthy();
  });

  test('should render LeftHomeSidebar component', () => {
    setupComponent();
    expect(screen.getByLabelText('main-home-component')).toBeTruthy();
  });
});
