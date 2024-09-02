import { useEffect, useState } from 'react';

import { ICategory } from '../../models';
import { useCategoryService } from '../../hooks';

export const CategoriesPage = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { getAllCategories: getAllCategoriesApi } = useCategoryService();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const categoriesResponse = await getAllCategoriesApi();
    setCategories(categoriesResponse);
  };

  return (
    <section>
      <h1 className="font-semibold leading-7 text-main text-3xl">Categories</h1>
      <ul className='mt-5'>
        {categories.map((category) => (
          <li className='mt-4'>{category.name}</li>
        ))}
      </ul>
    </section>
  );
};
