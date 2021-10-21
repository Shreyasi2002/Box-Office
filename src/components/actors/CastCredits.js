/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React from 'react';
import { apiGet } from '../../misc/config';
import { CastList } from '../shows/Cast.styled';

import IMG_PLACEHOLDER from '../../images/not-found.png';

const CastCredits = ({ cast }) => {
    console.log({ cast });
    console.log('a');
    console.log(cast._links);

    // console.log(character);

    return (
        <CastList>
            {cast.map(({ voice, _links }, key) => {
                const character = apiGet(_links.character.href);
                return (
                    <div key={key} className="cast-item">
                        <div className="pic-wrapper">
                            <img
                                src={
                                    character.image
                                        ? character.image.medium
                                        : IMG_PLACEHOLDER
                                }
                                alt="cast-person"
                            />
                        </div>
                        <div className="actor">
                            <span>
                                <span className="bold">{character.name}</span> |{' '}
                                {character.name} {voice ? '| Voice' : ''}
                            </span>
                        </div>
                        <br />
                    </div>
                );
            })}
        </CastList>
    );
};

export default CastCredits;
