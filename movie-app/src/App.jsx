import React, {useEffect, useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import MovieDetails from './pages/movie-details/MovieDetails';
import NotFoundPage from './pages/not-found/NotFoundPage';
import Header from './components/home-page/header/Header';
import WatchList from './pages/watch-list/WatchList';
import { LangContext } from './contexts/LanguageContext';
import AppBody from './components/app-body/AppBody';

const App = () => {
  const [lang, setLang] = useState('en');
  useEffect(() => {
    document.documentElement.dir = lang == 'en' ? 'ltr' : 'rtl';
  }, [lang]);

  return (
    <BrowserRouter>
      <LangContext.Provider value={{lang,setLang}}>
        <div className='app'>
          <Header />
          <AppBody />
        </div>
      </LangContext.Provider>

    </BrowserRouter>
  );
};

export default App;