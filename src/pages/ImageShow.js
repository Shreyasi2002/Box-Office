/* eslint-disable no-unused-vars */
import React, { useEffect, useReducer, useState } from 'react';
import { useParams } from 'react-router';

import { apiGet } from '../misc/config';

import ImageSlider from '../components/shows/Image-Slider/ImageSlider';
import { LoadingAndErrors } from './Show.styled';

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

const ImageShow = () => {
    const { id } = useParams();

    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        let isMounted = true;

        apiGet(`/shows/${id}/images`)
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
    return <ImageSlider slides={show} />;
};

export default ImageShow;
