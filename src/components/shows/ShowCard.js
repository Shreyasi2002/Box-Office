/* eslint-disable no-unused-vars */
import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { Star, Heart } from '../styled';
import { StyledShowCard } from './ShowCard.styled';

const ShowCard = ({ id, image, name, summary, onStarClick, isStarred }) => {
    const summaryAsText = summary
        ? `${summary
              .split(' ')
              .slice(0, 15)
              .join(' ')
              .replace(/<.+?>/g, '')}...`
        : 'No description';

    return (
        <StyledShowCard>
            <Link to={`/show/${id}`}>
                <div className="img-wrapper">
                    <img src={image} alt="show" />
                </div>
            </Link>

            <h1>{name}</h1>

            <p>{summaryAsText}</p>

            <div className="btns">
                <button type="button" onClick={onStarClick}>
                    <Heart active={isStarred} />
                    <span className="tooltiptext">
                        {!isStarred
                            ? 'Add to Favorites'
                            : 'Remove from Favorites'}
                    </span>
                </button>
            </div>
        </StyledShowCard>
    );
};

export default memo(ShowCard);
