import { useEffect, useState } from 'react'
import { useFirestore } from '../../hooks/useFirestore'

const TransactionForm = ({ uid }) => {
    const [name, setName] = useState('')
    const [amount, setAmount] = useState('')
    const { addDocument, response } = useFirestore('transactions')

    const handleSubmit = (e) => {
        e.preventDefault()
        addDocument({
            uid,
            name,
            amount
        })
        setName('')
        setAmount('')
    }

    // reset the form fields
    // useEffect(() => {
    //     if(response.success) {
    //         setAmount('')
    //         setName('')
    //     }
    // }, [response.success])
  return (
    <>
        <h3>Add a Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Transaction name:</span>
                <input 
                    type='text'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    required 
                />
            </label>
            <label>
                <span>Amount ($)</span>
                <input 
                    type='number'
                    onChange={(e) => setAmount(e.target.value)}
                    value={amount}
                    required 
                />
            </label>
            <button>Submit</button>

        </form>
    </>
  )
}

export default TransactionForm