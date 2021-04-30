import React from 'react';
import datas from './Datas';

const Profile = ({match, location}) => {
    const {id} = match.params;
    console.log(location);
    //데이터 가공 작업
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
