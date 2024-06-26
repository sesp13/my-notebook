import { screen, waitFor } from '@testing-library/dom';

import { BrowserRouter } from 'react-router-dom';
import { SearchPage } from './SearchPage';
import { customNotes } from '../../tests';
import { render } from '@testing-library/react';
import { useNoteService } from '../../hooks/NoteService';

const mainSearchTerm = 'My query';
const paramState = { hasQuery: true };

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
        return paramState.hasQuery ? mainSearchTerm : null;
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
    paramState.hasQuery = true;
  });

  test('should render the component correctly', async () => {
    await setupComponent();
  });

  test('should read the query param', async () => {
    await setupComponent();
    expect(screen.getByText(mainSearchTerm)).toBeTruthy();
  });

  test('should render the search results', async () => {
    searchNoteMock.mockReturnValue(customNotes);
    await setupComponent();

    expect(screen.getAllByLabelText('home-note').length).toEqual(
      customNotes.length
    );
  });

  test('should show error page when no query is rendered', async () => {
    paramState.hasQuery = false;
    await setupComponent();

    expect(screen.getByLabelText('return-to-main-btn')).toBeTruthy();
    expect(screen.getByText('Error: Invalid Query')).toBeTruthy();
  });
});
