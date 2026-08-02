import React, { useState } from 'react';
import { Card, Progress } from 'antd';
import { useNavigate } from 'react-router-dom';
import { HeartFilled, HeartOutlined } from '@ant-design/icons';

const { Meta } = Card;

const MovieCard = ({ id, title, imgSrc, rate, date }) => {

    const [liked, setLiked] = useState(() => {
        const list = JSON.parse(localStorage.getItem("list")) || [];

        return list.map(String).includes(String(id));
    });

    const addToList = (id) => {
        const list = JSON.parse(localStorage.getItem("list")) || [];

        if (!list.map(String).includes(String(id))) {
            list.push(id);
            localStorage.setItem("list", JSON.stringify(list));
        }

        setLiked(true);
    };

    const removeFromList = (id) => {
        const list = JSON.parse(localStorage.getItem("list")) || [];

        const newList = list.filter(
            movieId => String(movieId) !== String(id)
        );

        localStorage.setItem("list", JSON.stringify(newList));

        setLiked(false);
    };

    const formattedDate = new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });

    const navigate = useNavigate();

    return (
        <Card
            className="movie-card"
            onClick={() => navigate('/movies/' + id)}
            hoverable
            variant="borderless"
            cover={
                <div className="movie-image">
                    <img
                        draggable={false}
                        alt={`movie ${title}`}
                        src={`https://image.tmdb.org/t/p/w500${imgSrc}`}
                    />

                    <div className="rate-circle">
                        <Progress
                            strokeColor="#06d90d"
                            size="small"
                            type="circle"
                            percent={Math.floor(rate)}
                        />
                    </div>
                </div>
            }
        >
            <Meta
                title={title}
                description={
                    <span>
                        {formattedDate}

                        <i>
                            {liked ? (
                                <HeartFilled
                                    className="heart"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        removeFromList(id);
                                    }}
                                />
                            ) : (
                                <HeartOutlined
                                    className="heart"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        addToList(id);
                                    }}
                                />
                            )}
                        </i>
                    </span>
                }
            />
        </Card>
    );
};

export default MovieCard;