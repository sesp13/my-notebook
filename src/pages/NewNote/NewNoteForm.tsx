import { ErrorText, SampleButton } from '../../components/utilities';
import { ICategory, INote } from '../../models';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

import { useCategoryService } from '../../hooks';

interface NewNoteFormParams {
  onSave: (note: INote) => Promise<{ isSuccess: boolean }>;
}

export const NewNoteForm = (params: NewNoteFormParams) => {
  const { onSave } = params;
  const [categories, setCategories] = useState<ICategory[]>([]);

  const { getAllCategories: getAllCategoriesApi } = useCategoryService();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset: resetForm,
  } = useForm<INote>();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    const categoriesApi = await getAllCategoriesApi();
    setCategories(categoriesApi);
  };

  const onSubmit: SubmitHandler<INote> = (data) => {
    onSave(data).then(({ isSuccess }) => {
      if (isSuccess) {
        resetForm();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-5">
            <div className="">
              <label
                htmlFor="name"
                className="block text-sm font-medium leading-6 text-green-800"
              >
                Name
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-green-800 ">
                  <input
                    type="text"
                    id="username"
                    autoComplete="username"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    placeholder="The best name ever"
                    {...register('name', { required: true })}
                  />
                </div>
              </div>
              <ErrorText
                text="This field is required"
                isShow={errors.name ? true : false}
              />
            </div>

            <div className="mt-4">
              <label
                htmlFor="category"
                className="block text-sm font-medium leading-6 text-green-800"
              >
                Category
              </label>
              <div className="mt-2">
                <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-1 focus-within:ring-inset focus-within:ring-green-800 ">
                  <select
                    id="category"
                    autoComplete="category"
                    className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    {...register('categoryId', { required: true })}
                  >
                    {categories.map((cat) => (
                      <option key={cat.id} value={cat.id}>
                        {cat.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-green-800"
              >
                Content
              </label>
              <div className="mt-2">
                <textarea
                  id="about"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-green-800"
                  defaultValue={''}
                  {...register('content', { required: true })}
                />
              </div>
              <ErrorText
                text="This field is required"
                isShow={errors.content ? true : false}
              />
              <p className="mt-3 text-sm leading-6 text-gray-600">
                Give a description for your note
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
        >
          Go back
        </button>
        <SampleButton
          text="Save"
          buttonType="submit"
          additionalClasses={!isValid ? 'bg-zinc-500' : ''}
        />
      </div>
    </form>
  );
};
