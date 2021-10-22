import React, { memo } from 'react';
// eslint-disable-next-line no-unused-vars
import { TitleWrapper, WelcomeImage } from './Title.styled';

// eslint-disable-next-line no-unused-vars

const Title = ({ title, subtitle }) => (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
        {/* <WelcomeImage>
            <div className="image">
                <img src={WELCOME} alt="welcome" />
            </div>
        </WelcomeImage> */}
        <TitleWrapper>
            <h1>
                <b>{title}</b>
            </h1>
            <p>{subtitle}</p>
        </TitleWrapper>
    </div>
);

export default memo(Title);
