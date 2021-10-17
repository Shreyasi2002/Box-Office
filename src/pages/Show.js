import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { apiGet } from '../misc/config';

const Show = () => {
    const [show, setShow] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        apiGet(
            `/shows/${id}?embed[]=seasons&embed[]=episodes&embed[]=cast`
        ).then(results => {
            setShow(results);
        });
    }, [id]);
    return <div>This is show page</div>;
};

export default Show;
