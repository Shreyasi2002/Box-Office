/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-duplicate-props */
import React, { useState } from 'react';

import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Star } from '../styled';
import { Headline, MainDataWrapper, TagList } from './ShowMainData.styled';

import Popup from '../../misc/popup';
import ImageShow from '../../pages/ImageShow';

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
    id,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    return (
        <MainDataWrapper>
            <div>
                <div onClick={togglePopup} id="popup">
                    <div className="image-container">
                        <img
                            src={image ? image.original : IMG_PLACEHOLDER}
                            alt="show-cover"
                        />

                        <div className="text-block">Click to see more</div>
                    </div>
                </div>
                {isOpen && (
                    <Popup content={<ImageShow />} handleClose={togglePopup} />
                )}
            </div>
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
};

export default ShowMainData;
