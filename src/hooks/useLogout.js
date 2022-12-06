import { useEffect, useState } from "react"
import { projectAuth } from "../firebase/config"
import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {
    const [error, setError] = useState(null)
    const [pending, setPending] = useState(false)
    const [isCanceled, setIsCanceled] = useState(false)
    const { dispatch } = useAuthContext()

    const logout = async () => {
        setError(null)
        setPending(true)

        // sign out user
        try {
            await projectAuth.signOut()

            // dispatch action to null the user value
            dispatch({ type: 'LOGOUT' })
           if(!isCanceled) {
               setError(null)
               setPending(false)
           }
           setPending(false)
        } catch (error) {
            if(!isCanceled) {
                console.log(error.message)
                setError(error.message)
                setPending(false)
            }
        }
    }
    useEffect(() => {
        return () => setIsCanceled(true)
    }, [])

    return { error, pending, logout }
} 