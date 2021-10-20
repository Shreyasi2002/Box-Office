import React from 'react';
import { Link } from 'react-router-dom';

import IMG_PLACEHOLDER from '../../images/not-found.png';
import { CastList } from './Cast.styled';

const Cast = ({ cast }) => (
    <CastList>
        {cast.map(({ person, character, voice }, key) => (
            <div key={key} className="cast-item">
                <Link to={`/people/${key}`}>
                    <div className="pic-wrapper">
                        <img
                            src={
                                person.image
                                    ? person.image.medium
                                    : IMG_PLACEHOLDER
                            }
                            alt="cast-person"
                        />
                    </div>
                </Link>
                <div className="actor">
                    <span>
                        <span className="bold">{person.name}</span> |{' '}
                        {character.name} {voice ? '| Voice' : ''}
                    </span>
                </div>
                <br />
            </div>
        ))}
    </CastList>
);

export default Cast;
