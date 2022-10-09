import { useEffect, useState } from 'react';

import i18next from '../../i18next';
import { localStorageService } from '../../services/localStorageService';
function DropdownLanguages() {
  const [isOpenSelect, setisOpenSelect] = useState(false);
  const [languageSelect, setlanguageSelect] = useState('EN');
  const handleisOpenSelection = () => {
    setisOpenSelect((current) => !current);
  };

  useEffect(() => {
    if (localStorageService.get('lang')) {
      setlanguageSelect(localStorageService.get('lang'));
    }
  }, [languageSelect]);

  const handleLanguageSelect = (lang) => {
    setlanguageSelect(lang);
    localStorageService.set('lang', lang);
    i18next.changeLanguage(lang);
    setisOpenSelect((current) => !current);
  };

  return (
    <>
      <div className="relative inline-block text-left">
        <div>
          <button
            onClick={handleisOpenSelection}
            type="button"
            className="flex text-[12px] items-center  w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100"
            id="menu-button"
            aria-expanded="true"
            aria-haspopup="true"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="mr-2 h-3 w-3">
              <path d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 21 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
            </svg>
            {languageSelect}
            <svg
              className="-mr-1 ml-2 h-3 w-3"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <div
          className={`${
            isOpenSelect ? 'block' : 'hidden'
          } absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex={-1}
        >
          <div className="py-1 " role="none">
            <button
              onClick={() => {
                handleLanguageSelect('VN');
              }}
              className="text-gray-700 block px-4 py-2 text-sm w-full text-left"
            >
              Vietnamese
            </button>
            <button
              onClick={() => {
                handleLanguageSelect('EN');
              }}
              className="text-gray-700 block px-4 py-2 text-sm w-full text-left"
              role="menuitem"
              tabIndex={-1}
              id="menu-item-1"
            >
              English
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DropdownLanguages;
