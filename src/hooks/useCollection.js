import { useState } from 'react'
import { projectFirestore } from "../firebase/config"

export const useCollectoion = (collection) => {
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(null)
 
    // collection ref
    const ref = projectFirestore.collection(collection)

    const getDocument = async (collectionName) => {
        setIsPending(true)
        setError(null)

        try {
            const unsubs = await ref.onSnapshot(() => {})
            setIsPending(false)
            setError(null)
        } catch (err) {
            console.log(err.message)
            setError(err.message)
            setIsPending(false)
        }
    }
    return { isPending, error, getDocument }
}