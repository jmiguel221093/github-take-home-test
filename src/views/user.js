import { useEffect, useState } from 'react';
import { EmptyState, Icons, Page, Spinner } from "../components";

import { getTheUser } from '../api';

import { UserProfile } from './user-components';
import { getRequestErrorMessage } from '../utils';

const User = () => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);

    const getUserData = async () => {
        let [error, data] = await getTheUser('jmiguel221093');
        console.log(data);
        setUser(data);
        setError(error);
    };

    useEffect(()=>{
        getUserData();
    },[])

    return (
        <Page 
            id="user-info"
            title="User info"
        >
            {
                !user && !error ? 
                <Spinner />:
                !error ?
                <UserProfile
                    url={user?.html_url}
                    profileImage={user?.avatar_url}
                    name={user?.name}
                    login={user?.login}
                    bio={user?.bio}
                    location={user?.location}
                    blog={user?.blog}
                    mail={user?.email}
                    followers={user?.followers}
                    following={user?.following}
                    repos={user?.public_repos}
                    gists={user?.public_gists}
                />:
                <EmptyState
                    icon={Icons.NotFount}
                    title={`${error.status} Error`}
                    description={getRequestErrorMessage(error.status, 'user')}
                />
            }
        </Page>
    )
}

export default User;