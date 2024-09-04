export type ICategory = {
  id: number;
  name: string;
};

export type INewCategory = Omit<ICategory, 'id'>;
