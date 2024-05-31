interface HomeNoteProps {
  title: string;
  content: string;
  noteDate: string;
}

export const HomeNoteComponent = (props: HomeNoteProps) => {
  const { title, content, noteDate } = props;
  return (
    <div className="border border-secondary mt-5 p-5">
      <h4 className="text-main font-bold text-3xl">{title}</h4>
      <p className="mt-2">
        Category: <span className="italic text-main">School</span>- Date:
        <span className="italic text-main"> {noteDate}</span>
      </p>
      <p className="mt-3">{content}</p>
    </div>
  );
};
