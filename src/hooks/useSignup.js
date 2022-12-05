import { useState } from 'react'
import { useAuthContext } from './useAuthContext'
import { projectAuth } from '../firebase/config'

export const useSignup = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const { dispatch } = useAuthContext()

    const signup = async (email, password, name) => {
        setError(null)
        setPending(true)

        try {
            // create a user
            const res = await projectAuth.createUserWithEmailAndPassword(email, password)

            if(!res) {
                throw new Error('Something went wrong on server side')
            }
            // update username
            await res.user.updateProfile({ displayName: name })
            
            // dispatch login action
            dispatch({ type: 'LOGIN', payload: res.user })

            setError(null)
            setPending(false)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setPending(false)
        }

    }
    return { error, pending, signup }
}