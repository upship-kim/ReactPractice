import React from 'react';
import {withRouter} from 'react-router-dom';

const WithRouterSample = ({match, location}) => {
    return (
        <div>
            <h2>match</h2>
            <textarea
                value={JSON.stringify(match, null, 2)}
                rows={7}
                readOnly={true}
            />
            <h2>location</h2>
            <textarea
                value={JSON.stringify(location, null, 2)}
                rows={7}
                readOnly={true}
            />
        </div>
    );
};

export default withRouter(WithRouterSample);
