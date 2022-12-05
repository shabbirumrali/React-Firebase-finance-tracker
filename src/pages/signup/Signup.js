import { useState } from 'react';
import { useSignup } from '../../hooks/useSignup';

// styles
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const { error, pending, signup } = useSignup();

  const handleSubmit = (e) => {
    e.preventDefault();

    signup(email, password, name);
    setEmail('');
    setPassword('');
    setName('');
  }
  return (
    <form onSubmit={handleSubmit} className={styles['signup-form']}>
      <h2>Signup form</h2>

      <label>
        <span>Email:</span>
        <input type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>Password:</span>
        <input type='password'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </label>

      <label>
        <span>Display Name</span>
        <input type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      {pending ? <button className='btn' disabled>loading...</button> : <button className='btn'>Signup</button>}  
      {error &&  "There is an error"}
    </form>
  )
}

export default Signup;