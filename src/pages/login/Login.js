import { useState } from 'react';

// styles
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    console.log(email, password)
  }

  return (
    <form onSubmit={handleSubmit} className={styles['login-form']}>
      <h2>Login</h2>

      <label>
        <span>Email:</span>
        <input 
          type='email' 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </label>

      <label>
        <span>Password:</span>
        <input 
          type='password'
          onChange={e => setPassword(e.target.value)}
          value={password} 
        />
      </label>

      <button className="btn">Login</button>
    </form>
  )
}

export default Login;