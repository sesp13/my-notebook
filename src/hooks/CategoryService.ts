import { ICategory, INewCategory } from '../models';

const API_URL = 'http://localhost:3000/categories';

export const useCategoryService = () => {
  const getAllCategories = async (): Promise<ICategory[]> => {
    const url = API_URL;
    const res = await fetch(url);
    return await res.json();
  };

  const saveCategory = async (payload: INewCategory): Promise<ICategory> => {
    const url = API_URL;
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
    return await res.json();
  };

  const getCategoryById = async (id: string): Promise<ICategory> => {
    const url = `${API_URL}/${id}`;
    const res = await fetch(url);
    return res.json();
  };

  return {
    getAllCategories,
    getCategoryById,
    saveCategory,
  };
};
