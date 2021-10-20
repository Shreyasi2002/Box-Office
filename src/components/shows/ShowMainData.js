import React from 'react';

import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

const ShowMainData = ({
    name,
    rating,
    summary,
    tags,
    image,
    language,
    status,
    premiered,
    runtime,
}) => (
    <MainDataWrapper>
        <img src={image ? image.original : IMG_PLACEHOLDER} alt="show-cover" />
        <div className="text-side">
            <Headline>
                <h1>{name}</h1>
                <div>
                    <Star active />

                    <span>{rating.average || 'N/A'}</span>
                </div>
            </Headline>
            <div
                className="summary"
                dangerouslySetInnerHTML={{ __html: summary }}
            />
            <div className="language">
                <n style={{ color: 'black' }}>Language:</n> {language}
                <br />
            </div>
            <div className="details">
                <n style={{ color: 'black' }}>Status:</n> {status}
                <br />
                <n style={{ color: 'black' }}>Average Runtime:</n>{' '}
                {runtime ? `${runtime} mins` : 'N/A'}
                <br />
                <n style={{ color: 'black' }}>Premiered:</n> {premiered}
            </div>

            <div>
                Tags:{' '}
                <TagList>
                    {tags.map((tag, i) => (
                        <span key={i}>{tag}</span>
                    ))}
                </TagList>
            </div>
        </div>
    </MainDataWrapper>
);

export default ShowMainData;
