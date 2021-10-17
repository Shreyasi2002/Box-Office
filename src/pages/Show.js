import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import Cast from '../components/shows/Cast';
import Details from '../components/shows/Details';

import Seasons from '../components/shows/Seasons';
import ShowMainData from '../components/shows/ShowMainData';

import { apiGet } from '../misc/config';
import { InfoBlock, LoadingAndErrors, ShowPageWrapper } from './Show.styled';

const initialState = {
    show: null,
    isLoading: true,
    error: null,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, show: action.show };
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, error: action.error };
        }
        default:
            return prevState;
    }
};

const Show = () => {
    const { id } = useParams();

    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast`)
            .then(results => {
                setTimeout(() => {
                    if (isMounted) {
                        dispatch({ type: 'FETCH_SUCCESS', show: results });
                    }
                }, 1000);
            })
            .catch(err => {
                if (isMounted) {
                    dispatch({ type: 'FETCH_FAILED', error: err.message });
                }
            });

        return () => {
            isMounted = false;
        };
    }, [id]);

    if (isLoading) {
        return (
            <LoadingAndErrors>
                <div className="loading" />
                <h3>Data is being loaded ...</h3>
            </LoadingAndErrors>
        );
    }

    if (error) {
        return (
            <div
                style={{
                    display: 'flex',
                    fontSize: '18px',
                    justifyContent: 'center',
                }}
            >
                Error Occured : {error}
            </div>
        );
    }
    return (
        <ShowPageWrapper>
            <ShowMainData
                image={show.image}
                name={show.name}
                rating={show.rating}
                summary={show.summary}
                tags={show.genres}
            />
            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    network={show.network}
                    premiered={show.premiered}
                />
            </InfoBlock>

            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons seasons={show._embedded.seasons} />
            </InfoBlock>

            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>
        </ShowPageWrapper>
    );
};

export default Show;