import React from 'react';
import datas from './Datas';

const Profile = ({match}) => {
    const {id} = match.params;
    const [data] = datas.filter((data) => data.id === id);
    console.log(data);

    return (
        <div>
            <h3>{data.id}</h3>
            <p>{data.name}</p>
        </div>
    );
};

export default Profile;
