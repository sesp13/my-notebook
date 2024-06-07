import { render, screen, waitFor } from '@testing-library/react';

import { MainHomeContent } from './MainHomeContent';
import { customNotes } from '../../../tests';
import { useNoteService } from '../../../hooks/NoteService';

const getAllNotesMock = jest.fn();

jest.mock('../../../hooks/NoteService');
const mockedHook = jest.mocked(useNoteService);
mockedHook.mockReturnValue({
  getAllNotes: getAllNotesMock,
  saveNote: jest.fn(),
});
getAllNotesMock.mockReturnValue([]);

const setupComponent = async () =>
  await waitFor(() => render(<MainHomeContent />));

describe('Tests on MainHomeContent', () => {
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

  test('should render HomeNote items', async () => {
    getAllNotesMock.mockReturnValue(customNotes);
    await setupComponent();
    const renderedNotes = screen.getAllByLabelText('home-note');
    expect(renderedNotes.length).toBe(customNotes.length)
  });
});
