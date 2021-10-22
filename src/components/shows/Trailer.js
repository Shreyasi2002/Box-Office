/* eslint-disable no-unused-vars */
/* eslint-disable arrow-body-style */
import React, { useEffect, useReducer } from 'react';
import { LoadingAndErrors } from '../../pages/Show.styled';

const API_BASE_URL = 'https://www.googleapis.com/youtube/v3/search';

export async function youtubeApiGet(queryString) {
    const response = await fetch(
        `${API_BASE_URL}?part=snippet&q=${queryString}&&type=video&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
    ).then(r => r.json());

    return response;
}

const initialState = {
    result: null,
    isLoading: true,
    error: null,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, result: action.result };
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, trailer: action.error };
        }
        default:
            return prevState;
    }
};

const Trailer = ({ name }) => {
    const [{ result, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        let isMounted = true;

        youtubeApiGet(`${name} trailer`)
            .then(results => {
                setTimeout(() => {
                    if (isMounted) {
                        dispatch({ type: 'FETCH_SUCCESS', result: results });
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
    }, [name]);

    if (isLoading) {
        return (
            <LoadingAndErrors>
                <n style={{ fontFamily: 'monospace' }}>
                    Data is being loaded ...
                </n>
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
    console.log(result.items[0]);
    return <div>{name}</div>;
};

export default Trailer;
