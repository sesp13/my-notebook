import { HomePage, NewNotePage, SearchPage } from '../pages';
import { Navigate, Route, Routes } from 'react-router-dom';

import { AppRouting } from './AppRouting.enum';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRouting.HOME} element={<HomePage />} />
      <Route path={AppRouting.ADD_NOTE} element={<NewNotePage />} />
      <Route path={AppRouting.SEARCH} element={<SearchPage />} />
      <Route path="/*" element={<Navigate to={AppRouting.HOME} />} />
    </Routes>
  );
};
