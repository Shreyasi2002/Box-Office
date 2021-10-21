import React from 'react';
import ActorCard from './ActorCard';

import IMAGE_NOT_FOUND from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => (
    <FlexGrid>
        {data.map(({ person }) => (
            <ActorCard
                id={person.id}
                name={person.name}
                image={person.image ? person.image.medium : IMAGE_NOT_FOUND}
                gender={person.gender}
                country={person.country}
                birthday={person.birthday}
                deathday={person.deathday}
            />
        ))}
    </FlexGrid>
);

export default ActorGrid;
