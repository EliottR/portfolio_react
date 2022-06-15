import React from 'react';
import Name from '../components/Name';
import { Portrait } from '../components/Portrait';

const Profile = () => {


    return (
        <>
        <Name />
        <div className="profile" id='ppp'>
            <Portrait />
        </div >
        </>
    );
};

export default Profile;