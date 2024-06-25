import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { AppRouting } from '../../routes';
import { HomeNoteComponent } from '../Home/MainHomeContent/HomeNoteComponent';
import { INote } from '../../models';
import { SampleButton } from '../../components';
import { useNoteService } from '../../hooks';

export const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { searchNote: searchNoteApi } = useNoteService();

  const [query, setQuery] = useState<string | null>(null);
  const [notes, setNotes] = useState<INote[]>([]);

  useEffect(() => {
    const tempQuery = searchParams.get('query');
    if (tempQuery !== undefined && tempQuery !== null && tempQuery !== '') {
      setQuery(tempQuery!);
      searchNotes(tempQuery);
    }
  }, []);

  const returnToMainPage = () => {
    navigate(AppRouting.HOME);
  };

  const searchNotes = async (searchTerm: string) => {
    const res = await searchNoteApi(searchTerm);
    setNotes(res);
  };

  return (
    <>
      {query ? (
        <section>
          <h1 className="text-main font-bold text-4xl text-center">
            Search results for:{' '}
            <span className="text-secondary italic">{query}</span>
          </h1>
          {notes.map((note) => (
            <HomeNoteComponent
              title={note.name}
              content={note.content}
              key={note.id}
              noteDate={new Date().toISOString()}
            />
          ))}
        </section>
      ) : (
        <section>
          <h1 className="text-main font-bold text-4xl text-center">
            Error: Invalid Query
          </h1>
          <SampleButton
            text="Return into main page"
            ariaLabel="return-to-main-btn"
            additionalClasses="block m-auto mt-5"
            onClick={returnToMainPage}
          />
        </section>
      )}
    </>
  );
};
