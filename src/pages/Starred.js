import React, { useState, useEffect } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/config';
import ShowGrid from '../components/shows/ShowGrid';
import { LoadingAndErrors } from './Show.styled';

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
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    Looks like no Shows were added ...
                </div>
            )}
            {!isLoading && !error && shows && <ShowGrid data={shows} />}
        </MainPageLayout>
    );
};

export default Starred;
