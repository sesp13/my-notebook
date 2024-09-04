import { ErrorText, SampleButton } from '../../components';
import { SubmitHandler, useForm } from 'react-hook-form';

import { ICategory } from '../../models';

interface CategoriesFormParams {
  onSave: (category: ICategory) => Promise<{ isSuccess: boolean }>;
}

export const CategoriesForm = (params: CategoriesFormParams) => {
  const { onSave } = params;

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset: resetForm,
  } = useForm<ICategory>();

  const onSubmit: SubmitHandler<ICategory> = (data) => {
    onSave(data).then(({ isSuccess }) => {
      if (isSuccess) {
        resetForm();
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
              id="name"
              autoComplete="name"
              className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
              placeholder="My new Category"
              {...register('name', { required: true })}
            />
          </div>
        </div>
        <ErrorText
          text="This field is required"
          isShow={errors.name ? true : false}
        />
      </div>
      <div className="mt-6 flex items-center justify-end gap-x-6">
        <SampleButton
          text="Save"
          buttonType="submit"
          additionalClasses={!isValid ? 'bg-zinc-500' : ''}
        />
      </div>
    </form>
  );
};
