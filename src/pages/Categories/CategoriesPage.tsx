import { useEffect, useState } from 'react';

import { CategoriesForm } from './CategoriesForm';
import { ICategory } from '../../models';
import { useCategoryService } from '../../hooks';

export const CategoriesPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const {
    getAllCategories: getAllCategoriesApi,
    saveCategory: saveCategoryApi,
  } = useCategoryService();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const categoriesResponse = await getAllCategoriesApi();
    setCategories(categoriesResponse);
  };

  const saveCategories = async (
    data: ICategory
  ): Promise<{ isSuccess: boolean }> => {
    try {
      await saveCategoryApi(data);
      await getAllCategories();
      return { isSuccess: true };
    } catch (err) {
      return { isSuccess: false };
    }
  };

  return (
    <section>
      <h2 className="font-semibold leading-7 text-main text-5xl">Categories</h2>
      <div className="flex justify-between mt-4 gap-10">
        <div className="w-1/2">
          <ul className="mt-5">
            {categories.map((category) => (
              <li
                className="mt-4 p-3 text-center border-secondary 
                border-2 font-bold text-2xl"
                key={category.id}
              >
                {category.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/2">
          <h4 className="text-2xl text-main font-semibold">Create Category</h4>
          <CategoriesForm onSave={(category) => saveCategories(category)} />
        </div>
      </div>
    </section>
  );
};
