import { BrowserRouter, useSearchParams } from 'react-router-dom';
import { screen, waitFor } from '@testing-library/dom';

import { SearchPage } from './SearchPage';
import { render } from '@testing-library/react';
import { useNoteService } from '../../hooks/NoteService';

const mainSearchTerm = 'My query';

const searchNoteMock = jest.fn();

jest.mock('../../hooks/NoteService.ts');
const mockedUseNoteService = jest.mocked(useNoteService);
mockedUseNoteService.mockReturnValue({
  ...jest.requireActual('../../hooks/NoteService'),
  searchNote: searchNoteMock,
});
searchNoteMock.mockReturnValue([]);

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
  useSearchParams: () => [
    {
      get: (_: string) => {
        return mainSearchTerm;
      },
    },
  ],
}));

const setupComponent = async () =>
  await waitFor(() =>
    render(
      <BrowserRouter>
        <SearchPage />
      </BrowserRouter>
    )
  );

describe('tests on <SearchPage />', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the component correctly', async () => {
    await setupComponent();
  });

  test('should read the query param', async () => {
    await setupComponent();
    expect(screen.getByText(mainSearchTerm)).toBeTruthy();
  });
});
