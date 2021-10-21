import styled from 'styled-components';

export const MainDataWrapper = styled.div`
    display: flex;
    margin-bottom: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    img {
        min-width: 250px;
        width: 300px;
        max-height: 450px;
        border: 1px solid #ddd;
        border-radius: 40px;
    }

    .not-click:hover {
        opacity: 1;
        cursor: default;
    }

    .text-side {
        margin-left: 20px;
        .summary {
            color: #5f5f5f;
            line-height: 1.5;
        }

        .language {
            color: #5f5f5f;
            line-height: 1.5;
        }
        .details {
            color: #5f5f5f;
            line-height: 1.5;
        }
    }
    .image-container {
        position: relative;
        cursor: pointer;
    }

    .image-container:hover {
        color: black;
        opacity: 0.6;
    }

    /* Bottom right text */
    .text-block {
        position: absolute;
        top: 40%;
        right: 35px;
        background-color: black;
        color: white;
        padding: 40px;
        opacity: 0.6;
        border-radius: 30px;
    }

    @media only screen and (max-width: 768px) {
        flex-wrap: wrap;
        img {
            margin-bottom: 20px;
            margin: auto;
        }
        .text-side {
            margin-left: 0;
            margin-top: 20px;
        }
    }
`;

export const Headline = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    h1,
    h3 {
        margin: 0;
        border-right: 1px solid #ddd;
        padding-right: 25px;
        margin-right: 20px;
        font-size: 35px;
    }

    div {
        display: flex;
        align-items: center;
        span {
            margin-left: 10px;
        }
    }
`;

export const TagList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;

    span {
        margin: 6px;
        margin-bottom: 0;
        color: blue;
        background-color: #d0c9ff;
        padding: 3px 13px;
        border-radius: 20px;
        font-size: 14px;
    }
`;
