/* eslint-disable import/no-cycle */
/* eslint-disable import/no-mutable-exports */
import React, { useState, useEffect, useCallback } from 'react';

import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/shows/ShowGrid';
import { LoadingAndErrors } from './Show.styled';

import { init } from '../components/Puzzle';

import Title from '../components/Title';
import CustomRadio from '../components/CustomRadio';
import { RadioInputsWrapper } from './Home.styled';

export let PUZZLE_DIFFICULTY;

const Starred = () => {
    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const [difficulty, setDifficulty] = useState('easy');

    const OnRadioChange = useCallback(ev => {
        setDifficulty(ev.target.value);
    }, []);

    if (difficulty === 'easy') {
        PUZZLE_DIFFICULTY = 4;
    } else if (difficulty === 'medium') {
        PUZZLE_DIFFICULTY = 7;
    } else {
        PUZZLE_DIFFICULTY = 10;
    }

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
                subtitle="Growing up, my favorite TV Shows are..."
            />
            <MainPageLayout>
                {isLoading && (
                    <LoadingAndErrors>
                        <div className="loading" />
                        <p
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontFamily: 'monospace',
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

                                textAlign: 'center',
                                fontSize: '16px',
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
                            }}
                            onLoad={init()}
                        >
                            <canvas id="canvas" />
                        </div>
                        <div>
                            <RadioInputsWrapper>
                                <div>
                                    <CustomRadio
                                        label="Easy"
                                        id="easy"
                                        value="easy"
                                        checked={difficulty === 'easy'}
                                        onChange={OnRadioChange}
                                    />
                                </div>
                                <div>
                                    <CustomRadio
                                        label="Medium"
                                        id="medium"
                                        value="medium"
                                        checked={difficulty === 'medium'}
                                        onChange={OnRadioChange}
                                    />
                                </div>
                                <div>
                                    <CustomRadio
                                        label="Hard"
                                        id="hard"
                                        value="hard"
                                        checked={difficulty === 'hard'}
                                        onChange={OnRadioChange}
                                    />
                                </div>
                            </RadioInputsWrapper>
                        </div>

                        <div
                            style={{
                                color: 'darkgray',
                                display: 'flex',
                                justifyContent: 'center',
                                fontFamily: 'monospace',

                                textAlign: 'center',
                                fontSize: '14px',
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
