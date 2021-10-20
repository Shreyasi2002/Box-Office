import React, { memo } from 'react';
import { TitleWrapper, WelcomeImage } from './Title.styled';

import WELCOME from '../images/welcome.png';

const Title = ({ title, subtitle }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        <WelcomeImage>
            <div className="image">
                <img src={WELCOME} alt="welcome" />
            </div>
        </WelcomeImage>
        <TitleWrapper>
            <h1>
                <b>{title}</b>
            </h1>
            <p>{subtitle}</p>
        </TitleWrapper>
    </div>
);

export default memo(Title);
