import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const IsUserRedirect = ({ user, loggedInPath, component: Component, ...rest }) => {
    return (
        <Route
            {...rest}
            render={() => {
                if (!user) {
                    return <Component />;
                }
                if (user) {
                    return (
                        <Redirect
                            to={loggedInPath} />
                    );
                }
                return null;
            }}
        />
    );
};

export function ProtectedRoute({ user, component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={({ location }) => {
                console.log(location);
                if (user) {
                    return <Component />;
                }

                if (!user) {
                    return (
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: { from: location },
                            }}
                        />
                    );
                }

                return null;
            }}
        />
    );
}