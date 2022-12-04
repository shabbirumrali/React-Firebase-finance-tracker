import { useState } from 'react';
import { projectAuth } from '../firebase/config';

export const useSignup = () => {
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);

    const signup = async (email, password, name) => {
        setError(null)
        setIsPending(true)

        try {
            // signup form
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)
            console.log(res.user)

            if(!res) {
                throw new Error('Some thing is not correct while creating the user')
            }
            await res.user.updateProfile({ displayName: name })
            setError(null)
            setIsPending(false)
        }
        catch (err) {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
        }
    };

    return { error, isPending, signup }
}