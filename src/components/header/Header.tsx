import { Popover } from '@headlessui/react';

export const Header = () => {
  return (
    <header className="bg-lime-900">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <p className="font-extrabold text-4xl text-orange-500">
              My NoteBook
            </p>
          </a>
        </div>
        <Popover.Group className="flex gap-x-12">
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-orange-500"
          >
            View all notes
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-orange-500"
          >
            Create new note
          </a>
        </Popover.Group>
      </nav>
    </header>
  );
};
