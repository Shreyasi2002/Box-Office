/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { DetailsWrapper } from './Details.styled';

const Details = ({ status, premiered, network, runtime, officialSite }) => (
    <DetailsWrapper>
        <p>
            Status: <span>{status}</span>
        </p>
        <p>
            Average Runtime: <span>{runtime} mins</span>
        </p>
        <p>
            Premiered <b>{premiered}</b> {network ? `on ${network.name}` : null}
        </p>
        <p>
            Official Site:{' '}
            <a href={officialSite} target="_blank">
                {officialSite ? ' Click Here ' : 'N/A'}
            </a>
        </p>
    </DetailsWrapper>
);

export default Details;
