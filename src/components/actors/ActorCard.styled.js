import styled from 'styled-components';
import { SearchCard } from '../styled';

export const StyledActorCard = styled(SearchCard)`
    .deathday {
        margin: 0;
        margin-top: 8px;
        font-weight: bold;
    }
    img:hover {
        opacity: 0.6;
        cursor: pointer;
    }
    .card {
        min-width: 250px;
        width: 300px;
        max-height: 450px;
        border: 1px solid #ddd;
        border-radius: 40px;
    }
`;
