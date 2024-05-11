import { LeftHomeSidebar } from './LeftHomeSidebar/LeftHomeSidebar';

export const HomePage = () => {
  return (
    <>
      <h2 className="text-5xl text-green-700 font-bold">Welcome back!</h2>
      <section className="flex justify-between mt-8 gap-10">
        <LeftHomeSidebar />
        <section className="w-2/3">Sidebar 2</section>
      </section>
    </>
  );
};
