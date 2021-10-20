import styled from 'styled-components';

export const Images = styled.div`
    .slider {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        min-width: 400px;
        max-width: 1160px;
        max-height: 720px;
        min-height: 240px;
        border: 1px solid #ddd;
        border-radius: 40px;
    }

    .right-arrow {
        position: absolute;
        top: 40%;
        right: 12px;
        font-size: 3rem;
        color: black;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 40%;
        left: 12px;
        font-size: 3rem;
        color: black;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .slide {
        opacity: 0;
        transition-duration: 1s ease;
    }

    .slide.active {
        opacity: 1;
        transition-duration: 1s;
        transform: scale(1.08);
    }

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        .image {
            margin-bottom: 20px;
            margin: auto;
        }
    }
    @media only screen and (max-width: 780px) {
        flex-wrap: wrap;
        .image {
            margin-bottom: 20px;
            margin: auto;
            display: flex;
            justify-content: center;
            max-width: 90%;
            min-height: 100px;
            height: unset;
        }
    }
`;
