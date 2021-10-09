import React from 'react';
import Header from '../components/header';
import * as ROUTER from '../components/constants/Router';
import logo from '../logo.svg';
import Profiles from '../components/profiles';

const SelectionProfileContainer = ({ user, setProfile }) => {
    return (
        <>
            <Header bg={false}>
                <Header.Frame>
                    <Header.Logo to={ROUTER.HOME} src={logo} alt="Netflix" />
                </Header.Frame>
            </Header>

            <Profiles>
                <Profiles.Title>Who's watching?</Profiles.Title>
                <Profiles.List>
                    <Profiles.User
                        onClick={() => setProfile({ displayName: user.displayName, photoURL: user.photoURL })}
                        data-testid="user-profile"
                    >
                        <Profiles.Picture src={user.photoURL} />
                        <Profiles.Name>{user.displayName}</Profiles.Name>
                    </Profiles.User>
                </Profiles.List>
            </Profiles>
        </>
    )
}

export default SelectionProfileContainer
