import React from 'react';
import ActorCard from './ActorCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png';

const ActorGrid = ({ data }) => (
    <div>
        {data.map(({ person }) => (
            <ActorCard
                key={person.id}
                birthday={person.birthday}
                name={person.name}
                image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
                country={person.country ? person.country.name : null}
                deathday={person.deathday}
                gender={person.gender}
            />
        ))}
    </div>
);

export default ActorGrid;
