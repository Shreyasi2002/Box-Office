/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable no-continue */
/* eslint-disable no-var */
/* eslint-disable vars-on-top */
/* eslint-disable no-use-before-define */
import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/shows/ShowGrid';
import { LoadingAndErrors } from './Show.styled';

import NOT_ADDED from '../images/nothing added.png';
import { init } from '../components/Puzzle';

const Starred = () => {
    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (starred && starred.length > 0) {
            const promises = starred.map(showId => apiGet(`/shows/${showId}`));
            Promise.all(promises)
                .then(apiData => apiData.map(show => ({ show })))
                .then(results => {
                    setShows(results);
                    setIsLoading(false);
                })
                .catch(err => {
                    setError(err.message);
                    setIsLoading(false);
                });
        } else {
            setIsLoading(false);
        }
    }, [starred]);

    return (
        <MainPageLayout>
            {isLoading && (
                <LoadingAndErrors>
                    <div className="loading" />
                    <p style={{ display: 'flex', justifyContent: 'center' }}>
                        Shows are still Loading ...
                    </p>
                </LoadingAndErrors>
            )}
            {error && (
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    Error Occured : {error}
                </div>
            )}
            {!isLoading && !shows && (
                <div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            fontFamily: 'monospace',
                            paddingLeft: '40px',
                            textAlign: 'center',
                        }}
                    >
                        Looks like no shows were added ... <br />
                        {/* Try Out This Puzzle!! */}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <img alt="nothing added" src={NOT_ADDED} />
                    </div>
                    {/* <div onLoad={init}>
                        <canvas id="canvas" />
                    </div> */}
                </div>
            )}
            {!isLoading && !error && shows && <ShowGrid data={shows} />}
        </MainPageLayout>
    );
};

export default Starred;
