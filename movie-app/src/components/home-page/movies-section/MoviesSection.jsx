import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { LangContext } from '../../../contexts/LanguageContext';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

const MoviesSection = () => {

    const [search, setSearch] = useState('');
    const [movies, setMovies] = useState([]);
    const [isLoading, setLoading] = useState(true);
    const {lang, setLang} = useContext(LangContext);

    useEffect(() => {

        const getMovies = async () => {

            try {

                let response;

                if (search.trim() === '') {

                    response = await axios.get(
                        'https://api.themoviedb.org/3/movie/popular?api_key=1b6e245e4701b373f3337b3cb234f969'
                    );

                } else {
                    response = await axios.get(
                        `https://api.themoviedb.org/3/search/movie?api_key=1b6e245e4701b373f3337b3cb234f969&query=${encodeURIComponent(search)}`
                    );

                }
                setLoading(false);
                setMovies(response.data.results);

            } catch (error) {
                console.log(error);
            }

        };

        getMovies();

    }, [search]);

    return (
        <div className="movies-section">


            <div className="welcome-section mb-5 d-flex flex-column align-items-center">

                <h1 className="my-4">
                    {lang=='en'? 'Welcome to our movie app':'اهلا بك في تطبيق الافلام'}
                </h1>

                <p className="mb-4">
                   {lang=='en'? 'Millions of movies, TV show and people to discover':'ملايين من الافلام, عروض تليفزيون و ناس لتكتشفهم'}
                </p>

                <div className="search-section m-5 w-75 container d-flex justify-content-evenly gap-2">

                    <input
                        className="form-control fs-4  p-3"
                        type="text"
                        placeholder={lang=='en'? 'Search and explore':'ابحث و استكشف'}
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />

                    <button className="btn btn-warning p-3 fw-bold" onClick={() => setSearch(search)}>
                        {lang=='en'? 'Search':'بحث'}
                    </button>

                </div>

            </div>
            

            {
            isLoading? <Spin indicator={<LoadingOutlined style={{ fontSize: 48, color:'#ffd104' }} spin />} />
            :
            <div className="d-flex flex-wrap justify-content-center gap-2 gap-y-3">

                {movies.map((movie) => (

                    <div
                        className="d-flex justify-content-center"
                        key={movie.id}
                        title={movie.title}
                    >

                        <MovieCard
                            id={movie.id}
                            title={movie.title}
                            imgSrc={movie.poster_path}
                            rate={movie.vote_average * 10}
                            date={movie.release_date}
                        />

                    </div>

                ))}

            </div>
}
        </div>
    );
};

export default MoviesSection;
