export type INote = {
  name: string;
  content: string;
  categoryId: string;
  id: number;
};

export type INewNote = Omit<INote, 'id'>;