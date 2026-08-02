import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import MovieCard from '../../components/home-page/movies-section/MovieCard';
import { LangContext } from '../../contexts/LanguageContext';

const WatchList = () => {
    const {lang, setLang} = useContext(LangContext);
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const getWatchList = async () => {

            const list = JSON.parse(localStorage.getItem('list')) || [];

            if (list.length === 0) {
                setLoading(false);
                return;
            }

            try {

                const requests = list.map((id) =>
                    axios.get(
                        `https://api.themoviedb.org/3/movie/${id}?api_key=1b6e245e4701b373f3337b3cb234f969`
                    )
                );

                const responses = await Promise.all(requests);

                setMovies(
                    responses.map(response => response.data)
                );

            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        getWatchList();

    }, []);

    if (loading) {
        return (
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                            color: '#ffd104'
                        }}
                        spin
                    />
                }
            />
        );
    }

    return (
        <div className="container mt-5">

            <h1>My Watch List</h1>

            {movies.length === 0 ? (
                <p>{lang == 'en' ? 'Your watch list is empty.' : 'لا يوجد افلام '}</p>
            ) : (
                <div className="row">

                    {movies.map((movie) => (
                        <div
                            className="col-12 col-md-6 col-lg-4"
                            key={movie.id}
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
            )}

        </div>
    );
};

export default WatchList;