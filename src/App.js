import 'antd/dist/antd.css';
import './App.css';
import Routers from './routers/Routers';
import SpinnerLoading from './components/spinnerLoading/SpinnerLoading';
import { useEffect } from 'react';
import { localStorageService } from './services/localStorageService';
import i18next from 'i18next';
function App() {
  useEffect(() => {
    const lang = localStorageService.get('lang') || 'EN';
    i18next.changeLanguage(lang);
  }, []);
  return (
    <div>
      <SpinnerLoading />
      <Routers />
    </div>
  );
}

export default App;
