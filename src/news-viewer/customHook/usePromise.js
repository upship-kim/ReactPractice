import React, {useEffect, useState} from 'react';

function usePromise(axios, category) {
    const [resolve, setResolve] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const result = await axios();
                setResolve(result);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, category);

    return [resolve, error, loading];
}

export default usePromise;
