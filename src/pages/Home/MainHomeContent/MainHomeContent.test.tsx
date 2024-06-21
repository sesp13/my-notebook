import { render, screen, waitFor } from '@testing-library/react';

import { MainHomeContent } from './MainHomeContent';
import { customNotes } from '../../../tests';
import { useNoteService } from '../../../hooks/NoteService';

const getLatestNotesMock = jest.fn();

jest.mock('../../../hooks/NoteService');
const mockedHook = jest.mocked(useNoteService);
mockedHook.mockReturnValue({
  ...jest.requireActual('../../../hooks/NoteService'),
  getLatestNotes: getLatestNotesMock,
});
getLatestNotesMock.mockReturnValue([]);

const setupComponent = async () =>
  await waitFor(() => render(<MainHomeContent />));

describe('Tests on MainHomeContent', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should render the component correctly', async () => {
    await setupComponent();
  });

  test('should call getLatestNotes from useNoteService', async () => {
    await setupComponent();
    expect(getLatestNotesMock).toHaveBeenCalled();
  });

  test('should render HomeNote items', async () => {
    getLatestNotesMock.mockReturnValue(customNotes);
    await setupComponent();
    const renderedNotes = screen.getAllByLabelText('home-note');
    expect(renderedNotes.length).toBe(customNotes.length)
  });
});
