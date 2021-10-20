import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavList = styled.ul`
    display: flex;
    justify-content: center;
    list-style: none;
    margin: 0 0 20px;
    padding: 0;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
`;

export const LinkStyled = styled(Link)`
    margin: 0 15px;
    padding: 3px 20px;
    position: relative;
    text-decoration: navy;
    text-align: center;
    color: ${({ theme }) => theme.mainColors.gray};
    &.active {
        color: ${({ theme }) => theme.mainColors.blue};
        &:after {
            content: '';
            position: absolute;
            display: block;
            height: 2px;
            left: 0%;
            bottom: 0;
            background-color: ${({ theme }) => theme.mainColors.blue};
            animation: slide-in 0.5s ease-in forwards;
            @keyframes slide-in {
                from {
                    left: 50%;
                    width: 0;
                }
                to {
                    left: 0%;
                    width: 100%;
                }
            }
        }
    }
`;
