import { HomeNoteComponent } from "./HomeNoteComponent";

export const MainHomeContent = () => {
  return (
    <section className="w-2/3">
      <h3 className="text-4xl text-main font-bold">Last Notes</h3>
      <HomeNoteComponent />
      <HomeNoteComponent />
      <HomeNoteComponent />
    </section>
  );
};
