import { ICustomAlert, INote } from '../../models';

import { CustomAlert } from '../../components';
import { NewNoteForm } from './NewNoteForm';
import { useNoteService } from '../../hooks';
import { useState } from 'react';

export const NewNotePage = () => {
  const [customAlertState, setCustomAlertState] = useState<ICustomAlert>({
    alertType: 'success',
    title: '',
    isShow: false,
    content: '',
  });
  const { saveNote: saveNoteApi } = useNoteService();

  const saveNotes = async (data: INote): Promise<{ isSuccess: boolean }> => {
    try {
      await saveNoteApi(data);
      setCustomAlertState({
        alertType: 'success',
        content: 'The note has been saved',
        isShow: true,
        title: 'Success',
      });
      hideCustomAlert();
      return { isSuccess: true };
    } catch (err) {
      setCustomAlertState({
        alertType: 'error',
        content: 'There was an error while trying to save your note',
        isShow: true,
        title: 'Error',
      });
      hideCustomAlert();
      return { isSuccess: false };
    }
  };

  const hideCustomAlert = () => {
    setTimeout(() => {
      setCustomAlertState({ ...customAlertState, isShow: false });
    }, 4000);
  };

  return (
    <section aria-label='new-note-page'>
      <h1 className="font-semibold leading-7 text-main text-3xl">
        Create a new note
      </h1>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Feel free to create a new note to work into your new project
      </p>
      {customAlertState.isShow ? (
        <CustomAlert
          alertType={customAlertState.alertType}
          title={customAlertState.title}
          content={customAlertState.content}
        />
      ) : (
        ''
      )}
      <NewNoteForm onSave={(note) => saveNotes(note)} />
    </section>
  );
};
