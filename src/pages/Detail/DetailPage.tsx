import { useEffect, useState } from 'react';

import { INote } from '../../models';
import { useNoteService } from '../../hooks';
import { useSearchParams } from 'react-router-dom';

export const DetailPage = () => {
  const [searchParams] = useSearchParams();
  const { getNoteById: getNoteByIdApi } = useNoteService();

  const [query, setQuery] = useState<string | null>(null);
  const [note, setNote] = useState<INote | null>(null);

  useEffect(() => {
    const tempQuery = searchParams.get('query');
    if (tempQuery !== undefined && tempQuery !== null && tempQuery !== '') {
      setQuery(tempQuery!);
      searchNote(tempQuery);
    }
  }, []);

  const searchNote = async (noteId: string) => {
    const note = await getNoteByIdApi(noteId);
    if (note.id !== undefined) {
      setNote(note);
    }
  };

  return (
    <>
      {query ? (
        note ? (
          <section>
            <h1 className="text-main text-5xl font-bold">Note: {note.name} </h1>
            <p className="mt-2">
              Category: <span className="italic text-main">School</span>- Date:
              <span className="italic text-main">
                {' '}
                {new Date().toISOString()}
              </span>
            </p>
            <div className='pt-5 pl-4'>
              <h3 className="text-main text-3xl font-bold">Content:</h3>
              <p>{note.content}</p>
            </div>
          </section>
        ) : (
          <section>
            <h1>Not note found</h1>
          </section>
        )
      ) : (
        <>
          <h1>Invalid query please try with a valid id</h1>
        </>
      )}
    </>
  );
};
