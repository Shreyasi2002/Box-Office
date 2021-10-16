import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
    { to: '/', text: 'HOME Page' },
    { to: '/starred', text: 'Starred Page' },
];

const Navs = () => (
    <div>
        <ul>
            {LINKS.map(item => (
                <li key={item.to}>
                    <Link to={item.to}>{item.text}</Link>
                </li>
            ))}
        </ul>
    </div>
);

export default Navs;
