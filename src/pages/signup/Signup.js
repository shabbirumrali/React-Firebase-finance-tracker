import { useState } from 'react';

// styles
import styles from './Signup.module.css';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password, name);
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

      <button className='btn'>Signup</button>  
      
    </form>
  )
}

export default Signup;