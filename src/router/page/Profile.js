import React from 'react';
import datas from './Datas';
import WithRouterSample from './WithRouterSample';

const Profile = ({match, location}) => {
    const {id} = match.params;
    console.log(location);
    //데이터 가공 작업
    const [data] = datas.filter((data) => data.id === id);
    console.log(data);

    if (data === undefined) {
        return <div>그런 data가 없어.....</div>;
    }

    return (
        <div>
            <h3>{data.id}</h3>
            <p>{data.name}</p>
            <WithRouterSample />
        </div>
    );
};

export default Profile;
