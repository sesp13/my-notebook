export type INote = {
  name: string;
  content: string;
  id: number;
};

export type INewNote = Omit<INote, 'id'>;