import React, { useContext } from 'react'
import { LangContext } from '../../contexts/LanguageContext';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/home/HomePage';
import MovieDetails from '../../pages/movie-details/MovieDetails';
import NotFoundPage from '../../pages/not-found/NotFoundPage';
import Header from '../../components/home-page/header/Header';
import WatchList from '../../pages/watch-list/WatchList';


const AppBody = () => {
    const {lang, setLang} = useContext(LangContext);

  return (
          <div className='app-body' dir={lang=='en'? 'ltr':'rtl'}>
            <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='/home' element={<HomePage />} />
              <Route path='/movies/:movieId' element={<MovieDetails />} />
              <Route path='/movies/watchlist' element={<WatchList />} />
              <Route path='*' element={<NotFoundPage />} />
            </Routes>
          </div>
  )
}

export default AppBody