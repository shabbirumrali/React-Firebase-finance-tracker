import { useReducer, useEffect, useState } from "react"
import { projectFirestore, timestamp } from "../firebase/config"

const initialState = {
    document: null,
    error: null,
    isPending: false,
    success: null
}

const firestoreReducer = (state, action) => {
    switch(action.type) {
        case 'IS_PENDING':
            return { isPending: true, document: null, error: null, success: false }
        case 'ADDED_DOCUMENT':
            return { document: action.payload, isPending: false, success: true, error: null }
        case 'ERROR':
            return { document: null, isPending: false, success: false, error: action.payload }
        case 'DELETED_DOCUMENT':
            return { isPending: false, document: action.payload, error: null, success: true }
        default:
            return state
    }
}
export const useFirestore = (collection) => {
    const [response, dispatch] = useReducer(firestoreReducer, initialState)
    const [isCancelled, setIsCancelled ] = useState(false)
    
    // collection ref
    const ref = projectFirestore.collection(collection)

    // Only Dispatched if not cancelled
    const dispatchIfNotCancelled = (action) => {
        if(!isCancelled) {
         dispatch(action)       
        }
    }
    
    // Add a document
    const addDocument = async (doc) => {
        dispatch({ type: 'IS_PENDING' })
        
        try {
            const createdAt = timestamp.fromDate(new Date())
            const addedDocument = await ref.add({ ...doc, createdAt })
            dispatchIfNotCancelled({ type: 'ADDED_DOCUMENT', payload: addedDocument })
            console.log(response)
        } catch(err) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: err.message})
        }
    }
    
    // Delete a document
    const deleteDocument = async (id) => {
        dispatch({ type: 'IS_PENDING' })

        try {
            const deletedAccount = await ref.doc(id).delete()
            dispatchIfNotCancelled({ type: 'DELETED_DOCUMENT', payload: deletedAccount })
        } catch (error) {
            dispatchIfNotCancelled({ type: 'ERROR', payload: 'could not delete message'})
        }
    }

    // clean up function
    useEffect(() => {
        return () => setIsCancelled(true)
    }, [])

    return { response, addDocument, deleteDocument }
}