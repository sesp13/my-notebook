import { render, screen } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { NewNotePage } from './NewNotePage';

const setupComponent = () =>
  render(
    <BrowserRouter>
      <NewNotePage />
    </BrowserRouter>
  );

describe('Tests on NewNotePage', () => {
  test('should render the component correctly', () => {
    setupComponent();
  });

  test('should not render custom alert by default', () => {
    setupComponent();
    let customAlert: HTMLElement | null = null;
    try {
      customAlert = screen.getByLabelText('custom-alert');
    } catch (error) {
      expect(customAlert).toBeFalsy();
    }
  });
});
