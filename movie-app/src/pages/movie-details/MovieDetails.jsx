import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { LoadingOutlined, HeartOutlined, HeartFilled } from '@ant-design/icons';
import { Spin } from "antd";

const MovieDetails = () => {

    const movieId = useParams().movieId;

    const [movie, setMovie] = useState();

    const [liked, setLiked] = useState(() => {
        const list = JSON.parse(localStorage.getItem('list')) || [];
        return list.map(String).includes(String(movieId));
    });

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=1b6e245e4701b373f3337b3cb234f969`
        )
        .then((response) => {
            setMovie(response.data);
        });
    }, [movieId]);


    const addToList = () => {
        const list = JSON.parse(localStorage.getItem('list')) || [];

        if (!list.map(String).includes(String(movieId))) {
            list.push(movieId);
            localStorage.setItem('list', JSON.stringify(list));
        }

        setLiked(true);
    };


    const removeFromList = () => {
        const list = JSON.parse(localStorage.getItem('list')) || [];

        const newList = list.filter(
            id => String(id) !== String(movieId)
        );

        localStorage.setItem('list', JSON.stringify(newList));

        setLiked(false);
    };


    if (!movie) {
        return (
            <Spin
                indicator={
                    <LoadingOutlined
                        style={{
                            fontSize: 48,
                            color: '#ffd104',
                            marginTop: '100px'
                        }}
                        spin
                    />
                }
            />
        );
    }


    return (
        <div className='movie-section mt-5 d-flex justify-content-evenly'>

            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
            />

            <div className='movie-text'>

                <h1 className='d-flex justify-content-between'>

                    {movie.title}

                    {liked ? (
                        <HeartFilled
                            className="heart"
                            onClick={removeFromList}
                        />
                    ) : (
                        <HeartOutlined
                            className="heart"
                            onClick={addToList}
                        />
                    )}

                </h1>

                <span>{movie.release_date}</span>

                <span className='rate-stars'>
                    {movie.vote_average}
                </span>

                <p>
                    {movie.overview}
                </p>

                <div className='genres-section'>
                    {movie.genres?.map((genre) => (
                        <span
                            className='badge badge-warning'
                            key={genre.id}
                        >
                            {genre.name}
                        </span>
                    ))}
                </div>

                <div className='duration-lang'>

                    <span>
                        <b>Duration:</b> {movie.runtime} Min.
                    </span>

                    <div className='languages'>
                        <b>Languages:</b>

                        {movie.spoken_languages?.map((lang) => (
                            <span key={lang.iso_639_1}>
                                {lang.english_name}
                            </span>
                        ))}
                    </div>

                </div>

                <div className='companies'>
                    {movie.production_companies?.map((comp) => (
                        <span key={comp.id}>
                            {comp.name}
                        </span>
                    ))}
                </div>

            </div>

        </div>
    );
};

export default MovieDetails;