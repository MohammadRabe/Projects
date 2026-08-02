import React, { useContext } from 'react'
import DropDownLang from './DropDownLang'
import { Link } from 'react-router-dom'
import { LangContext } from '../../../contexts/LanguageContext';

const Header = () => {
  const {lang,setLang} = useContext(LangContext);
  return (
    <div className='header d-flex justify-content-between'>
        <div className='left'>
            <Link style={{color:'black',textDecoration:'none'}} to="/">{lang=='en'? 'Movie App':'موفي أاب'}</Link>
        </div>
        <div className='right d-flex justify-content-between gap-3'>
          <DropDownLang />
          <span className='watch-list-icon  d-flex justify-content-between gap-3'>
            <i className="fs-3 mt-1 fa-solid fa-heart"></i>
            <Link  to={'/movies/watchlist'}><span className='btn btn-outline-dark'>{lang=='en'?'Watch list':'المشاهدة لاحقا'}</span></Link>
          </span>
        </div>
    </div>
  )
}

export default Header