import styled from 'styled-components';

export const NotFound = styled.div`
    font-family: 'Montserrat';
    h1 {
        font-size: 160px;
        margin: 10px;
        font-weight: 900;
        position: absolute;
        left: 50%;

        transform: translateX(-50%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-size: cover;
        background-position: center;

        background-clip: text;
        background-image: url('https://colorlib.com/etc/404/colorlib-error-404-10/img/bg.jpg');
    }

    h2 {
        font-family: sans-serif;
        color: #000;
        font-size: 24px;
        font-weight: 700;
        text-transform: uppercase;
        margin-top: 0;
    }

    a {
        font-family: 'Montserrat', sans-serif;
        font-size: 14px;
        text-decoration: none;
        text-transform: uppercase;
        background: #0046d5;
        display: inline-block;
        padding: 15px 30px;
        border-radius: 40px;
        color: #fff;
        font-weight: 700;
        box-shadow: 0px 4px 15px -5px #0046d5;
        &:hover {
            cursor: pointer;
        }
    }
    p {
        font-family: sans-serif;
        color: #000;
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 20px;
        margin-top: 0px;
    }

    .notfound {
        padding-top: 200px;
        text-align: center;
    }
`;
