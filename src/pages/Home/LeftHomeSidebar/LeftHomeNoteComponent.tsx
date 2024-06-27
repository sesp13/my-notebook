import { createSearchParams, useNavigate } from 'react-router-dom';

import { AppRouting } from '../../../routes';
import { INote } from '../../../models';
import { SampleButton } from '../../../components';

interface LeftHomeNoteComponentProps {
  note: INote;
}

export const LeftHomeNoteComponent = (props: LeftHomeNoteComponentProps) => {
  const navigate = useNavigate();

  const {
    note: { name, id },
  } = props;

  const onSeeDetailsClick = () => {
    navigate({
      pathname: AppRouting.DETAIL,
      search: createSearchParams({ query: id }).toString(),
    });
  };

  return (
    <div className="border-b-2 border-main p-3" aria-label="left-note">
      <h5 className="text-secondary font-bold mb-3">{name}</h5>
      <SampleButton text="See more Details" onClick={onSeeDetailsClick} />
    </div>
  );
};
