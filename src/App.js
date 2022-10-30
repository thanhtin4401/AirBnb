import 'antd/dist/antd.css';
import './App.css';
import Routers from './routers/Routers';
import SpinnerLoading from './components/spinnerLoading/SpinnerLoading';
import { useEffect } from 'react';
import { localStorageService } from './services/localStorageService';
import i18next from 'i18next';
import ScrollToTop from 'react-scroll-to-top';
function App() {
  useEffect(() => {
    const lang = localStorageService.get('lang') || 'EN';
    i18next.changeLanguage(lang);
  }, []);
  return (
    <div>
      <SpinnerLoading />
      <Routers />
      <ScrollToTop
        smooth
        top={200}
        height={20}
        width={40}
        className="mb:bottom-[6rem] sm:bottom-[6rem] lg:bottom-[80px]"
      />
    </div>
  );
}

export default App;
