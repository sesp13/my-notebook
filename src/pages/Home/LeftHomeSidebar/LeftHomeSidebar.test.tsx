import { screen, waitFor } from '@testing-library/dom';

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

const setupComponent = async () =>
  await waitFor(() => render(<LeftHomeSidebar />));

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

  test('should render LeftHomeNoteComponent items', async() => {
    getAllNotesMock.mockReturnValue(customNotes);
    await setupComponent();
    const renderedNotes = screen.getAllByLabelText('left-note');
    expect(renderedNotes.length).toBe(customNotes.length);
  });
});
