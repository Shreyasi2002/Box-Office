import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
    const [show, setShow] = useState(null);
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState(null);

    useEffect(() => {
        let isMounted = true;

        apiGet(`/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast`)
            .then(results => {
                setTimeout(() => {
                    if (isMounted) {
                        setShow(results);
                        setIsLoading(false);
                    }
                }, 1000);
            })
            .catch(err => {
                if (isMounted) {
                    setErrors(err.message);
                    setIsLoading(false);
                }
            });

        return () => {
            isMounted = false;
        };
    }, [id]);

    if (isLoading) {
        return <div>Data is being loaded...</div>;
    }

    if (errors) {
        return <div>Error Occured : {errors}</div>;
    }
    return <div>This is show page</div>;
};

export default Show;
