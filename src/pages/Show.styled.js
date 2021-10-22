import styled from 'styled-components';

export const ShowPageWrapper = styled.div`
    padding: 0 20px;

    @media only screen and (min-width: 516px) {
        padding: 0 40px;
    }

    @media only screen and (min-width: 768px) {
        padding: 0 60px;
    }

    @media only screen and (min-width: 992px) {
        padding: 0 80px;
    }
`;

export const InfoBlock = styled.div`
    margin-bottom: 40px;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
        'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    h2 {
        margin: 0;
        margin-bottom: 30px;
        padding-bottom: 5px;
        border-bottom: 1px solid #ddd;
        border-right: 1px;
        padding-right: 20px;
        margin-right: 10px;
        font-size: 22px;
    }
`;

export const LoadingAndErrors = styled.div`
    n {
        display: flex;
        justify-content: center;
    }
    .loading {
        display: flex;
        justify-content: center;
    }
    .loading::after {
        content: '';
        width: 50px;
        height: 50px;
        border: 20px solid aliceblue;
        border-top: 35%;
        border-top-color: blue;
        border-radius: 50%;
        animation: loading 1s ease-in infinite;
    }

    @keyframes loading {
        to {
            transform: rotate(1turn);
        }
    } ;
`;
