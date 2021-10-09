import { useState, useEffect, useContext } from 'react';
import { FirebaseContext } from '../context/firebase';

const useAuthListener = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    const { firebaseApp } = useContext(FirebaseContext);

    useEffect(() => {
        const listener = firebaseApp.auth().onAuthStateChanged((authUser) => {
            if (authUser) {
                console.log(authUser);
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
                setUser(null);
            }
        });

        return () => listener();
    }, []);

    return { user };
}

export default useAuthListener
