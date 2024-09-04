import { useEffect, useState } from 'react';

import { ICategory } from '../../../models';
import { useCategoryService } from '../../../hooks';

interface HomeNoteProps {
  title: string;
  content: string;
  categoryId: string;
  noteDate: string;
}

export const HomeNoteComponent = (props: HomeNoteProps) => {
  const { title, content, noteDate, categoryId } = props;
  const [category, setCategory] = useState<ICategory | null>(null);

  const { getCategoryById: getCategoryByIdApi } = useCategoryService();

  useEffect(() => {
    getCategory();
  }, []);

  const getCategory = async () => {
    const categoryApi = await getCategoryByIdApi(categoryId);
    setCategory(categoryApi);
  };

  return (
    <div className="border border-secondary mt-5 p-5" aria-label="home-note">
      <h4 className="text-main font-bold text-3xl">{title}</h4>
      <p className="mt-2">
        {category?.name ? (
          <>
            Category: <span className="italic text-main">{category.name}</span> {' '}
          </>
        ) : (
          ''
        )}
        Date:
        <span className="italic text-main"> {noteDate}</span>
      </p>
      <p className="mt-3">{content}</p>
    </div>
  );
};
