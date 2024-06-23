import { INote } from '../../../models';
import { SampleButton } from '../../../components';

interface LeftHomeNoteComponentProps {
  note: INote;
}

export const LeftHomeNoteComponent = (props: LeftHomeNoteComponentProps) => {
  const {
    note: { name },
  } = props;

  const onSeeDetailsClick = () => {
    console.log('You clicked me!');
  };

  return (
    <div className="border-b-2 border-main p-3" aria-label='left-note'>
      <h5 className="text-secondary font-bold mb-3">{name}</h5>
      <SampleButton text="See more Details" onClick={onSeeDetailsClick} />
    </div>
  );
};
