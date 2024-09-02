import { ICategory } from '../models';

const API_URL = 'http://localhost:3000/categories';

export const useCategoryService = () => {
  const getAllCategories = async (): Promise<ICategory[]> => {
    const url = API_URL;
    const res = await fetch(url);
    return await res.json();
  };

  return {
    getAllCategories,
  };
};
