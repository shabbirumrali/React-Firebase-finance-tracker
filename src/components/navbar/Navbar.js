import { Link } from 'react-router-dom'
// import { AuthContext } from '../../context/AuthContext'
import { useLogout } from '../../hooks/useLogout'
// styles
import styles from './Navbar.module.css'

const Navbar = () => {
  const { error, pending, logout } = useLogout()
  return (
    <nav className={styles.navbar}>
        <ul>
            <li className={styles.title}>My Money</li>

            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li>
              <button className='btn' onClick={logout}>Logout</button>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar