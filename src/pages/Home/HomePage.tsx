import { LeftHomeSidebar } from './LeftHomeSidebar/LeftHomeSidebar';
import { MainHomeContent } from './MainHomeContent/MainHomeContent';

export const HomePage = () => {
  return (
    <section aria-label='home-page'>
      <h2 className="text-5xl text-main font-bold">Welcome back!</h2>
      <div className="flex justify-between mt-8 gap-10">
        <LeftHomeSidebar />
        <MainHomeContent />
      </div>
    </section>
  );
};
