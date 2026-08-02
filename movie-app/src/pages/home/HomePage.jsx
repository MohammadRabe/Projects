import Header  from '../../components/home-page/header/Header'
import React from 'react'
import MoviesSection from '../../components/home-page/movies-section/MoviesSection'

const HomePage = () => {
  return (
    <div className='home-page'>
        <MoviesSection />
    </div>
  )
}

export default HomePage