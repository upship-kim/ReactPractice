import React, {useEffect, useState} from 'react';

export default function usePromise(getAxios, category) {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const process = async () => {
            setLoading(true);
            try {
                const result = await getAxios();
                setResponse(result);
            } catch (e) {
                setError(e);
            }
            setLoading(false);
        };
        process();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, category);

    return [response, error, loading];
}
