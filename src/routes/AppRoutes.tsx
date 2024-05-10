import { Navigate, Route, Routes } from 'react-router-dom';
import { AppRouting } from './AppRouting.enum';
import { HomePage, NewNotePage } from '../pages';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AppRouting.HOME} element={<HomePage />} />
      <Route path={AppRouting.ADD_NOTE} element={<NewNotePage />} />
      <Route path="/*" element={<Navigate to={AppRouting.HOME} />} />
    </Routes>
  );
};
