import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Form from '../components/form'
import FooterContainer from '../containers/footer'
import { HeaderContainer } from '../containers/header';

import { FirebaseContext } from '../context/firebase';
import * as ROUTES from '../components/constants/Router';

const Signin = () => {
    const history = useHistory();
    const { firebaseApp } = useContext(FirebaseContext);

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const isInvalid = password === '' || emailAddress === '';


    const handleSignin = (event) => {
        event.preventDefault();

        //firebase work forms
        console.log(firebaseApp.auth());
        firebaseApp
            .auth()
            .signInWithEmailAndPassword(emailAddress, password)
            .then(() => {
                history.push(ROUTES.BROWSE);
            })
            .catch((error) => {
                setEmailAddress('');
                setPassword('');
                setError(error.message);
            });
    };
    return (
        <>
            <HeaderContainer>
                <Form>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input
                            placeholder="Email address"
                            value={emailAddress}
                            onChange={({ target }) => setEmailAddress(target.value)}
                        />
                        <Form.Input
                            type="password"
                            value={password}
                            autoComplete="off"
                            placeholder="Password"
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
                            Sign In
                        </Form.Submit>
                    </Form.Base>

                    <Form.Text>
                        New to Netflix? <Form.Link to="/signup">Sign up now.</Form.Link>
                    </Form.Text>
                    <Form.TextSmall>
                        This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.
                    </Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer />
        </>
    )
}

export default Signin