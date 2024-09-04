import { useEffect, useState } from 'react';

import { HomeNoteComponent } from './HomeNoteComponent';
import { INote } from '../../../models';
import { useNoteService } from '../../../hooks';

export const MainHomeContent = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const { getLatestNotes: getLatestNotesApi } = useNoteService();

  useEffect(() => {
    getLatestNotes();
  }, []);

  const getLatestNotes = async () => {
    const numberOfRecords = 3;
    const res = await getLatestNotesApi(numberOfRecords);
    setNotes(res);
  };

  return (
    <section aria-label="main-home-component" className="w-2/3">
      <h3 className="text-4xl text-main font-bold">Last Notes</h3>
      {notes.map((note) => (
        <HomeNoteComponent
          key={note.id}
          title={note.name}
          content={note.content}
          categoryId={note.categoryId}
          noteDate={new Date().toISOString()}
        />
      ))}
    </section>
  );
};
