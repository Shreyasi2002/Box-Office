import React from 'react';
import ActorCard from './ActorCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => (
    <FlexGrid>
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
    </FlexGrid>
);

export default ActorGrid;
