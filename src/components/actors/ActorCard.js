/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

import { StyledActorCard } from './ActorCard.styled';
import Popup from '../../misc/popup';
import { MainDataWrapper, Headline } from '../shows/ShowMainData.styled';

const ActorCard = ({
    id,
    image,
    name,
    gender,
    country,
    birthday,
    deathday,
}) => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    let Age = 0;
    if (birthday) {
        const dob = new Date(birthday);
        const month = Date.now() - dob.getTime();
        const ageDt = new Date(month);
        const year = ageDt.getUTCFullYear();
        Age = Math.abs(year - 1970);
    } else {
        Age = 'N/A';
    }

    return (
        <StyledActorCard>
            <div>
                <div onClick={togglePopup} id="popup">
                    <div className="img-wrapper">
                        <img className="card" src={image} alt="actor" />
                    </div>
                </div>
                {isOpen && (
                    <Popup
                        content={
                            <span>
                                <MainDataWrapper>
                                    <img
                                        className="not-click"
                                        src={image}
                                        alt="show-cover"
                                    />

                                    <div className="text-side">
                                        <Headline>
                                            <h1 style={{ borderRight: 'none' }}>
                                                {name}
                                            </h1>
                                        </Headline>
                                        <div className="details">
                                            <h3 style={{ fontSize: '21px' }}>
                                                Personal Details{' '}
                                            </h3>
                                            <n style={{ color: 'black' }}>
                                                Gender:
                                            </n>{' '}
                                            {gender || 'N/A'}
                                            <br />
                                            <n style={{ color: 'black' }}>
                                                Age:
                                            </n>{' '}
                                            <span>{Age}</span>
                                            <br />
                                            <n style={{ color: 'black' }}>
                                                Birthday:
                                            </n>{' '}
                                            {birthday ? `${birthday}` : 'N/A'}
                                            <br />
                                            <n style={{ color: 'black' }}>
                                                Country:
                                            </n>{' '}
                                            <span>
                                                {country
                                                    ? `${country.name}`
                                                    : 'Not Known'}
                                            </span>
                                            <br />
                                            <br />
                                            <span>
                                                {deathday
                                                    ? `Passed away on ${deathday}`
                                                    : null}
                                            </span>
                                        </div>
                                    </div>
                                </MainDataWrapper>
                            </span>
                        }
                        handleClose={togglePopup}
                    />
                )}
            </div>
            <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                {name} {gender ? `(${gender})` : null}
            </h1>
        </StyledActorCard>
    );
};

export default ActorCard;
