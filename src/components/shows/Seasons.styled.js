import styled from 'styled-components';

export const SeasonList = styled.div`
    display: flex;
    flex-direction: column;

    .image-container {
        img {
            min-width: 50px;
            width: 150px;
            max-height: 350px;
            border: 1px solid #ddd;
            border-radius: 40px;
        }
    }

    .season-item {
        display: flex;
        align-items: center;
        margin: 10px 0;

        &:last-child {
            margin-bottom: 0;
        }

        .left {
            flex: 0 0 30%;
            border-right: 1px solid #b0b0b0;
            padding-right: 20px;
        }

        .right {
            padding-left: 20px;
            flex: 1;
        }
    }
`;
