import { INewNote, INote } from '../models';

const API_URL = 'http://localhost:3000/notes';

export const useNoteService = () => {
  const getAllNotes = async (): Promise<INote[]> => {
    const url = `${API_URL}`;
    const res = await fetch(url);
    return await res.json();
  };

  const saveNote = async (payload: INewNote): Promise<INote | null> => {
    try {
      const url = API_URL;
      const res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      return await res.json();
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return {
    getAllNotes,
    saveNote,
  };
};
