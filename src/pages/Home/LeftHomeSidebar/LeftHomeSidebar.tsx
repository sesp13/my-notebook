import { SampleButton } from '../../../components';

export const LeftHomeSidebar = () => {
  return (
    <section aria-label='left-home-sidebar' className="w-1/3">
      <div className="flex justify-between">
        <div className="sample-input-container w-full">
          <input
            type="text"
            name="name"
            id="username"
            autoComplete="username"
            className="sample-input"
            placeholder="The best name ever"
          />
        </div>
        <SampleButton text="Search" additionalClasses="ml-2"></SampleButton>
      </div>
      <div className="mt-5">
        <h3 className="text-main font-bold text-2xl ">All Notes</h3>
      </div>
    </section>
  );
};
