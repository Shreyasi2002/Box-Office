import styled from 'styled-components';
import FadeIn from 'react-fade-in/lib/FadeIn';

export const FlexGrid = styled(FadeIn)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const SearchCard = styled.div`
    width: 300px;
    height: 100%;
    margin: 0 15px 40px;
    justify-content: center;

    .img-wrapper {
        width: 100%;
        border-radius: 40px;
        height: 420px;
        overflow: hidden;
        border: 1px solid #ddd;

        img {
            object-fit: cover;
            border-radius: 40px;
            height: 100%;
            width: 100%;
            position: relative;
        }
    }

    h1 {
        margin: 10px 0;
        font-size: 21px;
    }

    p {
        margin: 0;
    }
`;

export const Star = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: ${props => (props.active ? '#ffc806' : '#ddd')};
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
`;

export const Heart = styled.div`
    width: 20px;
    height: 15px;
    background: radial-gradient(
                circle at 60% 65%,
                ${props => (props.active ? '#f3166e' : '#ddd')} 64%,
                transparent 65%
            )
            top left,
        radial-gradient(
                circle at 40% 65%,
                ${props => (props.active ? '#f3166e' : '#ddd')} 64%,
                transparent 65%
            )
            top right,
        linear-gradient(
                to bottom left,
                ${props => (props.active ? '#f3166e' : '#ddd')} 43%,
                transparent 43%
            )
            bottom left,
        linear-gradient(
                to bottom right,
                ${props => (props.active ? '#f3166e' : '#ddd')} 43%,
                transparent 43%
            )
            bottom right;
    background-size: 50% 50%;
    background-repeat: no-repeat;
    display: inline-block;

    &:before {
        content: '';
        display: block;
        padding-top: 100%;
    }
`;
