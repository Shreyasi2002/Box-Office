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
    h2 {
        margin: 0;
        margin-bottom: 30px;
        font-size: 22px;
    }
`;

export const LoadingAndErrors = styled.div`
    h3 {
        display: flex;
        justify-content: center;
    }
    .loading {
        display: flex;
        justify-content: center;
    }
    .loading::after {
        content: '';
        width: 100px;
        height: 100px;
        border: 30px solid #dddddd;
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