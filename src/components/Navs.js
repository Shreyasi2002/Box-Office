import React, { memo } from 'react';
import { useLocation } from 'react-router';

import { LinkStyled, NavList } from './Navs.styled';

const LINKS = [
    { to: '/', text: 'HOME Page' },
    { to: '/starred', text: 'Starred Page' },
];

const Navs = () => {
    const location = useLocation();

    return (
        <div>
            <br />
            <NavList>
                {LINKS.map(item => (
                    <li key={item.to}>
                        <LinkStyled
                            to={item.to}
                            className={
                                item.to === location.pathname ? 'active' : ''
                            }
                        >
                            {item.text}
                        </LinkStyled>
                    </li>
                ))}
            </NavList>
        </div>
    );
};

export default memo(Navs);