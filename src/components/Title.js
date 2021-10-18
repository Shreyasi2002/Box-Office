import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';

const Title = ({ title, subtitle }) => (
    <TitleWrapper>
        <h1>
            <b>{title}</b>
        </h1>
        <p>{subtitle}</p>
    </TitleWrapper>
);

export default memo(Title);
