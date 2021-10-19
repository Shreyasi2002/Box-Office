import React, { useState, useEffect } from 'react';
// import Confetti from 'react-confetti';

import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/shows/ShowGrid';
import { LoadingAndErrors } from './Show.styled';

import { init } from '../components/Puzzle';

import Title from '../components/Title';

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
        <div>
            <Title
                title="BOX OFFICE"
                subtitle="Are you looking for a movie or an actor?"
            />
            <MainPageLayout>
                {isLoading && (
                    <LoadingAndErrors>
                        <div className="loading" />
                        <p
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                        >
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
                            <br />
                            Looks like no shows were added ... <br />
                            You can Try Out This Puzzle in the meantime !
                            <br />
                            <br />
                            <br />
                        </div>
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                paddingLeft: '25px',
                            }}
                            onLoad={init()}
                        >
                            <canvas id="canvas" />
                        </div>
                        <div
                            style={{
                                color: 'darkgray',
                                display: 'flex',
                                justifyContent: 'center',
                                fontFamily: 'monospace',
                                paddingLeft: '40px',
                                textAlign: 'center',
                                fontSize: '15px',
                            }}
                        >
                            <br />
                            Please note that the above code is not compatible
                            for mobile devices
                        </div>
                        <br />
                    </div>
                )}
                {!isLoading && !error && shows && <ShowGrid data={shows} />}
            </MainPageLayout>
        </div>
    );
};

export default Starred;
