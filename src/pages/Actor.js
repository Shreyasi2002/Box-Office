/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router';
import CastCredits from '../components/actors/CastCredits';
import MainData from '../components/actors/MainData';

import { apiGet } from '../misc/config';
import { InfoBlock, LoadingAndErrors, ShowPageWrapper } from './Show.styled';

const initialState = {
    person: null,
    isLoading: true,
    error: null,
};

const reducer = (prevState, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS': {
            return { isLoading: false, error: null, person: action.person };
        }

        case 'FETCH_FAILED': {
            return { ...prevState, isLoading: false, error: action.error };
        }
        default:
            return prevState;
    }
};

const Actor = () => {
    const { id } = useParams();

    const [{ person, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        let isMounted = true;

        apiGet(`/people/${id}?embed[]=castcredits`)
            .then(results => {
                setTimeout(() => {
                    if (isMounted) {
                        dispatch({ type: 'FETCH_SUCCESS', person: results });
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
                <br />
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

    console.log(person);

    return (
        <ShowPageWrapper>
            <MainData
                image={person.image}
                name={person.name}
                id={person.id}
                country={person.country}
                birthday={person.birthday}
                gender={person.gender}
                deathday={person.deathday}
            />

            <InfoBlock>
                <h2 style={{ fontSize: '27px' }}>Known For</h2>
                <CastCredits cast={person._embedded.castcredits} />
            </InfoBlock>
        </ShowPageWrapper>
    );
};

export default Actor;
