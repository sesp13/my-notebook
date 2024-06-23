import { fireEvent, screen, waitFor } from '@testing-library/dom';

import { AppRouting } from '../../../routes';
import { BrowserRouter } from 'react-router-dom';
import { LeftHomeSidebar } from './LeftHomeSidebar';
import { customNotes } from '../../../tests';
import { render } from '@testing-library/react';
import { useNoteService } from '../../../hooks/NoteService';

const getAllNotesMock = jest.fn();

jest.mock('../../../hooks/NoteService.ts');
const mockedUseNoteService = jest.mocked(useNoteService);
mockedUseNoteService.mockReturnValue({
  ...jest.requireActual('../../../hooks/NoteService'),
  getAllNotes: getAllNotesMock,
});
getAllNotesMock.mockReturnValue([]);

const mockedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedNavigate,
}));

const setupComponent = async () =>
  await waitFor(() =>
    render(
      <BrowserRouter>
        <LeftHomeSidebar />
      </BrowserRouter>
    )
  );

describe('Tests on LeftHomeSidebar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the component correctly', async () => {
    await setupComponent();
  });

  test('should call getAllNotes from useNoteService', async () => {
    await setupComponent();
    expect(getAllNotesMock).toHaveBeenCalled();
  });

  test('should render LeftHomeNoteComponent items', async () => {
    getAllNotesMock.mockReturnValue(customNotes);
    await setupComponent();
    const renderedNotes = screen.getAllByLabelText('left-note');
    expect(renderedNotes.length).toBe(customNotes.length);
  });

  test('search button should redirect into Search Page', async () => {
    const searchParam = 'My new note';
    await setupComponent();

    const searchInput = screen.getByLabelText('search-input');
    fireEvent.change(searchInput, { target: { value: searchParam } });
    const searchBtn = screen.getByLabelText('search-btn');
    fireEvent.click(searchBtn);
    expect(mockedNavigate).toHaveBeenCalledWith(
      `${AppRouting.SEARCH}?query=${searchParam}`
    );
  });
});
