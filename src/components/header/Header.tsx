import { Popover } from '@headlessui/react';
import { Link } from 'react-router-dom';
import { AppRouting } from '../../routes';

export const Header = () => {
  return (
    <header className="bg-main">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to={AppRouting.HOME} className="-m-1.5 p-1.5">
            <p className="font-extrabold text-4xl text-secondary">
              My NoteBook
            </p>
          </Link>
        </div>
        <Popover.Group className="flex gap-x-12">
          <Link
            to={AppRouting.HOME}
            className="text-sm font-semibold leading-6 text-secondary"
          >
            View all notes
          </Link>
          <Link
            to={AppRouting.ADD_NOTE}
            className="text-sm font-semibold leading-6 text-secondary"
          >
            Create a new Note
          </Link>
        </Popover.Group>
      </nav>
    </header>
  );
};
