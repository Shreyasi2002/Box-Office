import styled from 'styled-components';

export const TitleWrapper = styled.div`
    text-align: center;
    margin: 0 0 40px;

    h1 {
        color: ${({ theme }) => theme.mainColors.blue};
        letter-spacing: 5px;
        text-transform: uppercase;
        margin: 0 0 10px;
        font-size: 90px;
        font-weight: 9000;
        text-shadow: 10px 14px 15px 5px #0046d8;
        font-family: 'Courier New', Courier, monospace;

        transform: translateX(0%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: cover;
        background-position: center;

        background-clip: text;
        background-image: url('https://colorlib.com/etc/404/colorlib-error-404-10/img/bg.jpg');
    }

    p {
        color: ${({ theme }) => theme.mainColors.dark};
        margin: 0;
        font-size: 20px;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
            'Lucida Sans', Arial, sans-serif;
    }
`;
