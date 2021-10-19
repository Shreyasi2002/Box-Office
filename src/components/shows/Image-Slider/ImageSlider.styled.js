import styled from 'styled-components';

export const Images = styled.div`
    .slider {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .image {
        min-width: 250px;
        max-width: 700px;
        max-height: 450px;
        min-height: 140px;
        border: 1px solid #ddd;
        border-radius: 40px;
    }

    .right-arrow {
        position: absolute;
        top: 40%;
        right: 22px;
        font-size: 3rem;
        color: #000;
        z-index: 10;
        cursor: pointer;
        user-select: none;
    }

    .left-arrow {
        position: absolute;
        top: 40%;
        left: 22px;
        font-size: 3rem;
        color: #000;
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
`;
