import { createSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { AppRouting } from '../../../routes';
import { INote } from '../../../models';
import { LeftHomeNoteComponent } from './LeftHomeNoteComponent';
import { SampleButton } from '../../../components';
import { useNoteService } from '../../../hooks';

export const LeftHomeSidebar = () => {
  const [notes, setNotes] = useState<INote[]>([]);
  const [searchText, setSearchText] = useState('');

  const { getAllNotes: getAllNotesApi } = useNoteService();
  const navigate = useNavigate();

  useEffect(() => {
    getAllNotes();
  }, []);

  const getAllNotes = async () => {
    const notesApi = await getAllNotesApi();
    setNotes(notesApi);
  };

  const onSearchNote = () => {
    navigate({
      pathname: AppRouting.SEARCH,
      search: createSearchParams({
        query: searchText,
      }).toString(),
    });
  };

  const onChangeSearch = (e: any) => {
    setSearchText(e.target.value);
  };

  return (
    <section aria-label="left-home-sidebar" className="w-1/3">
      <div className="flex justify-between">
        <div className="sample-input-container w-full">
          <input
            type="text"
            name="name"
            id="username"
            autoComplete="username"
            className="sample-input"
            placeholder="The best name ever"
            value={searchText}
            onChange={onChangeSearch}
            aria-label="search-input"
          />
        </div>
        <SampleButton
          text="Search"
          additionalClasses="ml-2"
          ariaLabel="search-btn"
          onClick={onSearchNote}
        />
      </div>
      <div className="mt-5">
        <h3 className="text-main font-bold text-2xl ">All Notes</h3>
        {notes.map((note) => (
          <LeftHomeNoteComponent note={note} key={note.id} />
        ))}
      </div>
    </section>
  );
};
