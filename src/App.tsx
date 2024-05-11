import { Header } from './components';
import { AppRoutes } from './routes';

export default function App() {
  return (
    <>
      <Header />
      <div className="p-12">
        <AppRoutes />
      </div>
    </>
  );
}
