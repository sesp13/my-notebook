import { CustomAlert } from '../../components';
import { NewNoteForm } from './NewNoteForm';

export const NewNotePage = () => {
  return (
    <>
      <h1 className="font-semibold leading-7 text-main text-3xl">
        Create a new note
      </h1>
      <p className="mt-1 text-sm leading-6 text-gray-600">
        Feel free to create a new note to work into your new project
      </p>
      <CustomAlert
        alertType="success"
        title="Success"
        content="The note has been saved"
      />
      <NewNoteForm />
    </>
  );
};
