import React from 'react';
import { Link } from 'react-router-dom';

import { StyledActorCard } from './ActorCard.styled';

const ActorCard = ({ id, image, name, gender }) => (
    <StyledActorCard>
        <Link to={`/people/${id}`}>
            <div className="img-wrapper">
                <img src={image} alt="actor" />
            </div>
        </Link>
        <h1 style={{ display: 'flex', justifyContent: 'center' }}>
            {name} {gender ? `(${gender})` : null}
        </h1>
    </StyledActorCard>
);

export default ActorCard;
