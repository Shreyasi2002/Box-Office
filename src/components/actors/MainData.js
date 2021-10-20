/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import IMG_PLACEHOLDER from '../../images/not-found.png';
import { Headline, MainDataWrapper } from '../shows/ShowMainData.styled';
import { StyledActorCard } from './ActorCard.styled';

const MainData = ({ image, name, id, country, birthday, gender, deathday }) => {
    return (
        <MainDataWrapper>
            <div className="image-container">
                <img
                    src={image ? image.medium : IMG_PLACEHOLDER}
                    alt="show-cover"
                />
            </div>

            <div className="text-side">
                <Headline>
                    <h1 style={{ borderRight: 'none' }}>{name}</h1>
                </Headline>
                <div className="details">
                    <h3 style={{ fontSize: '21px' }}>Personal Details </h3>
                    <n style={{ color: 'black' }}>Gender:</n> {gender || 'N/A'}
                    <br />
                    <n style={{ color: 'black' }}>Birthday:</n>{' '}
                    {birthday ? `${birthday}` : 'N/A'}
                    <br />
                    <n style={{ color: 'black' }}>Country:</n>{' '}
                    <span>{country ? `${country.name}` : 'Not Known'}</span>
                    <br />
                    <br />
                    <span>
                        {deathday ? `Passed away on ${deathday}` : null}
                    </span>
                </div>
            </div>
        </MainDataWrapper>
    );
};

export default MainData;
