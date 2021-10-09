import React from 'react';
import * as ROUTES from '../components/constants/Router';
import Header from '../components/header';
import logo from '../logo.svg';

export function HeaderContainer({ children }) {
    return (
        <Header>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
                <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
            </Header.Frame>
            {children}
        </Header>
    );
}