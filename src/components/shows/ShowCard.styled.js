import styled from 'styled-components';
import { SearchCard } from '../styled';

export const StyledShowCard = styled(SearchCard)`
    .btns {
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;

        button {
            outline: none;
            border: 1px solid #8e8e8e;
            border-radius: 15px;
            padding: 5px 20px;
            background-color: #fff;
            display: flex;
            justify-content: center;
            align-items: center;
            &:hover {
                cursor: pointer;
            }
        }
        .tooltiptext {
            visibility: hidden;
            width: 150px;
            background-color: black;
            color: #fff;
            text-align: center;
            padding: 7px 0;
            border-radius: 10px;
            transition: opacity 0.6s;
            box-sizing: inherit;

            /* Position the tooltip text - see examples below! */
            position: absolute;
            z-index: 1;
            top: -5px;
            left: 20%;
        }

        /* Show the tooltip text when you mouse over the tooltip container */
        &:hover .tooltiptext {
            visibility: visible;
        }
    }

    img:hover {
        opacity: 0.6;
    }
`;
